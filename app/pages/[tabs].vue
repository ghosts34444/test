<template>
  <section v-if="tab" class="page-section">
    
    <!-- Фоновое изображение таба (НЕ липкое) -->
    <div class="page-header-bg">
      <img :src="tab.page_image" class="page-bg-img" alt="bg">
    </div>

    <!-- Липкий блок: Заголовок + Поиск -->
    <div class="sticky-controls">
      <div class="page-title-block">
        <img :src="tab.slot_image" class="slot-icon" alt="slot">
        <h1 class="page-title">{{ tab.name }}</h1>
        <img :src="tab.slot_image" class="slot-icon" alt="slot">
      </div>

      <!-- Поиск с кнопкой очистки -->
      <div class="search-wrapper">
        <div class="search-input-container">
          <input 
            v-model="search" 
            type="text" 
            placeholder="Поиск по галактике..." 
            class="search-input"
          >
          <button v-if="search" @click="search = ''" class="search-clear" aria-label="Очистить поиск">X</button>
        </div>
      </div>
    </div>

    <!-- Список обмена -->
    <div class="trade-list">
      <TransitionGroup name="list">
        <div v-for="items in FilterArrayItems" :key="items.id || items.name" class="trade-card">
          <div class="trade-item trade-left">
            <span class="item-name">{{ items.name }}</span>
          </div>

          <div class="trade-arrow">
            <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-svg">
              <path d="M0 10H30M30 10L22 2M30 10L22 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="10" cy="10" r="2" fill="currentColor" class="arrow-particle" />
            </svg>
          </div>

          <div class="trade-item trade-right">
            <span class="price-value">{{ items.price }}</span>
          </div>
        </div>
      </TransitionGroup>

      <div v-if="FilterArrayItems.length === 0" class="empty-state">
        <p>Данные не найдены в этом секторе...</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  width: 80%;
  margin: 0 auto;
  position: relative;
  
  /* Переменные из JSON */
  --c-bg: v-bind('tab.theme.bg_primary');
  --c-card: v-bind('tab.theme.bg_card');
  --c-accent: v-bind('tab.theme.accent');
  --c-glow: v-bind('tab.theme.accent_glow');
  --c-text: v-bind('tab.theme.text_main');
  --c-sub: v-bind('tab.theme.text_sub');

  color: var(--c-text);
}

/* Верхний свет из данных JSON */
.page-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--c-accent), transparent);
  box-shadow: 0 0 60px 15px var(--c-glow);
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
}

.page-header-bg {
  position: relative;
  margin-bottom: 40px;
}

.page-bg-img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.25;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}

/* ЛИПКИЙ БЛОК */
.sticky-controls {
  position: -webkit-sticky; /* Для Safari */
  position: sticky;
  top: 20px;
  z-index: 20;
  
  /* Обязательно добавьте эти свойства: */
  background: rgba(10, 17, 27, 0.151);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  border-radius: 20px;
  padding: 20px 24px 24px;
  margin-bottom: 28px;
  
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  
  /* Важно для корректной работы sticky */
  width: 100%;
  box-sizing: border-box;
}

.page-title-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}

.page-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--c-accent);
}

.slot-icon {
  width: 28px;
  height: 28px;
  opacity: 0.9;
  image-rendering: pixelated;
}

/* Поиск */
.search-wrapper {
  display: flex;
  justify-content: center;
}

.search-input-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 18px; /* Место справа для кнопки очистки */
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--c-text);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.25s ease;
}

.search-input:focus {
  border-color: var(--c-accent);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.05);
}

.search-input::placeholder {
  color: var(--c-sub);
}

/* Кнопка очистки поиска */
.search-clear {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--c-sub);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;
}

.search-clear:hover {
  color: var(--c-accent);
  transform: translateY(-50%) scale(1.1);
}

/* Список карточек */
.trade-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trade-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--c-card);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 18px 24px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Более сдержанный hover-эффект */
.trade-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--c-accent);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.trade-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
}

.trade-card:hover::before {
  opacity: 1;
}

.trade-item {
  flex: 1;
  min-width: 0;
  z-index: 1;
}

.trade-left { text-align: left; }
.trade-right { text-align: right; }

.item-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.price-value {
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-accent);
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 14px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Стрелка */
.trade-arrow {
  flex: 0 0 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--c-sub);
  z-index: 1;
  transition: color 0.25s ease;
}

.trade-card:hover .trade-arrow {
  color: var(--c-accent);
}

.arrow-svg {
  width: 32px;
  height: 16px;
}

.arrow-particle {
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Анимации списка */
.list-enter-active, .list-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--c-sub);
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 14px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

/* Адаптив для планшетов */
@media (max-width: 900px) {
  .content { padding: 80px 20px 32px; }
  .sticky-controls { padding: 16px 20px 20px; }
  .trade-card { padding: 16px 20px; }
}

/* Адаптив для мобильных */
@media (max-width: 600px) {
  .page-title { font-size: 1.1rem; letter-spacing: 1px; }
  .slot-icon { width: 24px; height: 24px; }
  
  .trade-card {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 20px 16px;
  }

  .trade-left, .trade-right {
    text-align: center;
    flex: none;
    width: 100%;
  }

  .trade-arrow {
    transform: rotate(90deg);
    flex: 0 0 24px;
  }
  
  .sticky-controls {
    top: 10px;
    padding: 16px;
    margin-bottom: 20px;
  }
}
</style>

<script setup>
import { UseTabs } from '~/compansable/tabs';

const route = useRoute()
const { data: tabsInfo } = UseTabs()

const tabRouter = computed(() => String(route.params.tabs || ''))
console.log(tabRouter.value, 1)
provide("tabRouter", tabRouter)
const tab = computed(() => tabsInfo.value?.[tabRouter.value])

const search = ref('')

const FilterArrayItems = computed(() => {
  const item = tab.value?.items
  if (!item) return []
  
  if (!search.value.trim()) {
    return item
  }

  const query = search.value.toLowerCase().trim()
  return item.filter(item => item.name.toLowerCase().includes(query)) // includes лучше, чем startsWith для поиска
})
</script>