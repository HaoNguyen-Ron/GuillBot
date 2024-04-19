<script setup>
import logo from '@/assets/images/quillbot-logo.png'
</script>

<template>
  <div :class="$style.headerWrapper">
    <a :class="$style.headerLogoWrapper" href="/">
      <button :class="$style.headerLogoBtn">
        <i class="fa-solid fa-bars" :class="$style.headerIcon" />
      </button>

      <img :src="logo" alt="QuillBot Logo" :class="$style.headerLogoImage">
    </a>

    <div :class="$style.headerTitleWrapper">
      <p :class="$style.headerTitle">
        Citation generator
      </p>
    </div>

    <div :class="$style.headerAccountWrapper">
      <el-dropdown trigger="click">
        <el-button>
          <i class="fa-solid fa-list-ul" :class="$style.headerIcon" />
        </el-button>

        <template #dropdown>
          <HeaderService />
        </template>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button>
          <div class="block" :class="$style.headerAvatar">
            <el-avatar :size="32" />
          </div>
        </el-button>

        <template #dropdown>
          <HeaderAccount />
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" module>
.headerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 46px;
}

.headerLogoWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 155px;
  padding-left: 5px;
}

.headerLogoBtn {
    min-width: 24px;
    min-height: 24px;
    padding: 8px;
    margin: 8px 12px 8px 8px;
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
}

.headerAccountWrapper  {
  display:flex;
  align-items: center;
  justify-content:center;
  gap: 8px;
}

.headerAvatar {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerIcon {
  color: #444746;
  font-size: 16px;
  background-color: transparent;
}
</style>
