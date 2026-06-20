import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/modules/auth/pages/LoginPage.vue';
import TenantPage from '@/pages/TenantPage.vue';
import { authGuard } from '@/router/guards';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/tenant',
            name: 'tenant',
            component: TenantPage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: { guest: true },
        },
    ],
});

router.beforeEach(authGuard);

export default router;

router.beforeEach((to, from, next) => {

    const tenantId =
        localStorage.getItem('tenant_id');

    if (
        !tenantId &&
        to.path !== '/tenant'
    ) {
        return next('/tenant');
    }

    next();
});