<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import createChat from '@/api/gemini'

import pop from '@/assets/images/pop.png'
import close from '@/assets/images/close.png'
import refresh from '@/assets/images/refresh.png'
import left from '@/assets/images/chevron-left.png'
import right from '@/assets/images/chevron-right.png'
import apply from '@/assets/images/apply.png'
import logo from '@/assets/images/logo-sgroup.png'

import { getSelection, getSelectionRect } from '@/core'
import { attachFloating } from '@/core/floating'

const paraphraseInput = ref('')
const paraphraseOutput = ref('')
const replaceContent = ref('')

const outPutRef = ref<HTMLElement>()
const popoverRef = ref<HTMLElement>()
const tooltipRef = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()
const textAreaRef = ref<HTMLTextAreaElement>()
const currentElementRef = ref<HTMLElement>()
const isLoading = ref(false)

type SelectionStatus = 'initial' | 'tooltip' | 'popover'

const status = ref<SelectionStatus>('initial')

let selection: Selection | null = null

const rect = ref(new DOMRect())
const childRects = ref<Array<DOMRect>>([])

const virtualElement = ref({
  getBoundingClientRect() {
    return rect.value || new DOMRect()
  },
  getClientRects() {
    return childRects.value || []
  },
})

const mousePosition = ref({
  x: 0,
  y: 0,
})

async function paraphraseText() {
  isLoading.value = true

  try {
    paraphraseOutput.value = await createChat.getParaphraseFullContent(paraphraseInput.value)
  }
  catch (error) {
    return paraphraseOutput.value = 'Error'
  }
  finally {
    isLoading.value = false
  }
}

async function paraphraseSelection(selection: string) {
  isLoading.value = true

  try {
    const paraphrasedContent = await createChat.getParaphraseFullContent(selection)

    return paraphrasedContent
  }
  catch (error) {
    return paraphraseOutput.value = 'Error'
  }
  finally {
    isLoading.value = false
  }
}

function reselectElement() {
  if (!selection?.anchorNode || !selection.focusNode)
    return
  const range = document.createRange()
  range.setStart(selection?.anchorNode, selection?.anchorOffset || 0)
  range.setEnd(selection?.focusNode, selection?.focusOffset || 0)
  selection.removeAllRanges()
  selection.addRange(range)
}

function handleBlur() {
  if ((outPutRef.value && checkMouseInElement(outPutRef.value))
    || (popoverRef.value && checkMouseInElement(popoverRef.value))
    || (tooltipRef.value && checkMouseInElement(tooltipRef.value))
    || (inputRef.value && checkMouseInElement(inputRef.value))
    || (textAreaRef.value && checkMouseInElement(textAreaRef.value))
  ) {
    reselectElement()
  }

  else {
    status.value = 'initial'
    replaceContent.value = ''
  }
}

// function reselectElement(element: HTMLElement) {
//   if (!element)
//     return status.value = 'initial'

//   const scrollTop = element.scrollTop
//   const scrollLeft = element.scrollLeft

//   if (isInputOrTextarea(element)) {
//     const selection = getSelection(element)

//     setSelection(element, {
//       start: selection.start,
//       end: selection.end,
//       direction: selection.direction || 'forward',
//     })
//   }
//   else {
//     setSelectionNode(element)
//   }

//   element.scrollTop = scrollTop
//   element.scrollLeft = scrollLeft
// }

// async function handleBlur(e: FocusEvent) {
//   const element = currentElementRef.value

//   if (!element)
//     return status.value = 'initial'

//   if (e.target !== currentElementRef.value)
//     return

//   const currentSelection = getSelection(element)
//   const currentNativeSelection = getNativeSelection()

//   const isMouseInBound = checkMouseInElement(element)

//   const selection = isInputOrTextarea(element) ? currentSelection : currentNativeSelection

//   if (isMouseInBound) {
//     reselectElement(selection)
//   }
//   else {
//     status.value = 'initial'
//     replaceContent.value = ''
//   }
// }

function checkMouseInElement(element: HTMLElement) {
  if (!element?.getBoundingClientRect())
    return

  const elementBound = element.getBoundingClientRect()

  return mousePosition.value.x >= elementBound.left
    && mousePosition.value.x <= elementBound.right
    && mousePosition.value.y >= elementBound.top
    && mousePosition.value.y <= elementBound.bottom
}

function handleClickApply() {
  if (!selection?.rangeCount)
    return

  const range = selection?.getRangeAt(0)

  range?.deleteContents()

  range?.insertNode(document.createTextNode(replaceContent.value))

  replaceContent.value = ''

  status.value = 'initial'

  selection = null
}

function handleMouseUp(element: HTMLElement) {
  currentElementRef.value = element

  const selection = getSelection(element)

  if (selection.start === 0 && selection.end === 0 && selection.text === '')
    return status.value = 'initial'

  status.value = 'tooltip'

  nextTick(() => {
    attachFloating(virtualElement.value, tooltipRef.value!)
  })
}

async function handleOpenPopover() {
  status.value = 'popover'

  selection = window.getSelection()

  if (!selection?.rangeCount || selection?.toString().length === 0)
    return status.value = 'initial'

  const selectionValue = selection.toString()

  try {
    const newParaphrase = await paraphraseSelection(selectionValue)
    replaceContent.value = newParaphrase
  }

  catch (error) {
    console.error(error)
  }

  nextTick(() => {
    attachFloating(virtualElement.value, popoverRef.value!, {
      placement: 'bottom',
    })
  })
}

onMounted(() => {
  document.addEventListener('selectionchange', () => {
    const selectionRect = getSelectionRect()

    if (!selectionRect.rect)
      return (status.value = 'initial')

    rect.value = new DOMRect(
      selectionRect.rect.left,
      selectionRect.rect.top,
      selectionRect.rect.width,
      selectionRect.rect.height,
    )

    childRects.value = selectionRect.children.map(
      child => new DOMRect(child.left, child.top, child.width, child.height),
    )
  })

  document.addEventListener('mousemove', (e) => {
    mousePosition.value.x = e.clientX
    mousePosition.value.y = e.clientY
  })
})
</script>

<template>
  <div :class="$style.paraphraserInputWrapper">
    <div :class="$style.paraphraserInputLeft">
      <div :class="$style.paraphraserInputTop">
        <textarea
          id="paraphraser-input-box" v-model="paraphraseInput"
          placeholder="To rewrite text, enter or paste it here and press &quot;Paraphrase.&quot;"
          :class="$style.paraphraserInputTextarea"
        />
      </div>

      <div :class="$style.paraphraserInputBottom">
        <div :class="$style.paraphraserInputUploadWrapper">
          <input id="upload" type="file" name="upload" :class="$style.paraphraserInputUpload">

          <label for="upload" :class="$style.paraphraserInputLabel">
            <i class="fa-solid fa-cloud-arrow-up" :class="$style.paraphraserInputIcon" />
            Upload Doc
          </label>
        </div>

        <button :class="$style.paraphraserInputBtn" @click="paraphraseText">
          Paraphrase
        </button>
      </div>
    </div>

    <div
      id="outputId"
      ref="outPutRef"
      :class="$style.paraphraserOutPutRight"
      contenteditable
      @blur="handleBlur"
      @mouseup="handleMouseUp(outPutRef!)"
    >
      <span v-if="paraphraseOutput" :class="$style.paraphraseOutput">
        {{ paraphraseOutput }}
      </span>
    </div>

    <!-------------------------------------- Input ----------------------------->
    <!-- <div :class="$style.paraphraserOutputLabel">
      <input
        id="inputId"
        ref="inputRef"
        v-model="paraphraseOutput"
        type="text"
        :class="$style.paraphraserInput"
        placeholder="input"
        @mouseup="handleMouseUp(inputRef!)"
      >

      <textarea
        id="textArea"
        ref="textAreaRef"
        v-model="paraphraseOutput"
        name="textArea"
        :class="$style.paraphraserTextarea"
        placeholder="textarea"
        @mouseup="handleMouseUp(textAreaRef!)"
      />
    </div> -->

    <!-------------------------------------- tooltip and popover ----------------------------->
    <div
      v-if="status === 'tooltip'" id="tooltip" ref="tooltipRef" :class="$style.paraphraserTooltip"
      style="position: fixed;" @click="handleOpenPopover"
    >
      <img :src="logo" alt="S-paraphraser icon" style="width: 20px; height: 20px;">
    </div>
    <!----------------------------------->

    <div v-if="status === 'popover'" ref="popoverRef" :class="$style.paraphraserOutPutWrapper" style="position: fixed;">
      <div :class="$style.paraphraserOutPutHeader">
        <img :src="pop" alt="S-pop icon" style="width: 32px; height: 32px;">

        <span :class="$style.paraphraserOutPutTitle">S-Group Paraphraser</span>

        <button style="margin-left: auto;" @click="status = 'initial'">
          <img :src="close" alt="S-pop icon" style="width: 24px; height: 24px">
        </button>
      </div>

      <div :class="$style.paraphraserOutPutMain">
        <div :class="$style.paraphraserOutPutActions">
          <div :class="$style.paraphraserAction">
            <button :class="$style.paraphraserActionBtn">
              <img :src="refresh" alt="S-icon" style="width: 18px; height: 18px">
            </button>

            <span :class="$style.paraphraserDesc">Refresh</span>
          </div>

          <div :class="$style.paraphraserAction">
            <button :class="$style.paraphraserActionBtn">
              <img :src="left" alt="S-icon" style="width: 18px; height: 18px">
            </button>

            <span :class="$style.paraphraserDesc">1/1</span>

            <button :class="$style.paraphraserActionBtn">
              <img :src="right" alt="S-icon" style="width: 18px; height: 18px">
            </button>
          </div>
        </div>

        <div :class="$style.paraphraserOutPutResult">
          <p :class="$style.paraphraserContent">
            {{ replaceContent }}
          </p>
        </div>
      </div>

      <div :class="$style.paraphraserOutPutFooter">
        <button :class="$style.paraphraserOutPutBtn">
          Copy
        </button>

        <button :class="[$style.paraphraserOutPutBtn, $style.paraphraserBtnPrimary]" @click="handleClickApply">
          <img :src="apply" alt="S-icon" style="width: 24px; height: 24px">
          <span :class="$style.paraphraserBtnContent">Apply</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.paraphraserInputWrapper {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background-secondary);
}

.paraphraserInputLeft {
  flex: 1 1 50%;
  background-color: white;
  border-right: 3px solid var(--color-border-primary);
}

.paraphraserOutPutRight {
  flex: 1 1 50%;
  background-color: white;
  padding: 20px 36px 8px 20px;
}

.paraphraserInputTop {
  padding: 20px 36px 8px 20px;
}

.paraphraserInputBottom {
  padding: 8px 15px;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;

}

.paraphraserInputTextarea {
  width: 100%;
  height: 368px;
  border: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  overflow-wrap: break-word;
  line-height: 32px;
  text-wrap: wrap;
  word-break: break-word;
  align-self: flex-start;

  &::placeholder {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }
}

.paraphraseOutput {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  line-height: 32px;

}

.paraphraserInputUploadWrapper {
  display: flex;
}

.paraphraserInputUpload {
  visibility: hidden;
  width: 0;
  height: 0;
  appearance: none;
  overflow: hidden;
  cursor: default;
  text-overflow: ellipsis;
  white-space: pre;
}

.paraphraserInputLabel {
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  line-height: 16px;
  user-select: text;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: var(--color-primary)
  }
}

.paraphraserInputIcon {
  font-size: 20px;
  line-height: 40px;
}

.paraphraserInputBtn {
  background-color: var(--color-primary);
  padding: 5px 25px;
  border-radius: 25px;
  font-size: 17.5px;
  font-weight: 700;
  line-height: 30px;
  color: var(--color-font-white);
  min-height: 40px;
  min-width: 64px;
  text-align: center;

  &:hover {
    background-color: var(--color-hover-primary)
  }
}

.paraphraserLoadingBtn {
  background-color: var(--color-gray-light);
  padding: 5px 25px;
  border-radius: 25px;
  font-size: 17.5px;
  font-weight: 700;
  line-height: 30px;
  color: var(--color-font-white);
  min-height: 40px;
  min-width: 64px;
  text-align: center;
  user-select: none;
  pointer-events: none;
}

.paraphraserTooltip {
  background-color: #ffffff;
  color: #555555;
  cursor: pointer;
  padding: 8px;
  border: 1px solid #555555;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 90px;
  font-weight: 700;
  z-index: 999;
}

.paraphraserOutPutWrapper {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 480px;
  box-shadow: 0px 6px 12px 0px #0000002E;
  padding: 12px 12px 8px 12px;
  border-radius: 12px;
}

.paraphraserOutPutHeader {
  display: flex;
  align-items: center;
  gap: 8px;
}

.paraphraserOutPutTitle {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
}

.paraphraserOutPutMain {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.paraphraserOutPutActions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.paraphraserOutputLabel {
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
  color: #A9A9A9;
  user-select: none;
}

.paraphraserInput {
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #555555;
}

.paraphraserTextarea {
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #555555;
  resize: none;
}

.paraphraserAction {
  display: flex;
  align-items: center;
  gap: 4px;
}

.paraphraserActionBtn {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paraphraserDesc {
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
  color: #A9A9A9;
  user-select: none;
}

.paraphraserOutPutResult {
  padding: 12px;
  border-radius: 10px;
  background: #F8F8F8;
  min-height: 120px;
  overflow-y: auto;
}

.paraphraserContent {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #555555;
}

.paraphraserOutPutFooter {
  padding: 0 16px 16px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.paraphraserOutPutBtn {
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 12px;
  border-radius: 40px;
  border: 1px solid #DADCE0;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
}

.paraphraserBtnPrimary {
  background: #4643DD;
  color: #ffffff;
}

.paraphraserBtnContent {
  padding: 0 4px;
}
</style>
