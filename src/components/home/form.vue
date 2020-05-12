<template>
  <v-stepper v-model="step" vertical>
    <v-form action="https://postman-echo.com/post" method="post" id="form_bankruptcy">
            <formStep1 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState"/>
            <formStep2 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep3 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep4 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <formStep5 :propCheckStep="checkStep"  :propSetStep="setStep" @updateState="updateState" />
            <br/><br/>
            <p>Registration: {{registration}}<br/><br/> Creditors:{{creditors}}<br/><br/>Penalties: {{penalties}}<br/><br/>Taxes: {{taxes}}<br/><br/>
            Realty: {{estates}}<br/><br/>
            Movable: {{properties}}<br/><br/>
            Debitors: {{debitors}}<br/><br/>
            Awesome: {{errors}} <br/></p>
        </v-form>
    </v-stepper>
</template>

<script>
import formStep1 from '@/components/home/formStep1.vue';
import formStep2 from '@/components/home/formStep2.vue';
import formStep3 from '@/components/home/formStep3.vue';
import formStep4 from '@/components/home/formStep4.vue';
import formStep5 from '@/components/home/formStep5.vue';
import {mapState, mapGetters} from "vuex";
export default {
    components: {
        formStep1,
        formStep2,
        formStep3,
        formStep4,
        formStep5,
    },
    data() {
        return {
            is_form_valid: true
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
            let ers = s - 1;
            console.log('err step index: ', ers);
            console.log('err state 0: ', this.errors)
            console.log('err arr length: ', this.errors[ers].length);
            console.log('err state 1: ', this.errors)
            if ((s) && (this.errors[ers].length>0)) {
                return false;
            } else if ((s) && (this.errors[ers].length==0))  {
                return true;
            } else {
                return false;
            }
        }
    },
    computed: {
        ...mapState(['creditor_count', 'registration','step', 'errors']),
        ...mapState('creditor',['creditors']),
        ...mapState('debitor',['debitors']),
        ...mapState('penalty',['penalties']),
        ...mapState('tax',['taxes']),
        ...mapState('realty',['estates']),
        ...mapState('movable',['properties']),
        ...mapGetters(
            'creditor', ['getLength']
        )
    }
}
</script>

<style>

</style>