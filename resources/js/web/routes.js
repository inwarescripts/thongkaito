//WEB
import HomeLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';


//404
import NotFound from './404'

const routes = [
    {
        path: '/', component: HomeLayout,
        children: [
            {path: '', name: 'home', component: Home},
            {path: '/about', name: 'about', component: About},
        ]
    },
    {path: '*', component: NotFound, name: 'not.found'}
];

export default routes;