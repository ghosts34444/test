<template>
  <main class="rules-container">
    <!-- Секция правил -->
    <section class="rule">
      <ol class="rule-list">
        <li>Варп должен быть одобрен администрацией DarkGalaxy.</li>
        <li>На варпе должно быть не менее 60 торговых аппаратов.</li>
        <li>Варп должен выглядеть презентабельно.</li>
        <li>Цены на варпе должны быть сделаны по таблице, либо согласованы с администрацией сервера.</li>
        <li>На варпе запрещено находиться со включённым магнитом. Варп должен быть безопасным для игроков.</li>
        <li>Так же на варпах разрешены только плиты для зарядки EU энергией</li>
      </ol>
    </section>

    <!-- Секция запретов -->
    <section class="bans-section">
      <div class="bans-title">⚠ Запрет на продажу ⚠</div>
      <ol class="bans-list">
        <li>Голова Флюгеля</li>
        <li>Голова Гайи</li>
        <li>Души мобов</li>
        <li>Топ гены Forestry</li>
        <li>Пчелы Forestry</li>
        <li>Все фрукты для супа</li>
        <li>Вселенское рагу</li>
        <li>Любые панели</li>
        <li>Сингулярности (жидкостные тоже)</li>
      </ol>
      <div class="bans-note">
        А также любые ресурсы продающиеся только за монеты или же запрещенные к продаже
      </div>
    </section>
  </main>
</template>

<script setup>
// Если понадобится логика — добавляй сюда
</script>

<style scoped>
.rules-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* ===== ПРАВИЛА ===== */
.rule {
  background: linear-gradient(145deg, rgba(20, 25, 50, 0.9), rgba(15, 20, 40, 0.95));
  border: 2px solid rgba(100, 150, 255, 0.3);
  border-radius: 16px;
  padding: 35px 40px;
  margin-bottom: 40px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(100, 150, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.rule::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #4a9eff, #6dd5fa, #4a9eff);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.rule-list {
  list-style: none;
  counter-reset: rule-counter;
  padding: 0;
  margin: 0;
}

.rule-list li {
  counter-increment: rule-counter;
  padding: 18px 20px 18px 70px;
  margin-bottom: 12px;
  background: rgba(30, 40, 70, 0.4);
  border-left: 4px solid #4a9eff;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  font-size: 15px;
  line-height: 1.6;
  color: #e0e6ff;
}

.rule-list li::before {
  content: counter(rule-counter);
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #4a9eff, #6dd5fa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.4);
}

.rule-list li:hover {
  background: rgba(40, 55, 90, 0.6);
  border-left-color: #6dd5fa;
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(74, 158, 255, 0.2);
}

/* ===== ЗАПРЕТЫ ===== */
.bans-section {
  background: linear-gradient(145deg, rgba(40, 15, 20, 0.9), rgba(30, 10, 15, 0.95));
  border: 2px solid rgba(255, 80, 80, 0.3);
  border-radius: 16px;
  padding: 35px 40px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(255, 80, 80, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.bans-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff4757, #ff6b81, #ff4757);
  animation: shimmer 3s ease-in-out infinite;
}

.bans-title {
  font-size: 22px;
  font-weight: bold;
  color: #ff6b81;
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 71, 87, 0.5);
}

.bans-list {
  list-style: none;
  counter-reset: ban-counter;
  padding: 0;
  margin: 0;
}

.bans-list li {
  counter-increment: ban-counter;
  padding: 14px 20px 14px 60px;
  margin-bottom: 10px;
  background: rgba(60, 20, 25, 0.4);
  border-left: 4px solid #ff4757;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  font-size: 15px;
  line-height: 1.5;
  color: #ffe0e3;
}

.bans-list li::before {
  content: counter(ban-counter);
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff4757, #ff6b81);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
}

.bans-list li:hover {
  background: rgba(80, 25, 30, 0.6);
  border-left-color: #ff6b81;
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(255, 71, 87, 0.2);
}

.bans-note {
  margin-top: 25px;
  padding: 18px 25px;
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid rgba(255, 71, 87, 0.3);
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: #ff9aa2;
  font-style: italic;
  line-height: 1.6;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .rule,
  .bans-section {
    padding: 25px 20px;
  }

  .rule-list li,
  .bans-list li {
    padding-left: 60px;
    font-size: 14px;
  }

  .rule-list li::before,
  .bans-list li::before {
    width: 30px;
    height: 30px;
    font-size: 13px;
  }

  .bans-title {
    font-size: 18px;
  }
}
</style>