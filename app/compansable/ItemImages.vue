<template>
  <span class="item-images">
    <template v-for="(part, index) in parts" :key="index">
      <span class="item-part">
        <NuxtImg class="item-png" :src="parseItem(part)" />
        <span class="item-text">{{ part }}</span>
      </span>
      <span v-if="index < parts.length - 1" class="separator">/</span>
    </template>
  </span>
</template>

<script setup>
import { parseItem } from '~/compansable/parse';

const props = defineProps({
  itemName: {
    type: String,
    required: true
  }
});

const parts = computed(() => {
  if (!props.itemName) return [];
  const cleaned = props.itemName.replace(/^>\s*/, '');
  return cleaned.split('/');
});
</script>

<style scoped>
.item-images {
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
}

.item-part {
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: flex-end;
}

.item-text {
  font-size: 2rem;
  font-weight: 500;
  color: #e2e8f0;
  line-height: 1.3;
  white-space: normal;
  word-break: break-word;
}

.separator {
  margin: 0 4px;
  color: #94a3b8;
  font-weight: 400;
  user-select: none;
  align-self: center;
}

.item-png {
  width: 64px; /* Увеличил с 24px */
  height: 64px;
  image-rendering: pixelated;
  object-fit: contain;
  flex-shrink: 0;
}

@media (max-width: 600px) {
    .item-text {
        font-size: 1.6rem;
    }
}
</style>