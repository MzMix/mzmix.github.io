<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    PageSections: {
        required: true,
        default: [
            {
                SectionId: -1,
                SectionHeader: 'SectionHeader-Default',
                SectionHref: 'SectionHref-Default'
            }
        ],
        validator(value) {

            let result = true;

            value.forEach(element => {
                let keys = Object.keys(element);

                keys.forEach(key => {
                    result *= (['SectionId', 'SectionHeader', 'SectionHref'].includes(key));
                })

            });

            return result
        }
    }
})

const currentSection = ref('');

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id');
            }
        })
    },
        {
            rootMargin: '0px 0px -60% 0px',
        }

    )

    document.querySelectorAll('.sectionHeader').forEach((section) => {
        observer.observe(section);
    })

})

</script>

<template>

    <main :id="'main'" class="scrollTo">

        <div class="container-fluid pt-4">
            <div class="row">

                <article class="col-xxl-8 col-xl-10 col-lg-9 col-sm-12">

                    <div class="container-fluid">

                        <div class="row">

                            <div class="col-10 offset-2 p-4">
                                <h1 class="text-underline-purple">
                                    <slot name="PageHeader">Page Header</slot>
                                </h1>
                            </div>

                        </div>

                        <section v-for="section in props.PageSections" :key="section.SctionId">

                            <div class="row">

                                <div class="col-10 offset-2 p-4 scrollTo" :id="section.SectionHref">

                                    <h2 :id="section.SectionId" class="sectionHeader">
                                        <span class="header-text">{{section.SectionHeader}}</span>
                                        <a class="anchor-link" :href="'#'+section.SectionHref"
                                            :aria-label="'Link do tej sekcji: ' + section.SectionHeader">#</a>
                                    </h2>

                                    <slot :name="section.SectionHref">Section Content</slot>

                                    <hr v-if="section.SectionId != props.PageSections.length-1"
                                        class="border border-2 opacity-50 mt-5" />

                                </div>
                            </div>

                        </section>

                    </div>
                </article>

                <aside class="col-xl-2 col-lg-3 offset-xxl-2 pt-4 position-relative text-black-50">
                    <div class="position-sticky sticky-top d-flex flex-column" style="top: 6em;">
                        <a v-for="(section) in props.PageSections" :key="section.SectionHeader"
                            :href="'#'+section.SectionHref"
                            class="border-start border-2 text-decoration-none text-black-50 ps-2"
                            :class="{active: section.SectionId == currentSection}">
                            {{section.SectionHeader}}
                        </a>
                    </div>

                </aside>

            </div>
        </div>
    </main>

</template>

<style scoped>
.anchor-link:focus,
.anchor-link:hover,
:hover>.anchor-link,
:target>.anchor-link {
    color: var(--CutomPutple);
    text-decoration: none;
    opacity: 1;
}

.anchor-link {
    padding: 0 .175rem;
    font-weight: 400;
    color: var(--CutomPutple);
    text-decoration: none;
    opacity: 0;
    transition: color 0.15s ease-in-out, opacity 0.15s ease-in-out;
}

.active {
    font-weight: 500 !important;
    color: black !important;
    border-color: var(--CutomPutple) !important;
}
</style>