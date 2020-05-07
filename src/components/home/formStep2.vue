<template>
    <div>
        <v-stepper-step step="2" :complete="step > 2" :PropCheckStep="checkStep">Кредиторы</v-stepper-step>
        <v-stepper-content step="2">
            <div v-if="creditor_count <5">
                <v-btn color="primary" fab x-small elevation="0" @click.native="creditor_count++"><v-icon dark>mdi-plus</v-icon></v-btn> еще кредиторы
            </div>
            <br/><br/>
            <v-btn color="primary" @click.native="step = 1">Предыдущий шаг</v-btn> <v-btn color="primary" @click.native="step = 3" :disabled="!checkStep(2)">Далее</v-btn>
            <v-btn color="primary" @click.native="checkStep">Call method in porps</v-btn> 
        </v-stepper-content>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
export default {
    props: {
        PropCheckStep: {type: Function},
    },
    methods: {
        checkStep() {
            return this.PropCheckStep();
        }
    },
    computed: {
        localComputed() {
            return true;
        },
        ...mapState(
            [
                'creditor_count',
                'registration',
                'step'
            ]
        ),
        ...mapGetters(
            [
                'getStep'
            ]
        )
    }
    
}
</script>

<style>

</style>