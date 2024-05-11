<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { openaiApi } from '@/api/openai'

const paraphraseInput = ref('')
const paraphraseOutput = ref('')

const tooltipVisible = ref(false)

type SelectionStatus = 'initial' | 'tooltip' | 'popover'

const status = ref<SelectionStatus>('initial')

let selection: Selection | null = null

const replaceContent = ref('')

const tooltipPosition = ref({
  x: 0,
  y: 0,
})

async function paraphraseText() {
  try {
    paraphraseOutput.value = await openaiApi.getParaphraseFullContent(paraphraseInput.value)
  }
  catch (error) {
    return paraphraseOutput.value = 'Error'
  }
}

async function paraphraseSelection(selection: string) {
  try {
    const paraphrasedContent = await openaiApi.getParaphraseFullContent(selection)

    return paraphrasedContent
  }
  catch (error) {
    return paraphraseOutput.value = 'Error'
  }
}

function handleBlur() {
  // tooltipVisible.value = false
  if (selection?.anchorNode && selection?.focusNode)
    return
  const newRange = document.createRange()

  newRange.
}

function handleMouseUp() {
  const selection = window.getSelection()

  if (!selection?.rangeCount || selection?.toString().length === 0)
    return

  tooltipVisible.value = true

  const selectionValue = selection.toString()

  paraphraseSelection(selectionValue)
    .then((newParaphrase: string) => {
      // range.deleteContents()
      replaceContent.value = newParaphrase
      // const nodifyNewParaphrase = document.createRange().createContextualFragment(newParaphrase) // Convert string to DOM fragment

      // const span = document.createElement('span')

      // span.appendChild(nodifyNewParaphrase)

      // range.insertNode(span)
    })
    .catch((error) => {
      console.error(error)
    })
}

function handleClickReplace() {
  const selection = window.getSelection()

  if (!selection?.rangeCount || selection?.toString().length === 0)
    return

  tooltipVisible.value = true

  const range = selection.getRangeAt(0)

  range.deleteContents()

  range.insertNode(document.createTextNode(replaceContent.value))
}

function handleOpenPopover() {
  status.value = 'popover'
}

onMounted(() => {
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection()

    if (!selection?.rangeCount || selection.toString().length === 0) {
      tooltipVisible.value = false

      return
    }
    const range = selection.getRangeAt(0)

    const boundingRect = range.getBoundingClientRect()

    tooltipPosition.value = {
      x: boundingRect.right,
      y: boundingRect.top,
    }
  })
})
</script>

<template>
  <div :class="$style.paraphraserInputWrapper">
    <div :class="$style.paraphraserInputLeft">
      <div :class="$style.paraphraserInputTop">
        <textarea id="paraphraser-input-box" v-model="paraphraseInput" placeholder="To rewrite text, enter or paste it here and press &quot;Paraphrase.&quot;" :class="$style.paraphraserInputTextarea" />
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
      id="bounding"
      :class="$style.paraphraserInputRight"
      contenteditable
      @blur="handleBlur"
      @mouseup="handleMouseUp"
    >
      <p v-if="paraphraseOutput" :class="$style.paraphraseOutput">
        {{ paraphraseOutput }}
      </p>
    </div>

    <div
      v-if="status = 'tooltip'"
      id="tooltip"
      :style="{
        position: 'fixed',
        backgroundColor: 'red',
        width: '20px',
        height: '20px',
        pointerEvents: 'none',
        left: `${tooltipPosition.x}px`,
        top: `${tooltipPosition.y}px`,
      }"
      @click="handleOpenPopover"
    />

    <div
      v-else-if="status = 'popover'"
      id="tooltip"
      :style="{
        position: 'fixed',
        backgroundColor: '#dddd',
        border: '1px solid red',
        width: '200px',
        height: '200px',
        pointerEvents: 'none',
        left: `${tooltipPosition.x}px`,
        top: `${tooltipPosition.y}px`,
      }"
    >
      {{ replaceContent }}

      <button style="padding: 10px; border-radius: 15px; background-color: green; color: white;" @click="handleClickReplace">
        Apply
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
  .paraphraserInputWrapper {
    display: flex;
    justify-content:space-between;
    background-color: var(--color-background-secondary);
  }

  .paraphraserInputLeft {
    flex: 1 1 50%;
    background-color: white;
    border-right: 3px solid var(--color-border-primary);
  }

  .paraphraserInputRight {
    flex: 1 1 50%;
    background-color: white;
    padding: 30px 36px 8px 20px;
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
    line-height:32px;
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
</style>
