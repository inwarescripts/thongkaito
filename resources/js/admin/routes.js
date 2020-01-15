
import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/DashboardLayout'
import AdminLogin from './pages/Login'
import Dashboard from './pages/Home';

//404
import NotFound from './404'

const routes = [
    {
        path: '/admin/', component: AdminLayout,
        children: [
            {path: 'dashboard', name: 'dashboard', component: Dashboard, meta: {requiresAuth: true}},
        ]
    },
    {
        path: '/admin/', component: DefaultLayout,
        children: [
            {path: 'login', name: 'auth.login', component: AdminLogin, meta: {requiresAuth: false}},
        ]
    },
    {path: '*', component: NotFound, name: 'not.found'}
];

export default routes;