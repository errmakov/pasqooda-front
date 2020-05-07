<template>
  <div>

                    
                     <v-row no-gutters>
                      <v-col cols="8" class="pr-10">
                        <p>Лица, перед которыми у вас есть задолженность *</p>
                        <v-radio-group v-model="registration.creditor[1].credit_type" name="creditor['credit_type'][]" row>
                          <v-radio label="Физлицо" value="private"></v-radio>
                          <v-radio label="Юрлицо"  value="le"></v-radio>
                        </v-radio-group>

                        <div v-if="registration.creditor[1].credit_type === 'le'">
                          <v-text-field label="Название организации" v-model="registration.creditor[1].credit_name" name="creditor['credit_name'][]"></v-text-field>
                        </div>
                        <div v-if="registration.creditor[1].credit_type === 'private'">
                          <v-text-field label="Фамилия имя отчество" v-model="registration.creditor[1].credit_name" name="creditor['credit_name'][]"></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="Адрес" v-model="registration.creditor[1].credit_address" name="creditor['credit_address'][]"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="Телефон" v-model="registration.creditor[1].credit_phone" name="creditor['credit_phone'][]"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="E-mail" v-model="registration.creditor[1].credit_email" name="creditor['credit_email'][]"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="Сумма основного долга" v-model="registration.creditor[1].credit_credit" name="creditor['credit_credit'][]"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="Сумма процентов" v-model="registration.creditor[1].credit_interest" name="creditor['credit_interest'][]"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field label="Сумма штрафов" v-model="registration.creditor[1].credit_penalty" name="creditor['credit_penalty'][]"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="8" class="pr-10">
                        <v-text-field label="Документ по которму возникла задолженность" v-model="registration.creditor[1].credit_document"   name="creditor['credit_document'][]"></v-text-field>
                      </v-col>
                    </v-row>
                    
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    props: {
        PropCheckStep: {type: Function},
    },
    methods: {
        checkStep() {
            return this.PropCheckStep();
        }
    },
    computed: mapState({
        registration: 'registration',
        step: 'step'
    })
    
}
</script>

<style>

</style>