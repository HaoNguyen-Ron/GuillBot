<script setup>
import { reactive } from 'vue'

const premiumIconSize = ref('12px')
const isDropdownOpen = ref(false)

const paraphraseModes = reactive([
  {
    id: 1,
    name: 'Standard',
    screen_size: 'md',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 2,
    name: 'Fluency',
    screen_size: 'md',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 3,
    name: 'Natural',
    screen_size: 'md',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 4,
    name: 'Formal',
    screen_size: 'lg',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 5,
    name: 'Academic',
    screen_size: 'lg',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 6,
    name: 'Simple',
    screen_size: 'lg',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 6,
    name: 'Creative',
    screen_size: 'lg',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 7,
    name: 'Expand',
    screen_size: 'xl',
    is_hidden: false,
    is_active: false,
  },
  {
    id: 8,
    name: 'Shorten',
    screen_size: 'xl',
    is_hidden: false,
    is_active: false,

  },
  {
    id: 9,
    name: 'Custom',
    screen_size: 'xl',
    is_hidden: false,
    is_active: false,
  },
])

const screenWidth = ref(window.innerWidth)

function handleResize() {
  screenWidth.value = window.innerWidth

  paraphraseModes.forEach((option) => {
    if (getBreakpointWidth(option.screen_size) >= screenWidth.value)
      option.is_hidden = true
    else
      option.is_hidden = false
  })
}

function getBreakpointWidth(size) {
  switch (size) {
    case 'sm':
      return 800
    case 'md':
      return 1000
    case 'lg':
      return 1200
    case 'xl':
      return 1440
    default:
      return 0
  }
}

const filterModeIsNotHidden = computed(() => {
  return paraphraseModes.filter(option => !option.is_hidden)
})

const filterModeIsHidden = computed(() => {
  return paraphraseModes.filter(option => option.is_hidden)
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div :class="$style.paraphraserOptionWrapper">
    <div :class="$style.paraphraserOptionModes">
      <p :class="$style.paraphraserOptionTitle">
        Modes:
      </p>

      <button v-for="option in filterModeIsNotHidden" :key="option.id" :class="$style.paraphraserMode">
        {{ option.name }}
      </button>

      <div :class="$style.paraphraserDropDownWrapper">
        <button :class="[$style.paraphraserMode, $style.paraphraserDropDownBtnWrapper]" @click="isDropdownOpen = !isDropdownOpen">
          More
          <i class="fa-solid fa-chevron-down" />
        </button>
        
        <div v-if="isDropdownOpen" :class="$style.paraphraserDropDownModes">
          <button v-for="option in filterModeIsHidden" :key="option.id" :class="[$style.paraphraserMode, $style.paraphraserDropDownMode]" @click="isDropdownOpen = false">
            {{ option.name }}
          </button>
        </div>
      </div>
    </div>

    <div :class="$style.paraphraserOptionSynonyms">
      <p :class="$style.paraphraserOptionTitle">
        Synonyms:
      </p>

      <div :class="$style.paraphraserTrack">
        <div :class="$style.paraphraserThumb">
          <div :class="$style.paraphraserThumbDragger" />
        </div>
      </div>

      <div :class="$style.paraphraserTrackPremium">
        <div :class="$style.paraphraserPremiumTrack" />
        <CommonPremiumIcon :size="premiumIconSize" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .paraphraserOptionWrapper {
    background-color: var(--color-background-forth);
    display: flex;
    border-bottom: 1px solid var(--color-border-primary);
    padding-right: 100px;
  }

  .paraphraserOptionTitle {
    padding: 13px 12px 12px 20px;
    line-height: 21px;
    font-size: 16px;
    font-weight: 600;
    line-height:10px;
  }

  .paraphraserOptionModes {
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
    color: var(--color-font-secondary);
  }
  .paraphraserModeActive {
    font-weight: 600;
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }

  .paraphraserOptionSynonyms {
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

  .paraphraserDropDownWrapper {
    position: relative;
  }

  .paraphraserDropDownBtnWrapper {
    display: flex;
    gap: 8px;
  }

  .paraphraserDropDownModes {
    width: 140px;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 8px;
    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 22px 0px;
    border-radius: 6px;
    gap: 8px;
  }

  .paraphraserDropDownMode {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 6px;
    text-align: left;

    &:hover {
      background-color: var(--color-background-third);
    }
  }

  @media screen and (min-width: 1440px) {
    .paraphraserDropDownWrapper {
      display: none;
    }
  }
</style>
