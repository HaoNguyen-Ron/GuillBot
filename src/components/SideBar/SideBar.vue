<script setup>
const SIDE_BAR_API = [
  {
    id: 1,
    icon: '<i class="fa-solid fa-align-left" style="color: #479F5D;"></i>',
    name: 'Paraphraser',
    background_color: '#D7E9DC',
  },
  {
    id: 2,
    icon: '<i class="fa-solid fa-spell-check" style="color: #EF414C;"></i>',
    name: 'Grammar Checker',
    background_color: '#F4E3E4',
  },
  {
    id: 3,
    icon: '<i class="fa-solid fa-pen-nib" style="color: #319DFF;"></i>',
    name: 'QuillBot Flow',
    background_color: '#E1ECF6',
  },
  {
    id: 4,
    icon: '<i class="fa-solid fa-file-shield" style="color: #F27C0E;"></i>',
    name: 'Plagiarism Checker',
    background_color: '#F5E9DD',
  },
  {
    id: 5,
    icon: '<i class="fa-solid fa-list-check" style="color: #8051FF;"></i>',
    name: 'Summarizer',
    background_color: '#E9E4F6',
  },
  {
    id: 6,
    icon: '<i class="fa-solid fa-language" style="color: #252525;"></i>',
    name: 'Translator',
    background_color: '#E0E0E0',
  },
  {
    id: 7,
    icon: '<i class="fa-solid fa-quote-left" style="color: #0067C5;"></i>',
    name: 'Citation Generator',
    background_color: '#DCE7F0',
  },
]
</script>

<template>
  <div :class="$style.sideBarCategoryList">
    <div v-for="category in SIDE_BAR_API" :key="category.id" :class="$style.sideBarCategory">
      <div :class="$style.sideBarIconWrapper" :style="{ backgroundColor: category.background_color }">
        <i :class="$style.sideBarIcon" v-html="category.icon" />
      </div>

      <p :class="$style.sideBarContent">
        {{ category.name }}
      </p>
    </div>

    <div :class="$style.sideBarDivider" />

    <div :class="$style.sideBarCategory">
      <div :class="[$style.sideBarIconWrapper, $style.sideBarCategoryPremium]">
        <i class="fa-regular fa-gem" style="color: #252525;" />
      </div>

      <p :class="$style.sideBarContent">
        QuillBot Premimum
      </p>
    </div>

    <div :class="$style.sideBarDivider" />

    <div :class="$style.sideBarCategory">
      <div :class="$style.sideBarIconWrapper">
        <i class="fa-brands fa-chrome" />
      </div>

      <p :class="$style.sideBarContent">
        QuillBot for Chrome
      </p>
    </div>

    <div :class="$style.sideBarCategory">
      <div :class="$style.sideBarIconWrapper">
        <i class="fa-solid fa-boxes-stacked" />
      </div>

      <p :class="$style.sideBarContent">
        Apps & Extensions
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
    .sideBarCategoryList {
        position: fixed;
        height: 900px;
        max-width: 96px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }

    .sideBarCategory {
        width: 76px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        padding: 4px 0;
        border-radius: 3px;

        &:hover {
            background-color: var(--color-hover-primary);
        }

        &:active {
          font-weight: bold;
        }
    }

    .sideBarDivider {
      background-color:#a5a5a5;
      font-size: 14px;
      line-height: 20.02px;
      height: 1px;
      width: 49px;
    }

    .sideBarIconWrapper {
      width: 24px;
      height: 24px;
      align-items: center;
      border-radius: 50%;
      display: flex;
      font-size: 14px;
      justify-content:center;
      line-height: 20.02px;
      text-align: left;
    }

    .sideBarIcon {
      font-size: 14px;
      line-height: 20px;
    }

    .sideBarCategory:nth-last-child(-n+2) .sideBarIconWrapper,
    .sideBarCategory:nth-last-child(-n+2) .sideBarIcon {
      font-size: 20px;
    }

    .sideBarCategoryPremium {
      background-color: #fdbb08;
    }

    .sideBarContent {
      text-align: center;
      font-size: 12px;
      line-height: 16px;
    }
</style>
