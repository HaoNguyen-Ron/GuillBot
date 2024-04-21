<script setup>
const isAvatarHover = ref(false)

function handleSelect() {
  isAvatarHover.value = false
}
</script>

<template>
  <div :class="$style.headerAccountWrapper" @mouseleave="isAvatarHover = false">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNn4d_lU3UW7qa9LBZXxD9VKVCwTq-2wESi364DCN5g&s" alt="Account Setting" :class="$style.headerAccountAvatar" @mouseenter="isAvatarHover = true" @mouseleave="isAvatarHover = false">
  </div>

  <div v-if="isAvatarHover === true" :class="$style.headerAccountOptionList" @mouseenter="isAvatarHover = true">
    <div :class="$style.headerAccountEmail">
      <p :class="$style.headerAccountTitle">
        Email
      </p>
      <p :class="$style.headerAccountEmailContent">
        myEmail@gmail.com
      </p>
    </div>

    <div :class="$style.headerAccountOption" @click="handleSelect">
      <i class="fa-regular fa-user" :class="$style.headerAccountOptionIcon" />

      <a href="/" :class="$style.headerAccountTitle">Account details</a>
    </div>

    <div :class="$style.headerAccountOption" @click="handleSelect">
      <i class="fa-regular fa-moon"  :class="$style.headerAccountOptionIcon" />

      <a href="/" :class="$style.headerAccountTitle">Switch to Dark Mode</a>
    </div>

    <div :class="$style.headerAccountOption" @click="handleSelect">
      <i class="fa-regular fa-circle-question" :class="$style.headerAccountOptionIcon" />

      <a href="/" :class="$style.headerAccountTitle">Help Center</a>
    </div>

    <div :class="$style.headerAccountOption" @click="handleSelect">
      <i class="fa-regular fa-envelope" :class="$style.headerAccountOptionIcon" />

      <a href="/" :class="$style.headerAccountTitle">Contact Us</a>
    </div>

    <div :class="$style.headerAccountOption" @click="handleSelect">
      <i class="fa-solid fa-arrow-right-from-bracket" :class="$style.headerAccountOptionIcon" />

      <a href="/" :class="$style.headerAccountTitle">Log Out</a>
    </div>
  </div>
</template>

<style lang="scss" module>
.headerAccountWrapper {
    position: relative;
}

.headerAccountAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerAccountOptionList {
    width: 240px;
    border-color:#dee1e3;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    box-shadow: #00000026 0px 2px 3px 0px;
    color: #252525;
    font-size: 14px;
    line-height: 20.02px;
    position: absolute;
    z-index: 2;
    background-color: white;
    position: absolute;
    top: 42px;
    right: 15px;
}

.headerAccountTitle {
    font-size: 13px;
    font-weight:600;
    line-height:18px;
    color: #5f6368;
}
.headerAccountEmail {
  padding: 11px 16px;
  border-bottom: 1px solid var(--color-border-primary);
}

.headerAccountEmailContent {
    font-size: 13px;
    line-height:18px;
    color: #5f6368;
    
}

.headerAccountOption {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--color-border-primary);

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
        background-color: #f1f1f1;
    }
}

.headerAccountOptionIcon {
  flex: 0 0 24px;
  display: inline-block;
  font-size: 16px;
  line-height: 34px;
  text-align: center;
  color: #5f6368;
}
</style>
