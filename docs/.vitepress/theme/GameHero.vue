<template>
  <div class="game-hero">
    <div class="sky">
      <div class="sun-glow"></div>
      <div class="sun"></div>
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
    </div>
    <div class="hills-layer">
      <div class="grass-band"></div>
      <img src="/grassy-hills.png" class="hills hills-1" alt="">
      <img src="/grassy-hills.png" class="hills hills-2" alt="">
      <img src="/tree-2.png" class="tree back-tree left" alt="">
      <img src="/tree-2.png" class="tree back-tree right" alt="">
      <img src="/tree.png" class="tree front-tree left" alt="">
      <img src="/tree.png" class="tree front-tree right" alt="">
    </div>
    <div class="ground"></div>
    <div class="hero-content">
      <img src="/app-icon.png" class="app-icon" alt="Clay Rush">
      <h1><span class="clay">CLAY</span> <span class="rush">RUSH</span></h1>
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
  height: 520px;
  overflow: hidden;
}

/* Sky */
.sky {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 100%;
  background: linear-gradient(180deg, #4aa8e0 0%, #7ec8f0 50%, #89cff0 70%);
}

.sun-glow {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,248,214,0.5) 0%, transparent 70%);
}

.sun {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff6e0;
  box-shadow: 0 0 40px rgba(255,248,214,0.6);
}

.cloud {
  position: absolute;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
}

.cloud-1 { top: 60px; left: 10%; width: 180px; height: 60px; }
.cloud-2 { top: 100px; right: 15%; width: 140px; height: 50px; opacity: 0.25; }
.cloud-3 { top: 40px; left: 40%; width: 120px; height: 45px; opacity: 0.2; }

/* Hills */
.hills-layer {
  position: absolute;
  bottom: 60px;
  left: 0; right: 0;
  height: 200px;
}

.grass-band {
  position: absolute;
  top: 0;
  left: 0; right: 0;
  height: 30px;
  background: #5a9e3a;
}

.hills {
  position: absolute;
  bottom: 0;
  height: 180px;
  opacity: 0.9;
}

.hills-1 { left: -5%; width: 60%; }
.hills-2 { right: -5%; width: 60%; }

.tree {
  position: absolute;
  bottom: 20px;
}

.back-tree { height: 60px; opacity: 0.85; }
.front-tree { height: 80px; opacity: 0.95; }

.back-tree.left { left: 15%; }
.back-tree.right { right: 15%; }
.front-tree.left { left: 25%; }
.front-tree.right { right: 25%; }

/* Ground */
.ground {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 60px;
  background: #3d7a28;
}

/* Content overlay */
.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.app-icon {
  width: 120px;
  height: 120px;
  border-radius: 22%;
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  margin-bottom: 16px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
  text-shadow: 3px 3px 0 rgba(0,0,0,0.25);
}

.clay { color: #ffdd9c; }
.rush { color: #de7228; }

.tagline {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 24px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.store-badge img {
  height: 50px;
  transition: transform 0.2s;
}

.store-badge img:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .game-hero { height: 420px; }
  h1 { font-size: 2.5rem; }
  .app-icon { width: 90px; height: 90px; }
  .front-tree { display: none; }
}
</style>
