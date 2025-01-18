<template>
    <div class="shadow-sm bg-light mb-3">
        <nav class="navbar navbar-expand navbar-light container">
            <div class="container-fluid p-0">
                <router-link class="navbar-brand" to="/" title="Home">
                    <img src="../assets/hoaxify.png" width="60" alt="Hoaxify Logo" />
                    Hoaxify
                </router-link>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup" date-testid="link-signup-page">
                            {{ $t('signUp') }}
                        </router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>