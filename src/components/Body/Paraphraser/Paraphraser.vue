<script setup>
import logo from '@/assets/images/gg-chrome.png'
</script>

<template>
      <section :class="$style.paraphraserWrapper">
        <div :class="$style.paraphraser">
          <div :class="$style.paraphraserAdvertise">
            <p :class="[$style.paraphraserTitle, $style.paraphraserAdTitle]">
              QuillBot for Chrome
            </p>

            <p :class="$style.paraphraserContent">
              Write like a pro, everywhere you write.
            </p>

            <button :class="$style.paraphraserBtn">
              <img :src="logo" alt="Add to Chrome Logo" :class="$style.paraphraserLogo">
              Add to Chrome. It's free!
            </button>

            <i class="fa-solid fa-x" :class="$style.paraphraserIcon" />
          </div>

          <div :class="$style.paraphraserToolWrapper">
            <ul :class="$style.paraphraserToolLanguageList">
              <li :class="$style.paraphraserToolLanguage">
                English(UK)
              </li>
              <li :class="[$style.paraphraserToolLanguage, $style.paraphraserToolLanguageAtive]">
                English(US)
              </li>
              <li :class="$style.paraphraserToolLanguage">
                French
              </li>
              <li :class="$style.paraphraserToolLanguage">
                Spanish
              </li>
              <li :class="$style.paraphraserToolLanguage">
                All
                <i class="fa-solid fa-chevron-down" />
              </li>
            </ul>

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

                  <div :class="$style.paraphraserProgress">
                    <div :class="$style.paraphraserThumb" />
                  </div>
                </div>
              </div>
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

  .paraphraserSectionOne {
    background-color: var(--color-background-secondary);
  }

  .paraphraserAdvertise {
    padding: 16px 20px 16px 32px;
    background-color:var(--color-primary);
    margin-bottom: 8px;
    min-height: 70px;
    display: flex;
    align-items:center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 22px ;
  }

  .paraphraserTitle {
    font-size: 16px;
    font-weight: 600;
    line-height:10px;
  }

  .paraphraserAdTitle {
    padding-right: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-right: 1.25px solid var(--color-font-white);
    color: var(--color-font-white);
  }

  .paraphraserContent {
    color: var(--color-font-white);
    flex-grow: 1;
    font-size: 16px;
    font-weight:400;
    line-height:10px;
    padding: 5px 0 5px 24px;
  }

  .paraphraserBtn {
    padding: 6px 16px;
    display: flex;
    align-items: center;
    color: var(--color-primary);
    background-color: var(--color-font-white);
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    line-height: 25px;
    overflow: hidden;
  }

  .paraphraserLogo {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }

  .paraphraserIcon {
    font-size: 15px;
    color: var(--color-font-white);
    font-weight: 400;
    line-height: 20px;
    width: 20px;
    height: 20px;
    margin-top: 6px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 13px;
  }

  .paraphraserToolLanguageList {
    display: flex;

  }

  .paraphraserToolLanguage {
    padding: 8px 16px;
    color: var(--color-font-forth);
    cursor: pointer;
    font-weight: normal;
    line-height: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.1) 4px 2px 20p;
  }

  .paraphraserToolLanguageAtive {
    box-shadow: rgba(0, 0, 0, 0.1) 4px 2px 20p;
    background-color: var(--color-background-forth);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

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
</style>
