<template>
<div>
    <p>Штраф №{{serialNumber}}  <v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deletePenalty(penalty.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
    <v-text-field @change="updateState" label="Реквизиты постановления" v-model="penalty.requisites"></v-text-field>
    <v-text-field @change="updateState" label="Сумма штрафа" v-model="penalty.amount"></v-text-field>
    <br/>
</div>
</template>

<script>
export default {
    props: {
        penalty: {
            type: Object,
            required: true
        },
        serialNumber: {
            type: Number,
            required: true 
        } 
        },
    methods: {
        updateState() {
            this.$emit('updateState');
        },
        deletePenalty(id) {
            this.$store.dispatch('penalty/delete',id);
        }
    }
}
</script>

<style scoped>
</style>

