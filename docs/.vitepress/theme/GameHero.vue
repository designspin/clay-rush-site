<template>
  <div class="game-hero">
    <!-- Sky -->
    <div class="sky">
      <div class="cloud-band"></div>
      <div class="sun-glow"></div>
      <div class="sun"></div>
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
    </div>

    <!-- Ground (below horizon) -->
    <div class="ground"></div>

    <!-- Grass band at horizon -->
    <div class="grass-band"></div>
    <div class="grass-shadow"></div>

    <!-- Hills tiled across at horizon -->
    <div class="hills-strip">
      <img src="/grassy-hills.png" class="hill" alt="">
      <img src="/grassy-hills.png" class="hill" alt="">
      <img src="/grassy-hills.png" class="hill" alt="">
      <img src="/grassy-hills.png" class="hill" alt="">
    </div>

    <!-- Back trees (smaller, dimmer, positioned wider) -->
    <img src="/tree-2.png" class="tree back-tree-left" alt="">
    <img src="/tree-2.png" class="tree back-tree-right" alt="">

    <!-- Front trees (larger, positioned narrower) -->
    <img src="/tree.png" class="tree front-tree-left" alt="">
    <img src="/tree.png" class="tree front-tree-right" alt="">

    <!-- Floating clays -->
    <div class="clay-disc clay-1"></div>
    <div class="clay-disc clay-2"></div>

    <!-- Shooter -->
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
  height: 560px;
  overflow: hidden;
  user-select: none;
}

/* Sky - matches game: rgb(0.53, 0.81, 0.98) = #87cefa */
.sky {
  position: absolute;
  inset: 0;
  background: #87cefa;
}

/* Cloud band at 80% height - rgba(0.91, 0.97, 1.0, 0.38) */
.cloud-band {
  position: absolute;
  top: 10%;
  left: 0; right: 0;
  height: 28%;
  background: rgba(232, 247, 255, 0.38);
}

.sun-glow {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,240,156,0.42) 0%, transparent 70%);
}

.sun {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255,245,194,1);
}

.cloud {
  position: absolute;
  background: rgba(255,255,255,0.25);
  border-radius: 30px;
  animation: drift 50s linear infinite;
}

.cloud-1 { top: 12%; left: -15%; width: 160px; height: 45px; }
.cloud-2 { top: 20%; left: -10%; width: 120px; height: 35px; animation-duration: 65s; animation-delay: -20s; opacity: 0.2; }

@keyframes drift {
  from { transform: translateX(0); }
  to { transform: translateX(130vw); }
}

/* Ground - rgb(0.39, 0.56, 0.14) = #638f24 */
.ground {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 28%;
  background: #638f24;
}

/* Grass band - rgb(0.47, 0.67, 0.21) = #78ab36 */
.grass-band {
  position: absolute;
  bottom: 28%;
  left: 0; right: 0;
  height: 2.5%;
  background: #78ab36;
  z-index: 1;
}

/* Grass shadow - rgb(0.30, 0.45, 0.11) = #4d731c at 0.68 alpha */
.grass-shadow {
  position: absolute;
  bottom: 25%;
  left: 0; right: 0;
  height: 3%;
  background: rgba(77, 115, 28, 0.68);
  z-index: 1;
}

/* Hills - tiled across, sitting at horizon with green tint */
.hills-strip {
  position: absolute;
  bottom: 22%;
  left: -10%;
  right: -10%;
  display: flex;
  z-index: 2;
}

.hill {
  height: 140px;
  flex-shrink: 0;
  margin-right: -18%;
  opacity: 0.9;
  filter: sepia(0.1) saturate(1.2) hue-rotate(-10deg);
}

/* Back trees - at ±70% of half-hill from center, smaller */
.tree { position: absolute; z-index: 3; }

.back-tree-left {
  bottom: 30%;
  left: 15%;
  height: 45px;
  opacity: 0.86;
}

.back-tree-right {
  bottom: 31%;
  right: 15%;
  height: 42px;
  opacity: 0.86;
}

/* Front trees - at ±49% of half-hill from center, larger */
.front-tree-left {
  bottom: 26%;
  left: 26%;
  height: 65px;
  opacity: 0.94;
  z-index: 4;
}

.front-tree-right {
  bottom: 25%;
  right: 24%;
  height: 68px;
  opacity: 0.94;
  z-index: 4;
}

/* Floating clays */
.clay-disc {
  position: absolute;
  width: 36px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f0c590, #d4845a, #a85f3d);
  border: 1.5px solid rgba(106,62,31,0.5);
  z-index: 5;
  animation: bob 3s ease-in-out infinite;
}

.clay-1 { top: 35%; left: 14%; transform: rotate(-12deg); }
.clay-2 { top: 30%; right: 16%; animation-delay: -1.5s; transform: rotate(8deg); width: 30px; height: 12px; }

@keyframes bob {
  0%, 100% { transform: translateY(0) rotate(-12deg); }
  50% { transform: translateY(-8px) rotate(-6deg); }
}

/* Shooter */
.shooter {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  z-index: 6;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));
}

/* Content */
.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  text-align: center;
}

.app-icon {
  width: 90px;
  height: 90px;
  border-radius: 22%;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

h1 {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 0.85;
  margin: 0 0 10px 0;
  text-shadow: 2px 3px 0 rgba(0,0,0,0.2);
}

.clay-text { color: #ffdd9c; letter-spacing: 5px; }
.rush-text { color: #de7228; letter-spacing: 7px; font-size: 3.2rem; }

.tagline {
  font-size: 1rem;
  color: rgba(255,255,255,0.92);
  margin-bottom: 16px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.25);
}

.store-badge img {
  height: 44px;
  transition: transform 0.2s;
}

.store-badge img:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .game-hero { height: 460px; }
  h1 { font-size: 2rem; }
  .rush-text { font-size: 2.4rem; }
  .app-icon { width: 70px; height: 70px; }
  .shooter { height: 75px; }
  .clay-disc { display: none; }
  .back-tree-left, .back-tree-right { display: none; }
}
</style>
