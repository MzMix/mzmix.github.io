<script setup>
const props = defineProps({

    TimelineStructure: {
        type: Object,
        required: true
    }

});

</script>

<template>

    <div class="timeline">
        <div v-for="element in props.TimelineStructure" :key="element.id" :class="[element.id % 2 ? 'right' : 'left']"
            class="TLContainer">

            <div class="TLContent card">
                <img :src=element.img class="card-img-top" :alt=element.header>
                <div class="card-body">
                    <h5 class="card-title">{{ element.header }}</h5>
                    <p class="card-text">{{ element.text }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* The actual timeline (the vertical ruler) */
.timeline {
    position: relative;
    max-width: 50vw;
    margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #7430fa;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

/* Container around content */
.TLContainer {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

/* The circles on the timeline */
.TLContainer::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: white;
    border: 4px solid #7430fa;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

/* Place the TLContainer to the left */
.left {
    left: 0;
}

/* Place the TLContainer to the right */
.right {
    left: 50%;
}

/* Add arrows to the left TLContainer (pointing right) */
.left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #7430fa;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #7430fa;
}

/* Add arrows to the right TLContainer (pointing left) */
.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #7430fa;
    border-width: 10px 10px 10px 0;
    border-color: transparent #7430fa transparent transparent;
}

/* Fix the circle for TLContainers on the right side */
.right::after {
    left: -13px;
}

/* The actual content */
.TLContent {
    padding: 20px 30px;
    position: relative;
    border-radius: 6px;
    border-color: #7430fa;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 800px) {

    /* Place the timelime to the left */
    .timeline::after {
        left: 31px;
    }

    /* Full-width TLContainers */
    .TLContainer {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .TLContainer::before {
        left: 60px;
        border: medium solid #7430fa;
        border-width: 10px 10px 10px 0;
        border-color: transparent #7430fa transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
        left: 15px;
    }

    /* Make all right TLContainers behave like the left ones */
    .right {
        left: 0%;
    }
}
</style>