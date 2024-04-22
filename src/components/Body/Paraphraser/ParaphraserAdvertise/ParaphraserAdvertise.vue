<script setup>
import logo from '@/assets/images/gg-chrome.png'

const isClosed = true;
</script>

<template>
  <div v-if="isClosed" :class="$style.paraphraserAdvertise">
    <p :class=" $style.paraphraserAdTitle">
      QuillBot for Chrome
    </p>

    <p :class="$style.paraphraserAdContent">
      Write like a pro, everywhere you write.
    </p>

    <button :class="$style.paraphraseAdBtn">
      <img :src="logo" alt="Add to Chrome Logo" :class="$style.paraphraserAdLogo">
      Add to Chrome. It's free!
    </button>

    <button @click="isClosed === false">
        <i class="fa-solid fa-x" :class="$style.paraphraserAdIcon"/>
    </button>

  </div>
</template>

<style lang="scss" module>
.paraphraserAdvertise {
    padding: 16px 20px 16px 32px;
    background-color:var(--color-primary);
    margin-bottom: 8px;
    min-height: 70px;
    display: flex;
    align-items:center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 22px ;
  }

  .paraphraserAdTitle {
    font-size: 16px;
    font-weight: 600;
    line-height:10px;
    padding-right: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-right: 1.25px solid var(--color-font-white);
    color: var(--color-font-white);
  }
  
  .paraphraserAdContent {
    color: var(--color-font-white);
    flex-grow: 1;
    font-size: 16px;
    font-weight:400;
    line-height:10px;
    padding: 5px 0 5px 24px;
  }

  .paraphraseAdBtn {
    padding: 6px 16px;
    display: flex;
    align-items: center;
    color: var(--color-primary);
    background-color: var(--color-font-white);
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    line-height: 25px;
    overflow: hidden;
    margin-right:8px;

    &:hover {
      background-color: var(--color-background-secondary);
    }
  }

  .paraphraserAdLogo {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }

  .paraphraserAdIcon {
    font-size: 12px;
    color: var(--color-font-white);
    font-weight: 400;
    line-height: 20px;
    width: 20px;
    height: 20px;
    margin-top: 8px;
    flex-shrink: 0;
    flex-grow: 0;
  }
</style>
