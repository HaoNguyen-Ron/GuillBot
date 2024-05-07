<script setup>

const props = defineProps({
  size: String
})

</script>

<template> 
    <div :class="$style.paraphraserPremiumIconWrapper">
        <i class="fa-regular fa-gem" :class="$style.paraphraserPremiumIcon" :style="{ fontSize: props.size }"  />
    </div>
</template>

<style lang="scss" module>
.paraphraserPremiumIconWrapper {
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paraphraserPremiumIcon {
  color: var(--color-font-white);
  padding: 5px;
}
</style>