import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/AppLayout'
import AdminLogin from './pages/Login'
import Dashboard from './pages/Dashboard';
//User
import UserList from './pages/user/List'
import UserAdd from './pages/user/Add'
//404
import NotFound from './404'

const routes = [
    {
        path: '/admin/', component: AdminLayout,
        children: [
            {path: 'dashboard', name: 'dashboard', component: Dashboard, meta: {requiresAuth: true}},
            {path: 'users', name: 'users', component: UserList, meta: {requiresAuth: true}},
            {path: 'users/add', name: 'user.add', component: UserAdd, meta: {requiresAuth: true}},
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