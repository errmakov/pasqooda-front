<template>
  <v-stepper v-model="step" vertical>
    <v-form action="https://postman-echo.com/post" method="post" id="form_bankruptcy" @submit.prevent="formSubmit">
            <formStep1 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState"/>
            <formStep2 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep3 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep4 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep5 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <br/><br/>
            <p>
            Loading: {{loading}}<br/><br/>
            Errors: {{errors}} <br/><br/>
            Registration: {{registration}}<br/><br/> Creditors:{{creditors}}<br/><br/>Penalties: {{penalties}}<br/><br/>Taxes: {{taxes}}<br/><br/>
            Realty: {{estates}}<br/><br/>
            Movable: {{properties}}<br/><br/>
            Debitors: {{debitors}}<br/><br/>
            </p>
        </v-form>
        <dialogSuccess ref="dialogSuccess"/>
    </v-stepper>
</template>

<script>
import formStep1 from '@/components/home/formStep1.vue';
import formStep2 from '@/components/home/formStep2.vue';
import formStep3 from '@/components/home/formStep3.vue';
import formStep4 from '@/components/home/formStep4.vue';
import formStep5 from '@/components/home/formStep5.vue';
import dialogSuccess from '@/components/home/dialogSuccess.vue';
import {mapState, mapGetters} from "vuex";
import axios from "axios";

export default {
    components: {
        formStep1,
        formStep2,
        formStep3,
        formStep4,
        formStep5,
        dialogSuccess
    },
    data() {
        return {
            reactData: null
            //visibleSuccess: this.isVisibleSuccess()
        }
    },
    methods: {
        updateState() {
            this.$store.dispatch('updateState');
        },
        setStep(step) {
            this.$store.dispatch('setStep',step);
        },
        checkStep(s) {
            s = s - 1;
            let noErrors = true;
            for (let i in this.errors) {
                if (this.errors[i].step == s) {
                    noErrors = false;
                }
            }
            return noErrors;
        },
        formSubmit() {
            console.log('submitted');
            this.$recaptcha('register')
            .then((token)=>{
                console.log('Got the token');
                let postData = {
                    registration: this.registration,
                    creditors: this.creditors,
                    debitors: this.debitors,
                    penalties: this.penalties,
                    taxes: this.taxes,
                    realty: this.estates,
                    movable: this.properties,
                    timestamp: Date.now(),
                    recaptchaToken: token
                };
                this.$store.dispatch('setLoading', 1);
                this.$refs.dialogSuccess.visible = true; // ready to show success dialog
                axios.post(this.appConfig.apiUrl + '/user/add', postData)
                .then((response)=>{
                    this.$store.dispatch('setLoading', 2);
                    console.log(response.data)
                })
                .catch((err)=>{
                    this.$store.dispatch('setLoading', null);
                    console.log('Something wrong: ', err)
                    //кинуть нотис в буфер нотисов
                })
            })
            .catch((err)=>{
                console.log('Token err:', err);
                //прокинуть на роут 500err
            })
            
            
        }
    },
    computed: {
        ...mapState(['creditor_count', 'registration','step', 'loading']),
        ...mapState('creditor',['creditors']),
        ...mapState('debitor',['debitors']),
        ...mapState('penalty',['penalties']),
        ...mapState('tax',['taxes']),
        ...mapState('realty',['estates']),
        ...mapState('movable',['properties']),
        ...mapState('error',['errors']),
        ...mapGetters(
            'creditor', ['getLength']
        ),
       
        
    }
}
</script>

<style>

</style>