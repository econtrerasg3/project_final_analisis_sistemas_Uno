<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getTenants } from '@/services/tenantService';

const router = useRouter();

const tenants = ref([]);
const selectedTenant = ref('');

onMounted(async () => {
    tenants.value = await getTenants();
});

const saveTenant = () => {
    if (!selectedTenant.value) {
        alert('Seleccione un tenant');
        return;
    }

    localStorage.setItem(
        'tenant_id',
        selectedTenant.value
    );

    router.push('/dashboard');
};
</script>

<template>
    <div class="container mt-5">

        <div class="card shadow">

            <div class="card-header">
                Selección de Tenant
            </div>

            <div class="card-body">

                <label class="form-label">
                    Tenant
                </label>

                <select
                    v-model="selectedTenant"
                    class="form-select"
                >
                    <option value="">
                        Seleccione un tenant
                    </option>

                    <option
                        v-for="tenant in tenants"
                        :key="tenant.id"
                        :value="tenant.id"
                    >
                        {{ tenant.name }}
                    </option>

                </select>

                <button
                    class="btn btn-primary mt-3"
                    @click="saveTenant"
                >
                    Continuar
                </button>

            </div>

        </div>

    </div>
</template>