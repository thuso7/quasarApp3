import { defineBoot } from '#q-app/wrappers'
import page from 'src/components/page/page.vue'
import pageBody from 'src/components/page/pageBody.vue'
import pageHeader from 'src/components/page/pageHeader.vue'
import pageFooter from 'src/components/page/pageFooter.vue'
import tabs from 'src/components/footer/tabs.vue'
import roundFlat from 'src/components/button/roundFlat.vue'

const globalComponents = {
  page,
  pageBody,
  pageHeader,
  pageFooter,
  tabs,
  roundFlat
}

export default defineBoot(async ({ app }) => {

  for (const key in globalComponents) {
    app.component(key, globalComponents[key])
  }
})
