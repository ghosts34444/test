<template>
  <div class="main_image"></div>
  <main class="rules-container">

    <div class="top-row">

      <section class="info-card approval-card">
        <div class="card-content">
          <h3 class="card-title">Одобрение варпа</h3>
          <p class="card-text">
            Перед открытием варп должен пройти проверку администрации
            на соответствие правилам, презентабельность и наличие 60+ аппаратов.
          </p>
          <p class="card-text">
            Создайте тикет "Одобрение варпа"!
          </p>
          <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
            class="link-btn" target="_blank">Discord</a>
        </div>
      </section>

      <section class="info-card feedback-card">
        <div class="card-content">
          <h3 class="card-title">Предложить товар</h3>
          <p class="card-text">
            Хотите добавить новый товар в список разрешённых?
            Обязательно укажите название варпа и регион, где размещён варп.
          </p>
          <p class="card-text">
            Создайте тикет "Одобрение варпа"!
          </p>
          <a href="https://discord.com/channels/1285150074636206110/1285150074686410809/1539585574237904947"
            class="link-btn" target="_blank">Discord</a>
        </div>
      </section>

    </div>

    <div class="bottom-row">

      <section class="rule-section">
        <div class="section-title rule-title">⎘ Правила ⎘</div>
        <ol class="rule-list">
          <li>Варп должен быть одобрен администрацией DarkGalaxy.</li>
          <li>На варпе должно быть не менее 60 торговых аппаратов.</li>
          <li>Варп должен выглядеть презентабельно.</li>
          <li>Цены на варпе должны быть сделаны по таблице, либо согласованы с администрацией сервера.</li>
          <li>На варпе запрещено находиться со включённым магнитом. Варп должен быть безопасным для игроков.</li>
          <li>Так же на варпах разрешены только плиты для зарядки EU энергией</li>
        </ol>
      </section>

      <section class="bans-section">
        <div class="section-title bans-title">⚠ Запрет на продажу ⚠</div>
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

    </div>
  </main>
</template>

<style scoped>
.main_image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/data/background_glow.CMg_rSSe.webp') no-repeat center center;
  background-size: cover;
  pointer-events: none;
  z-index: -1;
  opacity: 0.6;
}

.rules-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.top-row,
.bottom-row {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
}

.info-card {
  flex: 1;
  background: #0d1018;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 30px;
  display: flex;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-text {
  font-size: 14px;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0 0 20px 0;
}

.feedback-card {
  border-top: 3px solid #8b5cf6;
}

.feedback-card .card-title {
  color: #a78bfa;
}

.approval-card {
  border-top: 3px solid #10b981;
}

.approval-card .card-title {
  color: #34d399;
}


.link-btn {
  width: 60%;
  height: 30px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e0;
  text-decoration: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.link-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #34d399;
  color: #ffffff;
  transform: translateY(-1px);
}

.rule-section,
.bans-section {
  flex: 1;
  background: #0d1018;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 35px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.rule-title {
  color: #7a9bc7;
}

.bans-title {
  color: #c0504d;
}

.rule-list,
.bans-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rule-list {
  counter-reset: rule-counter;
}

.bans-list {
  counter-reset: ban-counter;
}

.rule-list li,
.bans-list li {
  padding: 16px 20px 16px 65px;
  margin-bottom: 12px;
  border-radius: 8px;
  position: relative;
  transition: all 0.2s ease;
  font-size: 15px;
  line-height: 1.6;
  color: #cbd5e0;
}

.rule-list li {
  counter-increment: rule-counter;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #5b7ba8;
}

.rule-list li::before {
  content: counter(rule-counter);
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: rgba(91, 123, 168, 0.15);
  color: #7a9bc7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.rule-list li:hover {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: #7a9bc7;
  transform: translateX(4px);
}

.bans-list li {
  counter-increment: ban-counter;
  background: rgba(192, 80, 77, 0.05);
  border-left: 3px solid #a04a47;
}

.bans-list li::before {
  content: counter(ban-counter);
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: rgba(192, 80, 77, 0.15);
  color: #c0504d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.bans-list li:hover {
  background: rgba(192, 80, 77, 0.08);
  border-left-color: #c0504d;
  transform: translateX(4px);
}

.bans-note {
  margin-top: 25px;
  padding: 16px 20px;
  background: rgba(192, 80, 77, 0.05);
  border: 1px solid rgba(192, 80, 77, 0.2);
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  color: #a04a47;
  font-style: italic;
  line-height: 1.6;
}

@media (max-width: 968px) {

  .top-row,
  .bottom-row {
    flex-direction: column;
  }

  .rule-section,
  .bans-section {
    padding: 25px 20px;
  }
}

@media (max-width: 768px) {
  .info-card {
    flex-direction: column;
    gap: 15px;
    padding: 25px 20px;
  }

  .card-icon {
    font-size: 28px;
  }

  .rule-list li,
  .bans-list li {
    padding-left: 60px;
    font-size: 14px;
  }

  .rule-list li::before,
  .bans-list li::before {
    width: 28px;
    height: 28px;
    font-size: 13px;
    left: 16px;
  }

  .section-title {
    font-size: 18px;
  }

  .links-list {
    flex-direction: column;
  }

  .link-btn {
    justify-content: center;
  }
}
</style>