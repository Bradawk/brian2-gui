import BaseDropdown from './components/Base/BaseDropdown.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component(BaseDropdown.name, BaseDropdown)
  }
}

export default GlobalComponents
