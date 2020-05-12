
<template>
<div>
    <p>Объект №{{serialNumber}}  <v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deleteMovable(movable.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
    <v-text-field label="Название" @change="updateState" v-model="movable.name"></v-text-field>

    <v-text-field label="VIN (для авто)" @change="updateState" v-model="movable.vin"></v-text-field>

    <v-text-field label="Приблизительная стоимость" @change="updateState"  v-model="movable.price"></v-text-field>
    <br/>
</div>
</template>

<script>
export default {
    props: {
        movable: {
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
            this.$store.dispatch('movable/delete',id);
        }
        }
}
</script>

<style scoped>
</style>

