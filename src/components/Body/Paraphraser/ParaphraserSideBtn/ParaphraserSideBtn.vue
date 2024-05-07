<script setup lang="ts">

</script>

<template>
  <div :class="$style.paraphraserSideBtnList">
    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-solid fa-gear" :class="$style.paraphraserSideIcon" />
      </div>

      <p :class="$style.paraphraserSideDesc">
        Settings
      </p>

    </div>

    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-solid fa-comment-dots" :class="$style.paraphraserSideIcon" />
      </div>

      <p :class="$style.paraphraserSideDesc">
        Feedback
      </p>
    </div>

    <div :class="$style.paraphraserSideBtn">
      <div :class="$style.paraphraserSideIconWrapper">
        <i class="fa-regular fa-keyboard" :class="$style.paraphraserSideIcon" />
      </div>

      <p :class="$style.paraphraserSideDesc">
        Hotkeys
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
    }
</style>
