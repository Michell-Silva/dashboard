import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginComponent from '../pages/Login/LoginComponent';
import HomeComponent from '../pages/Home/HomeComponent';
import CustomersComponent from "@/pages/Customers/CustomersComponent";
import ProductsComponent from '../pages/Products/ProductsComponent';
import SalesComponent from '../pages/Sales/SalesComponent'


Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Login', component: LoginComponent },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/customers', name: 'Customers', component: CustomersComponent },
    { path: '/products', name: 'Products', component: ProductsComponent },
    { path: '/sales', name: 'Sales', component: SalesComponent },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
});
export default router
