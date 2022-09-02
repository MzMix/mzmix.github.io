<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    order: {
        validator(value) {
            return ['img-text', 'text-img'].includes(value)
        },
        default: 'img-text'
    },
    articleId: {
        type: String,
        required: true
    }
})

//Change order of img and text in the panel
const textFirst = ref(false);
onMounted(() => {
    switch (props.order) {
        case 'img-text':
        default:
            textFirst.value = false;
            break;

        case 'text-img':
            textFirst.value = true;
            break;
    }

})

</script>

<template>
    <article :id="props.articleId">

        <div class="d-flex flex-nowrap flex-lg-row flex-column p-4 shadow gap-5 mt-4 mb-4 bg-white">

            <div class="d-flex flex-column gap-2 p-4 flex-grow-1" :class="[textFirst ? 'order-0' : 'order-1']">
                <slot />
            </div>

            <div class="d-flex flex-shrink-0 flex-column justify-content-center">
                <img :src="props.img" alt="Grafika przedstawiająca aplikację" />
            </div>

        </div>

    </article>
</template>

<style scoped>
img {
    max-width: 24em;
}

div a {
    align-self: center !important;
}
</style>