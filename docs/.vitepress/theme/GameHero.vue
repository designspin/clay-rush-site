<template>
  <div class="game-hero">
    <!-- Sky -->
    <div class="sky">
      <div class="sun-glow"></div>
      <div class="sun"></div>
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
    </div>

    <!-- Landscape layers -->
    <div class="landscape">
      <!-- Back hills -->
      <div class="hills-row back-hills">
        <img src="/grassy-hills.png" alt="">
        <img src="/grassy-hills.png" alt="">
        <img src="/grassy-hills.png" alt="">
      </div>

      <!-- Back trees -->
      <img src="/tree-2.png" class="tree" style="left: 8%; bottom: 120px; height: 55px; opacity: 0.8;" alt="">
      <img src="/tree-2.png" class="tree" style="right: 10%; bottom: 125px; height: 50px; opacity: 0.75;" alt="">

      <!-- Front hills (slightly darker) -->
      <div class="hills-row front-hills">
        <img src="/grassy-hills.png" alt="">
        <img src="/grassy-hills.png" alt="">
      </div>

      <!-- Front trees -->
      <img src="/tree.png" class="tree" style="left: 20%; bottom: 85px; height: 80px; opacity: 0.95;" alt="">
      <img src="/tree.png" class="tree" style="right: 18%; bottom: 80px; height: 85px; opacity: 0.9;" alt="">

      <!-- Ground -->
      <div class="ground"></div>
      <div class="ground-shadow"></div>
    </div>

    <!-- Floating clay pigeons -->
    <div class="clay clay-1"></div>
    <div class="clay clay-2"></div>
    <div class="clay clay-3"></div>

    <!-- Shooter at bottom center -->
    <img src="/shoot-neutral.png" class="shooter" alt="">

    <!-- Content -->
    <div class="hero-content">
      <img src="/app-icon.png" class="app-icon" alt="Clay Rush">
      <h1><span class="clay-text">CLAY</span><br><span class="rush-text">RUSH</span></h1>
      <p class="tagline">Fast-paced skeet shooting for iOS</p>
      <a href="#" class="store-badge">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store">
      </a>
    </div>
  </div>
</template>

<style scoped>
.game-hero {
  position: relative;
  width: 100%;
  height: 580px;
  overflow: hidden;
  user-select: none;
}

/* Sky */
.sky {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #53a8d8 0%, #7ec8f0 40%, #a8d8a8 85%, #5a9e3a 100%);
}

.sun-glow {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,248,214,0.45) 0%, transparent 65%);
}

.sun {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255,246,224,0.85);
  box-shadow: 0 0 50px rgba(255,240,180,0.5);
}

.cloud {
  position: absolute;
  background: rgba(255,255,255,0.28);
  border-radius: 40px;
  animation: drift 30s linear infinite;
}

.cloud-1 { top: 50px; left: -10%; width: 200px; height: 50px; animation-duration: 40s; }
.cloud-2 { top: 110px; left: 60%; width: 150px; height: 40px; animation-duration: 55s; animation-delay: -15s; }
.cloud-3 { top: 30px; left: 30%; width: 100px; height: 35px; opacity: 0.2; animation-duration: 45s; animation-delay: -8s; }

@keyframes drift {
  from { transform: translateX(0); }
  to { transform: translateX(120vw); }
}

/* Landscape */
.landscape {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
}

.hills-row {
  position: absolute;
  display: flex;
  bottom: 40px;
  width: 200%;
  left: -20%;
}

.hills-row img {
  height: 160px;
  flex-shrink: 0;
  margin-right: -10%;
}

.back-hills {
  bottom: 60px;
  opacity: 0.7;
  filter: brightness(0.85);
}

.front-hills {
  bottom: 30px;
  opacity: 0.9;
}

.front-hills img {
  height: 140px;
}

.tree {
  position: absolute;
  z-index: 2;
}

.ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, #4a8c32 0%, #3a7228 100%);
}

.ground-shadow {
  position: absolute;
  bottom: 55px;
  left: 0;
  right: 0;
  height: 15px;
  background: linear-gradient(180deg, transparent, rgba(48,70,18,0.5));
}

/* Floating clays */
.clay {
  position: absolute;
  width: 40px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f0c590, #d4845a, #a85f3d);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  animation: float 4s ease-in-out infinite;
}

.clay-1 { top: 160px; left: 12%; animation-delay: 0s; transform: rotate(-10deg); }
.clay-2 { top: 200px; right: 14%; animation-delay: -1.5s; transform: rotate(8deg); width: 35px; height: 14px; }
.clay-3 { top: 130px; right: 30%; animation-delay: -3s; transform: rotate(-15deg); width: 30px; height: 12px; opacity: 0.7; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-10deg); }
  50% { transform: translateY(-12px) rotate(-5deg); }
}

/* Shooter */
.shooter {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 110px;
  z-index: 5;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

/* Content */
.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  text-align: center;
}

.app-icon {
  width: 100px;
  height: 100px;
  border-radius: 22%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.35);
  margin-bottom: 12px;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
  line-height: 0.9;
  margin: 0 0 12px 0;
  text-shadow: 3px 3px 0 rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1);
}

.clay-text { color: #ffdd9c; letter-spacing: 6px; }
.rush-text { color: #de7228; letter-spacing: 8px; font-size: 3.5rem; }

.tagline {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.store-badge img {
  height: 46px;
  transition: transform 0.2s;
}

.store-badge img:hover {
  transform: scale(1.06);
}

@media (max-width: 640px) {
  .game-hero { height: 480px; }
  h1 { font-size: 2.2rem; }
  .rush-text { font-size: 2.6rem; }
  .app-icon { width: 80px; height: 80px; }
  .shooter { height: 80px; }
  .clay { display: none; }
}
</style>
