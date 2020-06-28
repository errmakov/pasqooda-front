<template>
    <div>
        <promoblock />
        <appForm ref="appForm"/>
    </div>
</template>

<script>
import promoblock from '@/components/home/promo.vue';
import appForm from '@/components/home/form.vue';

export default {
    components: {
        promoblock,
        appForm
    }
};
</script>

<style></style>
