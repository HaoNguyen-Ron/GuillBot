<script setup>
const PREMIUM_CARD_DETAILS = [
  {
    id: 1,
    title: 'Accelerate',
    image: 'https://assets.quillbot.com/images/theme/light/paraphraser/unlimited-words.svg',
    heading: 'Improve your speed',
    content: ' Paraphrase an unlimited number of words in one click, with a faster processing rate to get more done in less time.',
  },
  {
    id: 2,
    title: 'Create',
    image: 'https://assets.quillbot.com/images/theme/light/paraphraser/synonym-settings.svg',
    heading: 'Increase changes',
    content: 'Unlock the final Synonyms setting to maximize the changes to your text.',
  },
  {
    id: 3,
    title: 'Explore',
    image: 'https://assets.quillbot.com/images/theme/light/paraphraser/additional-modes.svg',
    heading: 'Define your voice',
    content: 'Get 6 additional modes plus the option to create an unlimited number of Custom modes.',
  },
]
</script>

<template>
  <section :class="$style.premiumWrapper">
    <button :class="$style.premiumBookMark">
      <a href="/">
        <i class="fa-solid fa-chevron-down" :class="$style.premiumBookMarkIcon" />
      </a>
    </button>

    <div :class="$style.premiumBenefitWrapper">
      <div :class="$style.premiumBenefitHeader">
        <div :class="$style.premiumBanner">
          <div :class="$style.premiumBannerContent">
            Premium Benefits
          </div>

          <i class="fa-solid fa-caret-left" :class="$style.premiumBannerIcon" />
        </div>

        <h1 :class="$style.premiumBenefitHeading">
          Cut your writing time by more than half
          using QuillBot Premium
        </h1>
      </div>

      <div :class="$style.premiumBenefitCards">
        <CommonCard :cards="PREMIUM_CARD_DETAILS" />
      </div>
    </div>

    <div :class="$style.premiumDivider" />

    <div :class="$style.premiumAdWrapper">
      <div :class="$style.premiumAd">
        <h3 :class="$style.premiumAdHeading">
          Whether you’re writing emails, essays, or social media posts, QuillBot has your back.
        </h3>

        <button :class="$style.premiumAdBtn">
          <i class="fa-regular fa-gem" :class="$style.premiumAdBtnIcon" />

          <a href="/" :class="$style.premiumAdBtnContent">
            Get Premium
          </a>
        </button>

        <button :class="$style.premiumAdContent">
          <i class="fa-regular fa-thumbs-up" :class="$style.premiumAdBtnIcon" />

          <span :class="$style.premiumAdDesc">
            3-Day Money-Back Guarantee
          </span>
        </button>


      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
    .premiumWrapper {
        padding: 0 16px;
    }

    .premiumBookMark {
        display:block;
        margin: 0 auto;
        width:40px;
        height: 40px;
        position:relative;
        padding: 8px;
        border-radius: 50%;
        margin-bottom: 24px;

        &:hover {
            background-color:var(--color-hover-secondary)
        }
    }

    .premiumBookMarkIcon {
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .premiumBenefitWrapper{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        max-width: 1128px;
        width: 935px;
        margin: 0 auto;
    }

    .premiumBenefitHeader {
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin: 0 150px;
    }

    .premiumBanner {
        display: inline-block;
        background-color: var(--color-background-primary);
        border-radius: 2px;
        color: var(--color-font-white);
        font-weight: 600;
        line-height: 16px;
        font-size: 12px;
        position: relative;
    }

    .premiumBannerContent {
        padding: 4px 30px 4px 8px;
    }

    .premiumBannerIcon {
        position: absolute;
        font-size: 55px;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
    }

    .premiumBenefitHeading {
        padding: 20px 0 72px;
        font-size: 32px;
        font-weight: 400;
        line-height: 44px;
        text-align:center;
    }

    .premiumBenefitCards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .premiumAdWrapper {
        padding: 0 16px;
        width: 900px;
        margin: 0 auto;
    }

    .premiumAd {
        padding: 80px 0;
        max-width: 66.6667%;
        margin:0 auto;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .premiumDivider {
        width: 900px;
        height: 1px;
        background-color:var(--color-border-primary);
        margin: 0 auto;
        overflow: hidden;

    }

    .premiumAdHeading {
        font-size: 32px;
        font-weight: 400;
        line-height: 44px;
        padding-bottom: 32px;
        text-align:center;
    }

    .premiumAdBtn {
        display: flex;
        align-items: center;
        padding: 8px 20px;
        border-radius: 32px;
        color: var(--color-font-white);
        gap: 8px;
        background-color: var(--color-primary);
        
        &:hover {
            background-color: var(--color-background-primary);
        }
    }

    .premiumAdBtnIcon {
        font-size: 20px;
    }

    .premiumAdBtnContent {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
    }

    .premiumAdContent {
        padding-top: 16px;
        display: flex;
        gap: 16px;
    }

    .premiumAdDesc {
        font-weight: 600;
        font-size: 16px;
        color: var(--color-font-primary)
    }

    @media screen and (max-width: 1170px) {
      .premiumBenefitCards {
        grid-template-columns: repeat(1, 400px);
        justify-items: center;
        align-items: center;
      }
    }
</style>
