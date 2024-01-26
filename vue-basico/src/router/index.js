import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from './router/routes';
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history' /* recarrega a página sem o asterisco na barra de pesquisa
  e sem recarregar a tela.*/
})

export default router;
