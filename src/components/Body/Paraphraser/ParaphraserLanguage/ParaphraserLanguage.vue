<script setup>
</script>

<template>
  <ul :class="$style.paraphraserLanguageList">
    <li :class="$style.paraphraserLanguage">
      English(UK)
    </li>
    <li :class="[$style.paraphraserLanguage, $style.paraphraserLanguageAtive]">
      English(US)
    </li>
    <li :class="$style.paraphraserLanguage">
      French
    </li>
    <li :class="$style.paraphraserLanguage">
      Spanish
    </li>
    <li :class="$style.paraphraserLanguage">
      All
      <i class="fa-solid fa-chevron-down" />
    </li>
  </ul>
</template>

<style lang="scss" module>
  .paraphraserLanguageList {
    display: flex;

  }

  .paraphraserLanguage {
    padding: 8px 16px;
    color: var(--color-font-forth);
    cursor: pointer;
    font-weight: normal;
    line-height: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.1) 4px 2px 20p;

    &:hover {
      background-color: var(--color-hover-primary);
    }
  }

  .paraphraserLanguageAtive {
    box-shadow: rgba(0, 0, 0, 0.1) 4px 2px 20px;
    background-color: var(--color-background-forth);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:hover {
      background-color: none;
    }
  }
</style>
