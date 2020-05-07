<template>
  <div>
  <v-stepper-step :step="step" :complete="step > 1">Контактные данные</v-stepper-step>
            <v-stepper-content step="1">
                <b>Как вас зовут</b>
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" sm="4" class="pr-10">
                        <v-text-field label="Фамилия *" @change="v=>{updateRegData('contact_name_second', v)}" @click="checkStep(1)" v-model="registration.contact_name_second" name="contact_name_second" required :rules="[rulesContactNameSecond]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" class="pr-10">
                        <v-text-field label="Имя *" @change="v=>{updateRegData('contact_name_name', v)}" v-model="registration.contact_name_name" name="contact_name_name" required :rules="[rulesContactNameFirst]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-text-field label="Отчество" @change="v=>{updateRegData('contact_name_middle', v)}"  v-model="registration.contact_name_middle" name="contact_name_middle"></v-text-field>
                    </v-col>
                </v-row>
                <b>Паспорт</b>
                <v-row no-gutters  class="mb-10">
                    <v-col cols="12" sm="3" class="pr-10">
                        <v-text-field label="Серия и номер *" v-model="registration.pass_number" name="pass_number" required :rules="[rulesPassNumber]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" class="pr-10">
                        <v-text-field label="Кем выдан *" v-model="registration.pass_emitter" name="pass_emitter"  required :rules="[rulesPassEmitter]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" class="pr-10">
                        <v-menu :close-on-content-click="false" v-model="registration.pass_date_menu" transition="scale-transition" offset-y  :nudge-right="40" max-width="290px" min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field  v-on="on" label="Дата выдачи *" v-model="registration.pass_date" prepend-icon="mdi-calendar" readonly required :rules="[rulesPassDate]"></v-text-field>
                            </template>
                            <v-date-picker v-model="registration.pass_date" no-title scrollable actions @input="registration.pass_date_menu = false" locale="ru-ru">
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-text-field label="Адрес регистрации *" v-model="registration.regadress" name="regadress" required :rules="[rulesRegAdress]"></v-text-field>
                    </v-col>
                </v-row>
                <b>Для оперативной связи</b>
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" sm="6" class="pr-10">
                        <v-text-field label="Номер телефона *" v-model="registration.contact_phone" name="contact_phone" required :rules="[rulesContactPhone]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="pr-10">
                        <v-text-field label="E-mail" v-model="registration.contact_email" name="contact_email"></v-text-field>
                    </v-col>
                </v-row>
                <v-btn color="primary" :disabled="!checkStep(1)">Далее</v-btn>
            </v-stepper-content>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
export default {
    props: {
        PropCheckStep: {type: Function},
        PropRegData: {type: Object, required: true}
    },
    methods: {
        updateRegData(name, value) {
            this.$store.dispatch('updateRegistration', {param: name, value: value})
        },
        checkStep(step) {
            return this.PropCheckStep(step);
        },
        rulesContactNameSecond(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'contact_name_second'});
                return 'Укажите фамилию';
            } else if (value.length<2) {
                this.$store.dispatch('pushError', {step: 0, name: 'contact_name_second'});
                return '2 знака минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'contact_name_second'})
                return true;
            }
        },
        rulesContactNameFirst(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'contact_name_name'});
                return 'Укажите имя';
            } else if (value.length<2) {
                this.$store.dispatch('pushError', {step: 0, name: 'contact_name_name'});
                return '2 знака минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'contact_name_name'})
                return true;
            }
        },
        rulesPassEmitter(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_emitter'})
                return 'Укажите кем выдан паспорт';
            } else if (value.length<10) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_emitter'})
                return '10 зн. минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'pass_emitter'})
                return true;
            }
        },
        rulesPassNumber(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_number'})
                return 'Укажите номер и серию паспорта';
            } else if (value.length<10) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_number'})
                return '10 зн. минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'pass_number'})
                return true;
            }
        },
        rulesPassDate(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_date'})
                return 'Укажите дату выдачи паспорта';
            } else if (value.length<10) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_date'})
                return '10 знаков';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'pass_date'})
                return true;
            }
        },
        rulesRegAdress(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_regadress'})
                return 'Укажите адрес регистрации';
            } else if (value.length<10) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_regadress'})
                return '5 знаков минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'pass_regadress'})
                return true;
            }
        },
        rulesContactPhone(value) {
            if (!value) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_contact_phone'})
                return 'Укажите телефон';
            } else if (value.length<10) {
                this.$store.dispatch('pushError', {step: 0, name: 'pass_contact_phone'})
                return '10 знаков минимум';
            } else {
                this.$store.dispatch('popError', {step: 0, name: 'pass_contact_phone'})
                return true;
            }
        }
    },
    computed: {
        ...mapState(['creditor_count', 'registration', 'step']),
        ...mapGetters(['getStep', 'getRegistration']),
        ...mapActions(['updateRegistration'])
    }
        
    
}
</script>

<style>

</style>