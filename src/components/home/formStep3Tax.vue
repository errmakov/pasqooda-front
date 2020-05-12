
<template>
<div>
    <p>Налог №{{serialNumber}}  <v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deleteTax(tax.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
    <v-text-field label="Реквизиты постановления" @change="updateState" v-model="tax.requisites"></v-text-field>

    <v-text-field label="Сумма основного долга" @change="updateState" v-model="tax.amount"></v-text-field>

    <v-text-field label="Сумма штрафа" @change="updateState" v-model="tax.fine"></v-text-field>
    
    <v-text-field label="Пени" @change="updateState"  v-model="tax.peny"></v-text-field>
    <br/>
</div>
</template>

<script>
export default {
    props: {
        tax: {
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
        deleteTax(id) {
            this.$store.dispatch('tax/delete',id);
        }
        }
}
</script>

<style scoped>
</style>

