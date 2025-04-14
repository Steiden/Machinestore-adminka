<template>
    <DatePicker v-model="date" placeholder="Выберите дату" class="p-datepicker d-input d-input--light" :showIcon="true"
        icon="d-icon-calendar3" panel-class="datepicker-panel" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';

const date = ref(null);
</script>

<style>
/* @layer components {
    :root {
        --p-datepicker-panel-padding: 16px;
        --p-datepicker-panel-background: #fbfbfb;
        --p-datepicker-panel-border-radius: 10px;
        --p-datepicker-panel-shadow: 0px 4px 13.4px 0px #00000042;
        --p-datepicker-panel-max-width: 360px;
    }

    .datepicker-panel {
        overflow: hidden;
        min-width: var(--p-datepicker-panel-max-width) !important;
    }
} */
</style>