<template>
  <section v-if="tab" class="page-section">

    <div class="page-header-bg">
      <NuxtImg :src="tab.page_image || `/data/undefined_tab_image.png`" class="page-bg-img" alt="bg" sizes="sm:100vw md:100vw lg:100vw xl:100vw" quality="95" preload />
    </div>

          <div class="page-title-block">
        <NuxtImg :src="tab.slot_image || `/data/undefined_tab.png`" class="slot-icon-1" alt="slot" format="png" :modifiers="{ kernel: 'nearest' }" />
        <h1 class="page-title">{{ tab.name }}</h1>
        <NuxtImg :src="tab.slot_image || `/data/undefined_tab.png`" class="slot-icon-2" alt="slot" format="png" :modifiers="{ kernel: 'nearest' }" />
      </div>

    <div class="sticky-controls">
      <div class="search-wrapper">
        <div class="search-input-container">
          <input v-model="search" type="text" placeholder="Поиск..." class="search-input">
          <button v-if="search" @click="search = ''" class="search-clear" aria-label="Очистить поиск">X</button>
        </div>
      </div>
    </div>

    <div class="trade-list">
      <TransitionGroup name="list">
        <div v-for="items in FilterArrayItems" :key="items" class="trade-card">
          <div class="trade-item">
            <span class="item-name">{{ items.name }}</span>
          </div>

          <div class="trade-arrow">
            ==>
          </div>

          <div class="trade-item text-right">
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
  --c-bg: v-bind('tab.theme.bg_primary || "#fff"');
  --c-card: v-bind('tab.theme.bg_card || "#fff"');
  --c-accent: v-bind('tab.theme.accent || "#fff"');
  --c-glow: v-bind('tab.theme.accent_glow || "#fff"');
  --c-text: v-bind('tab.theme.text_main || "#fff"');
  --c-sub: v-bind('tab.theme.text_sub || "#fff"');

  color: var(--c-text);
}

/* Верхний свет из данных JSON */
.page-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 97%;
  height: 3px;
  border-radius: 0;
  background: var(--c-accent);
  box-shadow: 0 0 60px 20px var(--c-glow);
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
}

.page-header-bg {
  position: relative;
  margin-bottom: 40px;
}

.page-bg-img {
  z-index: 1;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 20px;
  opacity: 1;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}

/* ЛИПКИЙ БЛОК */
.sticky-controls {
  position: sticky;
  top: 10px;
  z-index: 20;

  background: rgba(9, 14, 20, 0.459);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

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
  gap: 10px;
  margin-bottom: 20px;
}

.page-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--c-accent);
}

.slot-icon-1,
.slot-icon-2 {
  width: 48px;
  height: 48px;
  opacity: 0.9;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.slot-icon-2 {
  transform: scaleX(-1);
}

/* Поиск */
.search-wrapper {
  display: flex;
  justify-content: center;
}

.search-input-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 18px;
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
  right: 20px;
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
  gap: 20px;
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

.item-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--c-text);
}

.price-value {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--c-text);
}

.text-right {
  text-align: right;
}

/* Стрелка */
.trade-arrow {
  font-size: 1.3rem;
  width: 40px;
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

@keyframes pulse {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

/* Анимации списка */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
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
  .content {
    padding: 80px 20px 32px;
  }

  .sticky-controls {
    padding: 16px 20px 20px;
  }

  .trade-card {
    padding: 16px 20px;
  }

  .page-section {
    width: 90%;
  }
}

/* Адаптив для мобильных */
@media (max-width: 600px) {
  .page-title {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  .slot-icon {
    width: 24px;
    height: 24px;
  }

  .trade-card {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 20px 16px;
  }

  .trade-left,
  .trade-right {
    text-align: center;
    flex: none;
    width: 100%;
  }

  .trade-arrow {
    transform: rotate(90deg);
    flex: 0 0 24px;
  }

  .sticky-controls {
    top: 60px;
    padding: 16px;
    margin-bottom: 20px;
    background: rgba(9, 14, 20, 0.979);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
}
</style>

<script setup>
import { UseTabs } from '~/compansable/tabs';
import Fuse from 'fuse.js';

const route = useRoute()
const { data: tabsInfo } = UseTabs()

const tabRouter = computed(() => String(route.params.tabs || ''))
const tab = computed(() => tabsInfo.value?.[tabRouter.value])

const search = ref('')

const FilterArrayItems = computed(() => {
  const items= tab.value?.items
  if (!items) return []

  if (!search.value.trim()) {
    return items
  }

  const fuse = new Fuse(items, {
  keys: ['name'],
  threshold: 0.3,
  includeScore: true
})

  const query = search.value.toLowerCase().trim()
  console.log(items.filter(item => item.name.toLowerCase().includes(query)))
  const r = fuse.search(query)
  const result = r.map(r => r.item)
  return result
})

definePageMeta({
  keepalive: true,
  pageKey: 'tabs-shared-key' 
})
</script>