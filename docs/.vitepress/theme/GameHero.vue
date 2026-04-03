<template>
  <div class="game-hero">
    <!-- Sky -->
    <div class="sky">
      <div class="cloud-band"></div>
      <div class="sun-outer"></div>
      <div class="sun-glow"></div>
      <div class="sun"></div>
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

/* Cloud band matching game: rgba(0.91, 0.97, 1.0, 0.38) */
.cloud-band {
  position: absolute;
  top: 8%;
  left: 0; right: 0;
  height: 30%;
  background: rgba(232, 247, 255, 0.35);
}

.sun-outer {
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255, 240, 156, 0.42);
  box-shadow: 0 0 60px rgba(255, 240, 156, 0.3);
}

.sun-glow {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,240,156,0.42) 0%, transparent 70%);
}

.sun {
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255,245,194,1);
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

/* Hills - tiled across full width, sitting at horizon with green tint */
.hills-strip {
  position: absolute;
  bottom: calc(22% - 30px);
  left: 0;
  width: 100%;
  height: 140px;
  z-index: 2;
  overflow: hidden;
}

.hill {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  min-width: 400px;
  opacity: 0.9;
  filter: sepia(0.1) saturate(1.2) hue-rotate(-10deg);
}

.hill:nth-child(1) { left: -10%; }
.hill:nth-child(2) { left: 20%; }
.hill:nth-child(3) { left: 50%; }
.hill:nth-child(4) { left: 80%; }

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
  bottom: -12px;
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
  font-family: 'Avenir Next', 'AvenirNext-Heavy', 'Montserrat', sans-serif;
  font-weight: 900;
  margin: 20px 0 10px 0;
  line-height: 1;
}

.clay-text {
  display: block;
  font-size: 3.5rem;
  color: #ffeb73;
  letter-spacing: 6px;
  -webkit-text-stroke: 5px #592e0d;
  paint-order: stroke fill;
  text-shadow: 4px -4px 0 rgba(0,0,0,0.5);
  margin-bottom: -4px;
}

.rush-text {
  display: block;
  font-size: 3.5rem;
  color: #de732b;
  letter-spacing: 6px;
  -webkit-text-stroke: 6px #4d260d;
  paint-order: stroke fill;
  text-shadow: 4px -4px 0 rgba(0,0,0,0.5);
}

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
  .clay-text { font-size: 2.4rem; -webkit-text-stroke: 4px #592e0d; }
  .rush-text { font-size: 2.4rem; -webkit-text-stroke: 4px #4d260d; }
  .app-icon { width: 70px; height: 70px; }
  .shooter { height: 75px; }
  .clay-disc { display: none; }
  .back-tree-left, .back-tree-right { display: none; }
}
</style>
