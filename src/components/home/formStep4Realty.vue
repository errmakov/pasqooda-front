
<template>
<div>
    <p>Объект №{{serialNumber}}  <v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deleteRealty(realty.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
    <v-text-field label="Название" @change="updateState" v-model="realty.name"></v-text-field>

    <v-text-field label="Кадастровый номер" @change="updateState" v-model="realty.cadastral"></v-text-field>

    <v-text-field label="Площадь" @change="updateState" v-model="realty.square"></v-text-field>
    
    <v-text-field label="Адрес" @change="updateState"  v-model="realty.address"></v-text-field>

    <v-text-field label="Приблизительная стоимость" @change="updateState"  v-model="realty.price"></v-text-field>
    <br/>
</div>
</template>

<script>
export default {
    props: {
        realty: {
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
        deleteRealty(id) {
            this.$store.dispatch('realty/delete',id);
        }
        }
}
</script>

<style scoped>
</style>

