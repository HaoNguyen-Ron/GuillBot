<script setup>
import logo from '@/assets/images/quillbot-logo.png'
</script>

<template>
  <header :class="$style.headerWrapper">
    <div :class="$style.headerLogoWrapper" href="/">
      <img :src="logo" alt="QuillBot Logo" :class="$style.headerLogoImage">
    </div>

    <div :class="$style.headerTitleWrapper">
      <p :class="$style.headerTitle">
        Paraphraser
      </p>
    </div>

    <div :class="$style.headerAccountWrapper">
      <button :class="$style.headerBtnWrapper">
        <i class="fa-regular fa-gem" :class="[$style.headerIcon, $style.headerBtnIcon]" />

        <p :class="$style.headerContent">
          Update to Premium
        </p>
      </button>

      <HeaderLanguagePicker />

      <HeaderAccount />
    </div>
  </header>
</template>

<style lang="scss" module>
.headerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 46px;
  position: relative;
  z-index: 9999;
}

.headerLogoWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 155px;
  padding-left: 5px;
  height: 54px;
}

.headerLogoBtn {
    min-width: 24px;
    min-height: 24px;
    padding: 8px;
    margin: 8px 12px 8px 8px;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items:center;

    &:hover {
    background-color: var(--color-hover-secondary);
    }
}

.headerLogoImage {
  width: 130px;
  height: 35px;
  object-fit:cover;
  margin-right: 18px;
}

.headerLogoName {
  font-size: 22px;
  line-height: 24px;
  font-family: "PT Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.headerTitleWrapper {
  display: flex;
  vertical-align: middle;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
}

.headerTitle {
  font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
}

.headerBtnWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 64px;
  padding: 6px 16px;
  background-color: var(--color-primary);
  color: var(--color-font-white);
  border-radius: 24px;

  &:hover {
    background-color: var(--color-background-primary)
  }
}

.headerContent {
  color: var(--color-font-white);
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.headerAccountWrapper  {
  display:flex;
  align-items: center;
  justify-content:center;
  gap: 14px;
  padding-right: 15px;
}

.headerAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerIcon {
  font-size: 16px;
  background-color: transparent;
  margin-right: 6px;
  margin-top: 2px;
}

.headerBtnIcon {
  color: var(--color-font-white);
}

.headerBarIcon {
  &:hover {
    background-color: var(--color-hover-secondary);
  }
}
</style>
