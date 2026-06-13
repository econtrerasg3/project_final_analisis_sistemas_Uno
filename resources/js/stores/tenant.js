import { defineStore } from 'pinia'

export const useTenantStore = defineStore('tenant', {
    state: () => ({
        tenantId: localStorage.getItem('tenant_id') || ''
    }),

    actions: {
        setTenant(id) {
            this.tenantId = id
            localStorage.setItem('tenant_id', id)
        },

        clearTenant() {
            this.tenantId = ''
            localStorage.removeItem('tenant_id')
        }
    }
})