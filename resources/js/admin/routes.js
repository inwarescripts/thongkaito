//WEB
import HomeLayout from './layouts/DefaultLayout';
import Home from './pages/Home';


//ADMIN
import AdminLayout from './layouts/DefaultLayout';
import AdminLogin from './pages/Login'
import Dashboard from './pages/Home';

//404
import NotFound from './404'

const routes = [
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