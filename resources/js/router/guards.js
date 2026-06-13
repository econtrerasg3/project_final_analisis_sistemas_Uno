export function authGuard(to, from, next) {
    const token = localStorage.getItem('auth_token');
    const tenantId = localStorage.getItem('tenant_id');

    // Si no hay tenant seleccionado, enviar a la pantalla de tenant
    if (!tenantId && to.name !== 'tenant') {
        next({ name: 'tenant' });
        return;
    }

    // Rutas protegidas
    if (to.meta.requiresAuth && !token) {
        next({ name: 'login' });
        return;
    }

    // Evitar volver al login si ya está autenticado
    if (to.meta.guest && token) {
        next({ name: 'home' });
        return;
    }

    next();
}