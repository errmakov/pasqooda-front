<template>
    <v-col cols="6">
        <v-card  flat class="py-2 px-2 mb-4 mr-4" height="90%">
            <v-card-title>{{title}}</v-card-title>
            <v-card-text>{{message}}</v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Foo'
        },
        message: {
            type: String,
            required: true,
            default: 'Bar'
        }
    }
}
</script>

<style>

</style>