<template>
  <div class="main-page">
    <!-- Единый поисковик со стилями -->
    <div class="sticky-controls global-search">
      <div class="search-input-container">
        <input v-model="globalSearch" type="text" class="search-input" placeholder="Поиск по всем разделам..." />
        <button v-if="globalSearch" class="search-clear" @click="globalSearch = ''">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Табы - скрываем если ничего не найдено -->
    <TabSection v-for="(tab, key) in visibleTabs" :key="key" :tab="tab" :search-query="globalSearch" />
  </div>
</template>

<script setup>
import { UseTabs } from '~/compansable/tabs';
import TabSection from '~/compansable/TabSection.vue';
import Fuse from 'fuse.js';

const { data: tabsInfo } = UseTabs();
const globalSearch = ref('');

const cleanName = (name) => {
  if (!name) return '';
  return name
    .replace(/^>\s*/, '')
    .replace(/\s+?\d+\s*[XxХх]\s*$/, '')
    .replace(/\s+?\s*[XxХх]\d+\s*$/, '')
    .replace(/\s+?\d+\s*[XxХх]\s+\s*\([^)]+\)\s*$/, "")
    .replace(/\s*\([^)]+\)\s*$/, '')
    .trim()
    .toLowerCase();
};

const getSearchString = (item) => {
  const parts = [item.name];
  if (item.price) {
    const priceParts = item.price.replace(/^>\s*/, '').split('/');
    priceParts.forEach(part => {
      const cleaned = cleanName(part);
      if (cleaned) parts.push(cleaned);
    });
  }
  return parts.join(' ');
};

// Фильтруем табы - показываем только те, где есть результаты
const visibleTabs = computed(() => {
  if (!tabsInfo.value) return {};

  const query = globalSearch.value.trim();
  if (!query) return tabsInfo.value; // Если поиск пустой, показываем все

  const result = {};

  Object.entries(tabsInfo.value).forEach(([key, tab]) => {
    if (!tab.items || !tab.items.length) return;

    const itemsWithSearch = tab.items.map(item => ({
      ...item,
      searchString: getSearchString(item)
    }));

    const f = new Fuse(itemsWithSearch, {
      keys: ["name", "searchString"],
      threshold: 0.3
    });

    const sr = f.search(query);
    if (sr.length > 0) {
      result[key] = tab;
    }
  });

  return result;
});
</script>

<style scoped>
.main-page {
  padding: 40px 0;
}

/* Стили для глобального поиска */
.global-search {
  margin: 0 auto 40px;
  width: 80%;
  position: sticky;
  top: 10px;
  z-index: 30;
  background: rgba(9, 14, 20, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 20px 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.6);
}

.global-search .search-input-container {
  width: 90%;
  margin: 0 auto;
}

.global-search .search-input {
  width: 90%;
  padding: 14px 44px 14px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.25s ease;
}

.global-search .search-input:focus {
  border-color: #00e5ff;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.1);
}

.global-search .search-input::placeholder {
  color: #94a3b8;
}

.global-search .search-clear {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;
}

.global-search .search-clear:hover {
  color: #00e5ff;
  transform: translateY(-50%) scale(1.1);
}

@media (max-width: 900px) {
  .global-search {
    width: 90%;
    padding: 16px 20px;
  }
}

@media (max-width: 600px) {

  .global-search .search-input-container {
    max-width: 90%;
  }

  .global-search {
    top: 60px;
    background: rgba(9, 14, 20, 0.98);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
</style>