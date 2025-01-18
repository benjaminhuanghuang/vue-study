<template>
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <form v-if="!successMessage" class="card" @submit.prevent="submit" data-testid="form-sign-up">
            <div class="card-header text-center">
                <h1>Sign Up</h1>
            </div>
            <div class="card-body">
                <!-- 
                <div class="mb-3">
                    <label class="form-label" for="username">Username</label>
                    <input class="form-control" id="username" v-model="formState.username" />
                    <div>{{ errors.username }}</div>
                </div> 
                -->
                <AppInput :id="username" label="User name" :help="errors.username" v-model="formState.username" />
                <AppInput :id="email" label="E-mail" :help="errors.email" v-model="formState.email" />
                <AppInput :id="password" type="password" label="Password" :help="errors.password"
                    v-model="formState.password" />
                <AppInput :id="passwordRepeat" type="password" label="E-mail" :help="passwordMismatchError"
                    v-model="formState.passwordRepeat" />
                <div v-if="errorMessages" class="alert alert-success">
                    {{ errorMessages }}
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" :disabled="isDisabled || apiProgress">
                        <span v-if="apiProgress" class="spinner-border spinner-border-sm" role="status">
                        </span>
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
        <div v-if="successMessage" class="alert alert-success">
            {{ successMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { AppInput } from '@/components/';
import { signUp } from './api';

const { t } = useI18();

const formState = reactive({
    username: '',
    email: '',
    password: '',
    passwordRepeat: ''
})

const apiProgress = ref(false);
const successMessage = ref('');
const errorMessages = ref('');
const errors = reactive({});

const isDisabled = computed(() => {
    return (formState.password || formState.passwordRepeat)
        ? formState.password !== formState.passwordRepeat
        : true;
})

const passwordMismatchError = computed(() => {
    return formState.password !== formState.passwordRepeat ? t('passwordMismatch') : undefined;
});

watch(() => formState.username, () => {
    delete errors.value.username
});

watch(() => formState.email, () => {
    delete errors.value.email
});

watch(() => formState.password, () => {
    delete errors.value.password
});

const submit = async () => {
    apiProgress.value = true;
    errorMessages.value = undefined;
    const { passwordRepeat, ...body } = formState;
    try {
        const response = await signUp(body);
        successMessage.value = response.data.message;
    } catch (apiError) {
        console.error(error);
        if (apiError.response?.status === 400) {
            errors.value = apiError.response.data.validationErrors;
        } else {
            errorMessages.value = t('genericError');
        }
    } finally {
        apiProgress.value = false;
    }
}   
</script>