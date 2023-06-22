import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './page/HomePage'; 
import Filme from './page/FilmePage'; 
import MeusFilmes from './page/MeusFilmes';
import Erro from './page/ErroPage';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Home 
        },
        {
            path:'/filme/:id',
            component: Filme,
            props: true, 
        },
        {
            path: '/salvos',
            component: MeusFilmes 
        },
        {
            path:'*',
            component: Erro
        }
    ]
});

export default router;