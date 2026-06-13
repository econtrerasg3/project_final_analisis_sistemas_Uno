script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tenantId = ref(localStorage.getItem('tenant_id') || '')

const saveTenant = () => {
    if (!tenantId.value.trim()) {
        alert('Debe ingresar un Tenant ID')
        return
    }

    localStorage.setItem('tenant_id', tenantId.value)

    alert('Tenant guardado correctamente')

    router.push('/login')
}
</script>

<template>
    <div>
        <h1>Seleccionar Tenant</h1>

        <input
            v-model="tenantId"
            type="text"
            placeholder="Ingrese UUID del Tenant"
        />

        <button @click="saveTenant">
            Guardar
        </button>
    </div>
</template>