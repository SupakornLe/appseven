import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {findmin} from './components/pages/findmin';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/findmin/',
    component: findmin
}];
