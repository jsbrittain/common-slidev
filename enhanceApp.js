import FancyLayout from './layouts/FancyLayout.vue'
import ExampleNote from './components/ExampleNote.vue'

export default function (app) {
  app.component('FancyLayout', FancyLayout)
  app.component('ExampleNote', ExampleNote)
}
