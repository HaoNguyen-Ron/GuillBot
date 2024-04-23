<script setup lang="ts">
</script>

<template>
  <div :class="$style.layoutWrapper">
    <Header />

    <div :class="$style.layoutBody">
        <SideBar />

      <div id="laybout_body" :class="$style.layoutContentRoute">
        <RouterView />

        <Footer />
      </div>
    </div>
  </div>
</template>

<style module>
.layoutWrapper {
  height: 100%;
}

.layoutBody {
  display: flex;
  justify-content: flex-start;
}

.layoutContentRoute {
    background-color: #ffffff;
    border-radius: 30px;
    flex: 1 1 auto;
    margin-left: 96px;
    position: relative;
    max-width: 100%;
}
</style>
