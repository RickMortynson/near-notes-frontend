import { MdOutlineAutoAwesome, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const themesList = new Map([
  [
    'light-scheme',
    {
      title: 'light theme',
      component: MdOutlineLightMode
    }
  ],
  [
    'dark-scheme',
    {
      title: 'dark theme',
      component: MdOutlineDarkMode
    }
  ],
  [
    'auto-scheme',
    {
      title: 'system theme',
      component: MdOutlineAutoAwesome
    }
  ]
])

export { themesList }
