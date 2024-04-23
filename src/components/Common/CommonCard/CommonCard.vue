<script setup>
const props = defineProps({
  cards: Array,
});
</script>

<template>
    <div v-for="card in cards" :class="$style.CommonCardWrapper" :key="card.id">
      <div :class="$style.CommonCardTitle">
        {{ card.title }}
      </div>
  
      <div>
        <img :src="card.image" alt="QuillBot banners">
      </div>
  
      <h5 :class="$style.CommonCardHeading">
        {{ card.heading }}
      </h5>
  
      <p :class="$style.CommonCardContent">
        {{ card.content }}
      </p>
    </div>
  </template>
  

<style lang="scss" module>
    .CommonCardWrapper {
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:start;
        padding-bottom: 80px;
    }

    .CommonCardTitle {
        color: var(--color-background-primary);
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 16px;
    }

    .CommonCardHeading {
        font-size:20px;
        font-weight: 600;
        line-height: 28px;
        padding: 24px 0 12px 12px;
    }

    .CommonCardContent {
        padding-left: 12px;
        font-size: 16px;
        font-weight: 400;
        color: var(--color-font-primary);
        line-height: 24px;
    }
</style>
