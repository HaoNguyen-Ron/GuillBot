<script setup>

</script>

<template>
  <div :class="$style.paraphraserInputWrapper">
    <div :class="$style.paraphraserInputSetting">
      <div :class="$style.paraphraserInputModes">
        <p :class="[$style.paraphraserTitle, $style.paraphraserInputTitle]">
          Modes:
        </p>

        <button :class="[$style.paraphraserMode, $style.paraphraserModeActive]">
          Standard
        </button>

        <button :class="$style.paraphraserMode">
          Fluency
        </button>

        <button :class="$style.paraphraserMode">
          Formal
        </button>

        <button :class="$style.paraphraserMode">
          Academic
        </button>

        <button :class="$style.paraphraserMode">
          Simple
        </button>

        <button :class="$style.paraphraserMode">
          Creative
        </button>

        <button :class="$style.paraphraserMode">
          Expand
        </button>

        <button :class="$style.paraphraserMode">
          Shorten
        </button>
        <button :class="$style.paraphraserMode">
          Custom
        </button>
      </div>

      <div :class="$style.paraphraserInputSynonyms">
        <p :class="[$style.paraphraserTitle, $style.paraphraserInputTitle]">
          Synonyms:
        </p>

        <div :class="$style.paraphraserTrack">
          <div :class="$style.paraphraserThumb">
            <div :class="$style.paraphraserThumbDragger" />
          </div>
        </div>

        <div :class="$style.paraphraserTrackPremium">
          <div :class="$style.paraphraserPremiumTrack" />
          <i class="fa-regular fa-gem" :class="$style.paraphraserPremiumIcon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
      .paraphraserInputWrapper {
    background-color: var(--color-background-forth);
  }

  .paraphraserInputTitle {
    padding: 13px 12px 12px 20px;
    line-height: 21px;
  }

  .paraphraserInputSetting {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-border-primary);
  }

  .paraphraserInputModes {
    display: flex;
    align-items: center;
  }

  .paraphraserMode {
    padding: 13px 9px;
    flex-shrink: 0;
    flex-grow: 0;
    line-height: 20px;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-font-third);
  }
  .paraphraserModeActive {
    font-weight: 600;
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }

  .paraphraserInputSynonyms {
    display: flex;
    align-items: center;
  }

  .paraphraserTrack {
    border-radius: 12px;
    background-color: #bfbfbf;
    height: 3px;
    width: 65px;
  }

  .paraphraserThumb {
    height: 4px;
    border-radius: 12px;
    background-color: var(--color-primary);
    width: 30%;
    position: relative;
  }

  .paraphraserThumbDragger {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-background-forth);
    border: 1px solid var(--color-border-primary);
  }

  .paraphraserTrackPremium {
    display: flex;
    align-items: center;
    margin-left: 2px;
  }
  .paraphraserPremiumTrack {
    border-radius: 12px;
    background-color:  rgb(37, 37, 37);
    height: 3px;
    width: 32px;
    opacity: 0.5;
  }

  .paraphraserPremiumIcon {
    background-color: var(--color-primary);
    border-radius: 50%;
    color: var(--color-font-white);
    padding: 5px;
    font-size: 12px;
  }
</style>