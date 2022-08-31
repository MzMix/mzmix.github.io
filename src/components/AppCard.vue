<script setup>
const props = defineProps({
    imgSrc: String,
    imgAlt: String,

    cardTitle: String,

    linkHref: String,
    linkText: String
})

</script>

<template>
    <div class="card">
        <img :src='props.imgSrc' class="card-img-top" :alt='props.imgAlt'>
        <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">
                <slot />
            </p>
            <a href=props.linkHref class="btn btn-primary">{{ props.linkText }}</a>
        </div>
    </div>
</template>

<style scoped>
</style>