import DefaultTheme from 'vitepress/theme'
import './custom.css'
import GameHero from './GameHero.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GameHero', GameHero)
  }
}
