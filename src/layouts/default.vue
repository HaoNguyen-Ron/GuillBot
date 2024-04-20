<script setup lang="ts">
</script>

<template>
  <div :class="$style.layoutWrapper">
    <header :class="$style.layoutHeader">
      <Header />
    </header>

    <div :class="$style.layoutBody">
      <SideBar />

      <div :class="$style.layoutContentRoute">
        <RouterView />

        <Footer />
      </div>
    </div>
  </div>
</template>

<style module>
.layoutWrapper {
  height: 100%;
  background-color: #F8FAFD;
}

.layoutBody {
  display: flex;
  justify-content: flex-start;
}

.layoutContentRoute {
    background-color: #ffffff;
    border-radius: 30px;
    flex: 1 1 auto;
}

.layoutHeader {
  background-color: #ffffff;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid var(--color-border-primary) ;
}
</style>
