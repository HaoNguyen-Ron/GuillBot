<script setup>
const FOOTER_API = [
  {
    id : 1,
    title : 'Writing tools',
    contents: [
      'Paraphrasing Tool',
      'Summarizer',
      'QuillBot Flow',
      'Plagiarism Checker',
      'Word Counter',
      'Translator',
      'AI Detector',
    ],
  },

  {
    id : 2,
    title : 'Free Grammar Tools',
    contents: [
      'Grammar Checker',
      'Proofreader',
      'Spell Checker',
      'Punctuation Checker',
      'Essay Checker',
    ],
  },

  {
    id : 3,
    title : 'Citation Generator',
    contents: [
      'Citation Generator',
      'APA Citation Generator',
      'MLA Citation Generator',
    ],
  },
  {
    id : 4,
    title : 'Company',
    contents: [
      'Team',
      'Careers',
      'Help Center',
      'Contact Us',
      'Join Us on Discord',
    ],
  },
  {
    id : 5,
    title : 'Extensions',
    contents: [
      'QuillBot for Chrome',
      'QuillBot for Word',
      'QuillBot for macOS',
    ],
  },

  {
    id : 6,
    title : 'Student Resources',
    contents: [
      'Tools & Videos',
      'Educational Courses',
    ],
  },

  {
    id : 7,
    title : 'Knowledge Base',
    contents: [
      'QuillBot University',
      'Paraphrasing Guide',
      'AI Writing Assistant',
      'QuillBot Blog',
      'Meaning.io',
      'Services',
    ],
  },

  {
    id : 8,
    title : 'Services',
    contents: [
      'Premium',
      'Team Plan',
      'Affiliate',
      'Request a Demo',
    ],
  },
]
</script>

<template>
  <div :class="$style.footerWrapper">
    <div :class="$style.footerInfoWrapper">
      <div :class="$style.footerInfoList">
        <div v-for="info in FOOTER_API" :key="info.id" :class="$style.footerInfoItem">
          <div :class="$style.footerTitle">
            {{ info.title }}
          </div>

          <div v-for="(content, index) in info.contents" :key="index" :class="$style.footerContent" >
            {{ content }}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
    .footerWrapper {
        padding: 0 68px;
    }

    .footerInfoWrapper {
        padding-top: 52px;
    }

    .footerInfoList {
      display: grid;
      grid-template-columns: repeat(3, 1fr)
    }

    .footerTitle {
      line-height: 24px;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .footerContent {
      font-size: 16px;
      font-weight: 400;
      line-height: 36px;
    }
</style>
