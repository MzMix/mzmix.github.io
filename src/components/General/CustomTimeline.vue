<script setup>
const props = defineProps({

    TimelineStructure: {
        type: Object,
        required: true
    }

});

</script>

<template>
    <div class="d-flex flex-column-reverse">

        <div v-for="element in props.TimelineStructure" :key="element.id">

            <h3>{{ element.header }}</h3>
            <p>{{ element.text }}</p>
            <img :src=element.img :alt=element.header>

        </div>

    </div>
</template>