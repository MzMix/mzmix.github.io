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
    <a class="btn btn-purple align-self-center mt-2 text-nowrap" :href="props.link" :alt="props.altMsg">
        <slot />
    </a>
</template>