<script setup>
import { onMounted, reactive } from 'vue'
import { fetchParaphrase } from '@/api/openai'

const paraphraseInput = ref('asdasds')
const position = reactive({
  x: '',
  y: '',
})
const tooltipVisible = ref(false)
async function paraphraseText() {
  try {
    const paraphrasedText = await fetchParaphrase(paraphraseInput.value, '')
  }
  catch (error) {
    return paraphraseInput.value = 'Error'
  }
}

// onMounted(() => {
//   window.addEventListener('selectionchange', () => {
//     const selection = getSelection()
//     if (!selection?.rangeCount || selection.toString().length === 0) {
//       tooltipVisible.value = false

//       return
//     }

//     const range = selection.getRangeAt(0)

//     position.value = {
//       x: range.getBoundingClientRect().right,
//       y: range.getBoundingClientRect().top,
//     }
//   })

//   function handleMouseUp() {
//     tooltipVisible.value = false
//   }
// })
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

    <div :class="$style.paraphraserInputRight" contenteditable>
      <p v-if="paraphrasedText" class="$style.paraphrasedOutput">
        {{ paraphrasedText }}
      </p>
    </div>

    <div
      id="tooltip"
      :style="{
        position: 'fixed',
        backgroundColor: 'red',
        width: '20px',
        height: '20px',
        pointerEvents: 'none',
      }"
    />
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
