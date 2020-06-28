<template>
    <div>
        <v-stepper-step step="5" :complete="step > 5">Кто должен вам</v-stepper-step>
        <v-stepper-content step="5">
        <p><b>Есть ли у вас должники?</b></p>
                 <v-radio-group @change="updateState" v-model="registration.hasDebitors" row required :rules="[rulesDebitors]">
                    <v-radio label="Да" value="yes"></v-radio>
                    <v-radio label="Нет"  value="no"></v-radio>
                </v-radio-group>
            <ul v-if="registration.hasDebitors=='yes'">
                <li v-for="(deb, i) in debitor.debitors" :key="deb.id">
                    <debitorItem :debitor="deb" :serialNumber="i+1" @updateState="updateState"/>
                </li>
            </ul>
            <div v-if="(getLength) < 5 && (registration.hasDebitors == 'yes')">
           

                <v-btn color="primary" fab x-small elevation="0" @click.native="addDebitor"><v-icon dark>mdi-plus</v-icon></v-btn> еще должники
            </div>
            <br/><br/>
            <div v-if="(loading == null)">
             <v-row>
                    <v-col cols="12" sm="5" md="3">
                        <v-btn color="primary" @click.native="propSetStep(4)">Предыдущий шаг</v-btn>
                    </v-col>
                    <v-col cols="12" sm="4" md="3">
                        <v-btn color="primary" type="submit" :disabled="!propCheckStep(5)">Отправить</v-btn>
                    </v-col>
            </v-row>
                 
            </div>
            <div v-if="(loading == 1)">
                <v-progress-circular indeterminate color="primary" size="64" width="6"></v-progress-circular>
            </div>
            <div v-if="(loading == 2)">
                <v-row>
                    <v-col cols="12" sm="5" md="3">
                        <v-btn color="primary" @click.native="restartForm">Заполнить форму еще раз</v-btn>
                    </v-col>
                    <v-col cols="12" sm="4" md="3">
                        <v-btn color="primary" @click="doCheckout()">Оплатить 300р сейчас</v-btn>
                    </v-col>
            </v-row>
            </div>
            <div v-if="(loading == 3)">
                <v-row>
                    <v-col cols="12" sm="5" md="3">
                        <v-btn color="primary" @click.native="restartForm">Заполнить форму еще раз</v-btn>
                    </v-col>
                    
            </v-row>
            </div>
        
        </v-stepper-content>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import debitorItem from '@/components/home/formStep5Debitor.vue';
export default {
    props: {
        propCheckStep: {type: Function},
        propSetStep: {type: Function},
    },
    components: {
        debitorItem
    },
    methods: {
        restartForm() {
            this.propSetStep(1); 
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
            this.$store.dispatch('setLoading', null);
            
        },
        doCheckout() {
            window.location = this.payment.paylink;
        },
        updateState() {
            this.$emit('updateState');
        },
        addDebitor() {
            this.$store.dispatch('debitor/add');
        },
        rulesDebitors(value) {
            if (!value) {
                this.$store.dispatch('error/add', {step: 4, name: 'debitors'});
                return 'Нужно выбрать';
            } else {
                this.$store.dispatch('error/delete', {step: 4, name: 'debitors'});
                return true;
            }
        }
    },  
    computed: {
        ...mapState(
            ['registration', 'step', 'debitor', 'loading', 'payment']
        ),
        ...mapGetters(
             'debitor', ['getLength']
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