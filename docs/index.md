---
layout: page
---

<GameHero />

<style>
.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 24px;
}

.feature-card {
  background: #1a1008;
  border: 1px solid #2a1e12;
  border-radius: 12px;
  padding: 28px;
  text-align: center;
  transition: border-color 0.3s;
}

.feature-card:hover {
  border-color: #de7228;
}

.feature-icon {
  display: block;
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin: 0 auto 12px;
  border-radius: 12px;
}

.feature-card h3 {
  color: #ffdd9c;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.feature-card p {
  color: #a08060;
  font-size: 0.9rem;
  line-height: 1.5;
}

.screenshots-section {
  padding: 20px 24px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.screenshots-title {
  text-align: center;
  color: #ffdd9c;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.screenshots {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.screenshots img {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  height: 260px;
  width: auto;
  flex-shrink: 0;
}
</style>

<div class="features-section">
  <div class="feature-card">
    <img src="/icon-reticle.png" class="feature-icon" alt="">
    <h3>Precision Shooting</h3>
    <p>Hit clay targets with perfect timing. Build combos for bonus gold clays and unlock the elusive bonus duck.</p>
  </div>
  <div class="feature-card">
    <img src="/icon-trophy.png" class="feature-icon" alt="">
    <h3>Game Center</h3>
    <p>Compete on leaderboards and unlock 18 achievements across skill, progression, score, and daily challenges.</p>
  </div>
  <div class="feature-card">
    <img src="/icon-daily.png" class="feature-icon" alt="">
    <h3>Daily Challenges</h3>
    <p>A new challenge every day. Build your streak and prove your dedication.</p>
  </div>
  <div class="feature-card">
    <img src="/icon-duck.png" class="feature-icon" alt="">
    <h3>Bonus Duck</h3>
    <p>Destroy every target and a bonus duck flies across — worth thousands of points. Can you hit it?</p>
  </div>
</div>

<div class="screenshots-section">
  <div class="screenshots-title">Screenshots</div>
  <div class="screenshots">
    <img src="/screenshot-1.png" alt="Clay Rush title screen">
    <img src="/screenshot-2.png" alt="Clay Rush gameplay">
    <img src="/screenshot-3.png" alt="Clay Rush second attempt">
  </div>
</div>
