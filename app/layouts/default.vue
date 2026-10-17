<template>
  <div class="main">
    <!-- Кнопка мобильного меню -->
    <button class="mm_btn" :class="{ 'is_open': isOpen }" @click="activate_mm" aria-label="Меню">
      <span class="mm_btn_line"></span>
      <span class="mm_btn_line"></span>
      <span class="mm_btn_line"></span>
    </button>

    <Transition name="fade">
      <aside v-if="isOpen" class="sidebar_mobile" @click.self="activate_mm">
        <div class="sidebar_inner">
          <NuxtLink to="/" class="sidebar_link" @click="activate_mm">Главная</NuxtLink>
          <NuxtLink v-for="[key, tabs] in tabs" :key="key" :to="`/${key}`" class="sidebar_link" @click="activate_mm">
            {{ tabs.name }}
          </NuxtLink>
        </div>
      </aside>
    </Transition>

    <!-- Десктопный сайдбар -->
    <aside class="sidebar">
      <div class="sidebar_header">
        <span class="logo_text">Цены варпов DarkGalaxy</span>
      </div>
      <nav class="sidebar_nav">
        <NuxtLink to="/" class="sidebar_link">Главная</NuxtLink>
        <NuxtLink v-for="[key, tabs] in tabs" :key="key" :to="`/${key}`" class="sidebar_link">
          {{ tabs.name }}
        </NuxtLink>
      </nav>
    </aside>

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  min-height: 100vh;
  background-color: #05070a;
  background-image: linear-gradient(to bottom, #0a0f1c 0%, #05070a 40%, #05070a 100%);
  color: #e2e8f0;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  /* Inter выглядит профессиональнее */
}

/* Сайдбары */
.sidebar {
  width: 260px;
  min-height: 100vh;
  position: fixed;
  background: rgba(10, 14, 24, 0.7);
  backdrop-filter: blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  z-index: 50;
}

.sidebar_header {
  margin-bottom: 32px;
  padding: 0 12px;
}

.logo_text {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #e9e2f3;
  text-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}

/* Скроллящаяся навигация с кастомным баром */
.sidebar_nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  padding: 20px 8px 20px 0;
  border-top: 2px solid #353434ad;
  border-bottom: 2px solid #353434ad;
}

/* Космический скроллбар */
.sidebar_nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar_nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar_nav::-webkit-scrollbar-thumb {
  background: rgba(0, 229, 255, 0.15);
  border-radius: 4px;
}

.sidebar_nav::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 229, 255, 0.4);
}

.sidebar_link {
  padding: 10px 16px;
  border-radius: 8px;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  font-size: 0.95rem;
  border: 1px solid transparent;
}

.sidebar_link:hover,
.sidebar_link.router-link-active {
  background: rgba(185, 185, 185, 0.06);
  color: #dadada;
  border-color: rgba(240, 240, 240, 0.15);
}

/* Контент */
.content {
  display: flex;
  justify-self: center;
  margin-left: 260px;
  flex: 1;
  padding: 32px 40px;
  position: relative;
  z-index: 1;
  width: 100%;
}

/* Мобильное меню */
.mm_btn {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: rgba(10, 14, 24, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.mm_btn_line {
  display: block;
  width: 20px;
  height: 2px;
  background: #e2e2e2;
  margin: 4px 0;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.mm_btn.is_open .mm_btn_line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.mm_btn.is_open .mm_btn_line:nth-child(2) {
  opacity: 0;
}

.mm_btn.is_open .mm_btn_line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.sidebar_mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 7, 10, 0.85);
  backdrop-filter: blur(4px);
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar_inner {
  width: 85%;
  max-width: 320px;
  max-height: 80vh;
  background: rgba(10, 14, 24, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}

/* Скроллбар для мобильного меню */
.sidebar_inner::-webkit-scrollbar {
  width: 4px;
}

.sidebar_inner::-webkit-scrollbar-thumb {
  background: #464545;
  border-radius: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .mm_btn {
    display: block;
  }

  .content {
    padding: 80px 16px 32px;
    margin-left: 0;
  }
}
</style>

<script setup>
import { UseTabs } from '~/compansable/tabs';
const { data: tabsInfo } = UseTabs()
const tabs = computed(() => Object.entries(tabsInfo.value || {}))
const isOpen = ref(false)
const activate_mm = () => { isOpen.value = !isOpen.value }
</script>