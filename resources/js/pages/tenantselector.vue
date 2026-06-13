
<script setup>
import { ref } from 'vue'

const tenant = ref(localStorage.getItem('tenant_id') || '')

const saveTenant = () => {
    if (!tenant.value.trim()) {
        alert('Debe ingresar un Tenant ID')
        return
    }

    localStorage.setItem('tenant_id', tenant.value)

    alert('Tenant guardado correctamente')
}
</script>

<template>
    <div class="container">
        <h2>Seleccionar Tenant</h2>

        <input
            v-model="tenant"
            type="text"
            placeholder="Ingrese UUID del Tenant"
        />

        <button @click="saveTenant">
            Guardar
        </button>
    </div>
</template>
