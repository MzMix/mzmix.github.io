<script setup>
import { onMounted, ref } from "vue"
import PanelButtonGroup from '../ContentPanel/PanelButtonGroup.vue';


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
    <div class="row justify-content-center mb-5">
        <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 align-self-end">
            <article :id="props.articleId" class="scrollTo">

                <div class="d-flex flex-nowrap flex-lg-row flex-column p-4 shadow gap-5 mt-4 mb-4 bg-white scrollTo">

                    <div class="d-flex flex-column gap-1 p-2 flex-grow-1" :class="[textFirst ? 'order-0' : 'order-1']">

                        <h3>
                            <slot name="Header">Content Panel Header</slot>
                        </h3>

                        <slot name="Text">Content Panel Text</slot>

                        <PanelButtonGroup>
                            <slot name="Buttons">Content Panel Button Group</slot>
                        </PanelButtonGroup>

                    </div>

                    <div class="d-flex flex-shrink-0 flex-column justify-content-center align-items-center p-sm-2">
                        <img class="" :src="props.img" alt="Grafika przedstawiająca aplikację" />
                    </div>

                </div>

            </article>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    max-width: 24em;
}

div a {
    align-self: center !important;
}
</style>