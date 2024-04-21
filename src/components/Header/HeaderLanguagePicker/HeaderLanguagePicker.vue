<script setup>
const languages = ref([
  {
    id: 1,
    image: 'https://assets.quillbot.com/images/American.svg',
    name: 'American English',
  },
  {
    id: 2,
    image: 'https://assets.quillbot.com/images/Canada.svg',
    name: 'Canadian English',
  },
  {
    id: 3,
    image: 'https://assets.quillbot.com/images/British.svg',
    name: 'British English',
  },
  {
    id: 4,
    image: 'https://assets.quillbot.com/images/Australian.svg',
    name: 'Australian English',
  },
])

const isHover = ref(false)
const selectLanguage = ref('https://assets.quillbot.com/images/American.svg')

function toggleSelectLanguage(language) {
    selectLanguage.value = language.image
    isHover.value = false
}
</script>

<template>
  <div :class="$style.headerLangWrapper" @mouseleave="isHover = false">
    <img :src="selectLanguage" alt="Language picker" :class="$style.headerAvatar" @mouseenter="isHover = true" @mouseleave="isHover = false">

    <div v-if="isHover === true" :class="$style.headerLangList" @mouseenter="isHover = true">
      <p :class="[$style.headerLangName, $style.headerLang]">
        I write in
      </p>

      <div v-for="language in languages" :key="language.id" :class="$style.headerLang" @click="toggleSelectLanguage(language)">
        <img :src="language.image" alt="Language picker" :class="$style.headerLangAvatar">

        <span :class="$style.headerLangName">
          {{ language.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.headerAvatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerLangAvatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.headerLangWrapper {
    position: relative;
}
.headerLangList {
    position: absolute;
    width: 240px;
    left: -200px;
    background-color: white;
    z-index: 2;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 6px;
}

.headerLang {
    display: flex;
    padding: 11px 16px;
    align-items: center;
    justify-content: flex-start;
    height: 46px;
    border-bottom: 1px solid var(--color-border-primary);
    gap: 10px;

    &:hover {
        background-color: #f1f1f1;
    }
}

.headerLangTitle {
    padding: 11px 16px;
}

.headerLangName {
    font-size: 13px;
    line-height: 18px;
    font-weight: 600;
    user-select: none;
}
</style>
