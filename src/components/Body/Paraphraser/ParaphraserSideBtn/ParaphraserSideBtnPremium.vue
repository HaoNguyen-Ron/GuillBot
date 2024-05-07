<script setup lang="ts">
import { ref } from 'vue';

const premiumIconSize = ref('9px')
</script>

<template>
  <div :class="$style.paraphraserSideBtnList">
    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-solid fa-clock-rotate-left" :class="$style.paraphraserSideIcon" />

        <div :class="$style.paraphraserPremiumIconWrapper">
          <CommonPremiumIcon :size="premiumIconSize" />
        </div>
      </div>

      <p :class="$style.paraphraserSideDesc">
        History
      </p>
    </div>

    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-solid fa-code-compare" :class="$style.paraphraserSideIcon" />

        <div :class="$style.paraphraserPremiumIconWrapper">
          <CommonPremiumIcon :size="premiumIconSize" />
        </div>
      </div>

      <p :class="$style.paraphraserSideDesc">
        Compare Models
      </p>
    </div>

    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-regular fa-face-laugh-beam" :class="$style.paraphraserSideIcon" />

        <div :class="$style.paraphraserPremiumIconWrapper">
          <CommonPremiumIcon :size="premiumIconSize" />
        </div>
      </div>

      <p :class="$style.paraphraserSideDesc">
        Tone
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
    .paraphraserSideBtnList {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

    }

    .paraphraserSideBtn {
        width: 51px;
        height: 54px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .paraphraserSideIconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        padding: 6px;
        position: relative;
    }

    .paraphraserSideIcon {
        font-size: 20px;
        color: var(--color-icon-primary);

        &:hover {
            cursor: pointer;
            color: var(--color-hover-primary);
        }
    }

    .paraphraserSideDesc {
        font-size: 12px;
        line-height: 18px;
        color:var(--color-font-forth);
        text-align: center;
    }

    .paraphraserPremiumIconWrapper {
        position: absolute;
        right: -3px;
        bottom: -2px;
    }
</style>
