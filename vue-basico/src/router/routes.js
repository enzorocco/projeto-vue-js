import MyLogin from '@/views/MyLogin.vue'
import Dashboard from '@/views/Dashboard.vue'
import controleDeProdutos from '@/views/ControleDeProdutos.vue'
import ControleDeClientes from '@/views/ControleDeClientes.vue'
const routes = 
[
    {
      path: '/login',
      name: 'login',
      component: MyLogin,
      title: 'login',
      meta: {requiredAuth: false}
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      title: 'Dashboard',
      meta: {requiredAuth: true}
    },
    {
      path: '/controle-de-produtos',
      name: 'ControleDeProdutos',
      component: controleDeProdutos,
      title: 'Produtos',
      meta: {requiredAuth: true}
    },
    {
      path: '/controle-de-clientes',
      name: 'ControleDeClientes',
      component: ControleDeClientes,
      title: 'Clientes',
      meta: {requiredAuth: true}
    },  
];
  export default routes;
  