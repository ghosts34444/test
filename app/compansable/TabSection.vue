<template>
    <section class="page-section">
        <div class="page-header-bg">
            <NuxtImg v-if="tab.bg_image" class="page-bg-img" :src="tab.bg_image" :alt="tab.name" />
        </div>

        <div class="page-title-block">
            <NuxtImg v-if="icon1" class="slot-icon-1" :src="tab.slot_image" />
            <h2 class="page-title">{{ tab.name }}</h2>
            <NuxtImg v-if="icon2" class="slot-icon-2" :src="tab.slot_image"/>
        </div>

        <main>
            <div v-if="filteredItems.length" class="trade-list">
                <TransitionGroup name="list">
                    <div v-for="(items, idx) in filteredItems" :key="idx" class="trade-card">
                        <div class="trade-item">
                            <span class="item text-left">
                                <NuxtImg class="item-png" :src="parseItem(items.name)" />{{ items.name }}
                            </span>
                        </div>

                        <div class="trade-arrow">==></div>

                        <div class="trade-item">
                            <span class="item text-right">
                                <ItemImages :item-name="items.price" />
                            </span>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
            <div v-else class="empty-state">
                <p>Данные не найдены в этом секторе...</p>
            </div>
        </main>
    </section>
</template>

<script setup>
import Fuse from 'fuse.js';
import { parseItem } from '~/compansable/parse';
import ItemImages from './ItemImages.vue';

const props = defineProps({
    tab: {
        type: Object,
        required: true
    },
    searchQuery: {
        type: String,
        default: ''
    },
    icon1: {
        type: String,
        default: ''
    },
    icon2: {
        type: String,
        default: ''
    },
    showLocalSearch: {
        type: Boolean,
        default: true
    }
});

const localSearch = ref('');

const hasGlobalSearch = computed(() => props.searchQuery.trim().length > 0);

const activeQuery = computed(() => {
    return hasGlobalSearch.value ? props.searchQuery : localSearch.value;
});

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

const filteredItems = computed(() => {
    if (!props.tab.items || !props.tab.items.length) return [];

    const query = activeQuery.value.trim();
    if (!query) {
        return props.tab.items;
    }

    const itemsWithSearch = props.tab.items.map(item => ({
        ...item,
        searchString: getSearchString(item)
    }));

    const f = new Fuse(itemsWithSearch, {
        keys: ["name", "searchString"],
        threshold: 0.3
    });

    const sr = f.search(query);
    return sr.length ? sr.map(s => s.item) : [];
});
</script>

<style scoped>
.page-section {
  width: 80%;
  margin: 0 auto;
  position: relative;

    --c-bg: v-bind('props.tab.theme?.bg_primary || "#0f1419"');
    --c-card: v-bind('props.tab.theme?.bg_card || "#1a1f2e"');
    --c-accent: v-bind('props.tab.theme?.accent || "#00e5ff"');
    --c-glow: v-bind('props.tab.theme?.accent_glow || "#00e5ff"');
    --c-text: v-bind('props.tab.theme?.text_main || "#ffffff"');
    --c-sub: v-bind('props.tab.theme?.text_sub || "#94a3b8"');

    color: var(--c-text);
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
    height: max-content;
    gap: 20px;
}


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

.item {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
}

.text-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    min-height: 100%;
}

.text-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

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

.item-png {
    width: 64px;
    height: 64px;
    image-rendering: pixelated;
    flex-shrink: 0;
}

@media (max-width: 900px) {
    .page-section {
        width: 90%;
    }

    .sticky-controls {
        padding: 16px 20px 20px;
    }

    .trade-card {
        padding: 16px 20px;
    }
}

@media (max-width: 600px) {
    .page-title {
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    .slot-icon-1,
    .slot-icon-2 {
        width: 24px;
        height: 24px;
    }

    .trade-card {
        flex-direction: column;
        gap: 12px;
        text-align: center;
        padding: 20px 16px;
        height: auto;
    }

    .text-right,
    .text-left {
        justify-content: center;
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

    .item {
        font-size: 1.6rem;
    }
}
</style>