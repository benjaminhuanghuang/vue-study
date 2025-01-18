<template>
    <div data-testid="activation-page">
        <Alert v-if="status === 'fail'" variant="danger">
            {{ errorMessages }}
        </Alert>
        <Alert v-if="status === 'success'" variant="success">
            {{ successMessage }}
        </Alert>
        <Spinner size="normal" v-if="status === 'loading'" />
    </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Spinner from '@/components/Spinner.vue';
import Alert from '@/components/Alert.vue';

const { t } = useI18n();
const route = useRoute();

const errorMessages = ref();
const successMessage = ref();
const status = ref('');


// watchEffect = onMounted + watch
watchEffect(() => {
    status.value = 'loading';
    try {
        const response = axios.patch(`/api/v1/users/${route.params.token}/active`);
        successMessage.value = response.data.message;
        status.value = 'success'
    } catch (apiError) {
        if (apiError.response?.data?.message) {
            errorMessages.value = apiError.response.data.message;
        } else {
            errorMessages.value = t('genericError')
        }
        status.value = 'fail';
    }
});

</script>

<style></style>