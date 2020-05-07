<template>
  <v-stepper v-model="step" vertical>
    <v-form action="https://postman-echo.com/post" method="post" id="form_bankruptcy">
            <formStep1 :PropCheckStep="checkStep" :PropRegData="getRegistration"/>
            <formStep2 :PropCheckStep="checkStep"/>
            <br/><br/>
            <v-btn color="primary" type="submit" id="form_bankruptcy" :disabled="!checkStep(5)">Submit</v-btn>
            <br/><br/>
            <p>Come get some:{{registration}} awesome: {{errors}}</p>
        </v-form>
    </v-stepper>
</template>

<script>
import formStep1 from '@/components/home/formStep1.vue';
import formStep2 from '@/components/home/formStep2.vue';
import {mapState, mapGetters} from "vuex";
export default {
    components: {
        formStep1,
        formStep2
    },
    data() {
        return {
            is_form_valid: true
        }
    },
    methods: {
        checkStep(s) {
            let ers = s - 1;
            if ((s) && (this.errors[ers]>0)) {
                return false;
            } else if ((s) && (this.errors[ers]==0))  {
                return true;
            } else {
                return false;
            }
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
                'step',
                'errors'
            ]
        ),
        ...mapGetters(
            [
                'getStep',
                'getRegistration',
                'getErrors'
            ]
        )
    }
}
</script>

<style>

</style>