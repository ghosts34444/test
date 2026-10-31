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
            class="link-btn" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Discord</a>
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
            class="link-btn" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 1l4 4-4 4" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
              <path d="M7 23l-4-4 4-4" />
              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>Discord</a>
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
  /* Расположение и текст (из первого блока) */
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  text-decoration: none;
  width: 60%;
  height: 30px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
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