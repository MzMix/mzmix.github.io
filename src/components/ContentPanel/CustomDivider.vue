<template>
    <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
            <slot />
        </div>
        <div class="divider-custom-line"></div>
    </div>
</template>

<style scoped>
.divider-custom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    --lineColor: #212529;
}

.divider-custom .divider-custom-line:first-child {
    margin-right: 1rem;
}

.divider-custom .divider-custom-line:last-child {
    margin-left: 1rem;
}

.divider-custom .divider-custom-line {
    width: 100%;
    max-width: 20rem;
    height: 0.25rem;
    background-color: var(--lineColor);
    border-radius: 1rem;
    border-color: var(--lineColor);
}

.divider-custom .divider-custom-icon {
    color: #212529;
    font-size: 2rem;
}
</style>