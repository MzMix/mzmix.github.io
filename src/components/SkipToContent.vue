<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true,
    }
})
</script>

<template>

    <div>
        <a class="skip-link bg-purple" :href="props.link" alt="Przejdź do zawartości strony">Przejdź do zawartości
            strony</a>
    </div>

</template>

<style scoped>
.skip-link {
    color: #fff;
    font-weight: 700;
    left: 10%;
    padding: 4px;
    position: absolute;
    transform: translateY(-100%);
}

.skip-link:focus {
    transform: translateY(200%);
}

.skip-link {
    /* Same as  before */
    transition: transform 0.3s;
}
</style>