<template>
  <div class="main">
    <!-- Кнопка мобильного меню -->
    <button class="mm_btn" :class="{ 'is_open': isOpen }" @click="activate_mm" aria-label="Меню">
      <span class="mm_btn_line"></span>
      <span class="mm_btn_line"></span>
      <span class="mm_btn_line"></span>
    </button>

    <!-- Мобильное меню (Оверлей) -->
    <Transition name="fade">
      <aside v-if="isOpen" class="sidebar_mobile" @click.self="activate_mm">
        <div class="sidebar_inner">
          <nav class="sidebar_nav">
            <NuxtLink to="/" class="sidebar_link" @click="activate_mm">Главная</NuxtLink>
            <NuxtLink to="/all" class="sidebar_link">Все разделы</NuxtLink>
            <NuxtLink 
              v-for="[key, tabs] in tabs" 
              :key="key" 
              :to="`/${key}`" 
              class="sidebar_link" 
              @click="activate_mm"
            >
              {{ tabs.name }}
            </NuxtLink>
          </nav>

          <!-- Футер с кнопками (Мобильная версия) -->
          <div class="sidebar_footer mobile-footer">
            <p class="footer_hint">
              Для подачи заявки создайте тикет в Discord с темой:<br>
              <strong>«Одобрение варпа»</strong> или <strong>«Обмен»</strong>
            </p>

            <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
              class="footer-btn primary" target="_blank" rel="noopener noreferrer" @click="activate_mm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Одобрение варпа
            </a>

            <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
              class="footer-btn secondary" target="_blank" rel="noopener noreferrer" @click="activate_mm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
              Предложение обменов
            </a>
          </div>
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
        <NuxtLink to="/all" class="sidebar_link">Все разделы</NuxtLink>
        <NuxtLink v-for="[key, tabs] in tabs" :key="key" :to="`/${key}`" class="sidebar_link">
          {{ tabs.name }}
        </NuxtLink>
      </nav>
      
      <div class="sidebar_footer">
        <p class="footer_hint">
          Для подачи заявки создайте тикет в Discord с темой:<br>
          <strong>«Одобрение варпа»</strong> или <strong>«Обмен»</strong>
        </p>

        <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
          class="footer-btn primary" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Одобрение варпа
        </a>

        <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
          class="footer-btn secondary" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 1l4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <path d="M7 23l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
          Предложение обменов
        </a>
      </div>
    </aside>

    <!-- Основной контент -->
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

/* Сайдбар (Десктоп) */
.sidebar {
  width: 300px;
  height: 100vh; /* Жесткая высота, не дает растягиваться за экран */
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(10, 14, 24, 0.85); /* Чуть плотнее для читаемости */
  backdrop-filter: blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  z-index: 50;
  box-sizing: border-box; /* Чтобы padding не увеличивал ширину/высоту */
}

.sidebar_header {
  margin-bottom: 24px;
  padding: 0 12px;
  flex-shrink: 0; /* Запрещаем сжиматься */
}

.logo_text {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #e9e2f3;
  text-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  line-height: 1.3;
}

/* Навигация со скроллом */
.sidebar_nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto; /* Включаем скролл только здесь */
  flex: 1; /* Занимает ВСЁ доступное свободное пространство */
  min-height: 0; /* КРИТИЧЕСКИ ВАЖНО для flex-скролла в некоторых браузерах */
  padding: 16px 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  white-space: nowrap; /* Текст не переносится */
}

.sidebar_link:hover,
.sidebar_link.router-link-active {
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  border-color: rgba(252, 252, 252, 0.2);
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
  top: 10px;
  right: 10px;
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

/* --- Footer сайдбара с кнопками действий --- */
.sidebar_footer {
  flex-shrink: 0; /* Запрещаем сжиматься, всегда виден внизу */
  margin-top: auto; /* На всякий случай прижимаем к низу */
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer_hint {
  font-size: 0.75rem;
  color: #7a8ba8;
  line-height: 1.4;
  text-align: center;
  margin: 0 0 4px 0;
}

.footer_hint strong {
  color: #cbb4ff;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
}

/* Кнопки футера */
.footer-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  white-space: nowrap;
}

.footer-btn.primary {
  background: rgba(165, 170, 170, 0.08);
  color: #c8eff3;
  border: 1px solid rgba(183, 202, 204, 0.25);
}

.footer-btn.primary:hover {
  background: rgba(144, 146, 146, 0.15);
  border-color: #fdfdfd63;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  transform: translateY(-1px);
}

/* Вторичная кнопка (Обмены) - более сдержанная */
.footer-btn.secondary {
  background: rgba(255, 255, 255, 0.03);
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  color: #e2e8f0;
  transform: translateY(-1px);
}

/* Адаптация для мобильного меню (чтобы кнопки тоже красиво смотрелись внутри sidebar_inner) */
.sidebar_inner .sidebar_footer {
  margin-top: 24px;
  border-top: 2px solid #353434ad;
  padding-top: 24px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .mm_btn {
    display: block;
  }

  .content {
    padding: 30px 0px;
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