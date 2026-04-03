import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clay Rush',
  description: 'A fast-paced skeet shooting game for iOS',
  base: '/clay-rush-site/',
  head: [
    ['link', { rel: 'icon', href: '/clay-rush-site/app-icon.png' }]
  ],
  themeConfig: {
    logo: '/app-icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy Policy', link: '/privacy' },
      { text: 'Support', link: '/support' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/designspin/clay-rush-site' }
    ],
    footer: {
      message: 'A DesignSpin Game',
      copyright: '© 2026 DesignSpin. All rights reserved.'
    }
  }
})
