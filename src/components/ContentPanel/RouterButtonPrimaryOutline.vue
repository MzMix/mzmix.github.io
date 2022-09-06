<script setup>

const props = defineProps({
    link: {
        type: String,
        required: true,
    },
    altMsg: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <router-link :to="props.link" class="btn btn-outline-purple align-self-center mt-2 text-nowrap" :alt="props.altMsg">
        <slot />
    </router-link>
</template>