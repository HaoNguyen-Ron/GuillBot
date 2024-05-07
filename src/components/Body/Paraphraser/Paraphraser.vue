<script setup>

</script>

<template>
  <section :class="$style.paraphraserWrapper">
    <div :class="$style.paraphraser">
      <ParaphraserAdvertise />

      <div :class="$style.paraphraserBodyWrapper">
        <div :class="$style.paraphraserBodyLeft">
          <ParaphraserLanguage />

          <div :class="$style.paraphraserMain">
            <ParaphraserOption />

            <ParaphraserInput />
          </div>
        </div>

        <div :class="$style.paraphraserBodyRight">
          <ParaphraserSideBtnPremium />
          <ParaphraserSideBtn />
        </div>
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
    max-width: 100%;
  }

  .paraphraserBodyWrapper {
    display: flex;
    gap: 33px;
  }

  .paraphraserMain {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 0px;
  }

  .paraphraserMainBottom {
    display: flex;
    gap: 33px;
  }
  .paraphraserTitle {
    font-size: 16px;
    font-weight: 600;
    line-height:10px;
  }

  .paraphraserBodyRight {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
</style>
