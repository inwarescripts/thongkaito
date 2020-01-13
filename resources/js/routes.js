//WEB
import HomeLayout from './web/layouts/DefaultLayout';
import Home from './web/pages/Home';


//ADMIN
import AdminLayout from './admin/layouts/DefaultLayout';
import AdminLogin from './admin/pages/Login'
import Dashboard from './admin/pages/Home';

//404
import NotFound from './404'

const routes = [
    {
        path: '/', component: HomeLayout,
        children: [
            {path: '', name: 'home', component: Home},
        ]
    },
    {
        path: '/admin/', component: AdminLayout,
        children: [
            {path: 'login', name: 'admin.login', component: AdminLogin, meta: {requiresAuth: false}},
            {path: 'dashboard', name: 'admin.dashboard', component: Dashboard, meta: {requiresAuth: false}},
        ]
    },
    {path: '*', component: NotFound, name: 'not.found'}
];

export default routes;