import Outlines from './components/Outlines.vue'

export { Outlines }

export default {
  install(app) {
    app.component('Outlines', Outlines)
  }
}
