<script setup>

</script>

<template>
  <section :class="$style.paraphraserWrapper">
    <div :class="$style.paraphraser">
      <ParaphraserAdvertise />

      <div :class="$style.paraphraserToolWrapper">
        <ParaphraserLanguage />

        <ParaphraserInput />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
  .paraphraser {
    padding: 25px 100px 40px 44px;
    max-width: 1300px;
    margin: 0 auto;
  }

  .paraphraserWrapper {
    background-color: var(--color-background-secondary);
  }

  .paraphraserTitle {
    font-size: 16px;
    font-weight: 600;
    line-height:10px;
  }

</style>
