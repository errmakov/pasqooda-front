<template>
    <div>
        <v-stepper-step step="2" :complete="step > 2">Кредиторы</v-stepper-step>
        <v-stepper-content step="2">
        <p>Лица, перед которыми у вас есть задолженность *</p>
            <ul>
                <li v-for="(cred, i) in creditor.creditors" :key="cred.id">
                    <creditorItem :creditor="cred" :serialNumber="i+1" @updateState="updateState"/>
                </li>
            </ul>
            <div v-if="getLength < 5">
                <v-btn color="primary" fab x-small elevation="0" @click.native="addCreditor"><v-icon dark>mdi-plus</v-icon></v-btn> еще кредиторы
            </div>
            <br/><br/>
            <v-btn color="primary" @click.native="propSetStep(1)">Предыдущий шаг</v-btn> <v-btn color="primary" @click.native="propSetStep(3)" :disabled="!propCheckStep(2)">Далее</v-btn>
        
        </v-stepper-content>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import creditorItem from '@/components/home/formStep2Creditor.vue';
export default {
    props: {
        propCheckStep: {type: Function},
        propSetStep: {type: Function},
    },
    components: {
        creditorItem
    },
    methods: {
        updateState() {
            this.$emit('updateState');
        },
        addCreditor() {
            this.$store.dispatch('creditor/add');
        }
    },  
    computed: {
        ...mapState(
            ['creditor_count', 'registration', 'step', 'creditor']
        ),
        ...mapGetters(
             'creditor', ['getLength']
        )
    }
    
}
</script>

<style scoped>
ul li {
    list-style:none;
    padding:0;
    margin:0;
}
</style>