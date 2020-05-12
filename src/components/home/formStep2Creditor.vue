<template>
  <div>               
                     <v-row no-gutters>
                      <v-col cols="8" class="pr-10">
                        <p>Кредитор №{{serialNumber}} {{creditor.id}}<v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deleteCreditor(creditor.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
                        <v-radio-group required :rules="[rulesLegalForm]" row v-model="creditor.legalForm" @change="updateState" >
                          <v-radio id="p"  label="Физлицо" value="private"></v-radio>
                          <v-radio id="l" label="Юрлицо"  value="legal"></v-radio>
                        </v-radio-group>
                        <div v-show="creditor.legalForm=='legal'">
                          <v-text-field required :rules="[rulesCreditorName]" @change="updateState" label="Название организации *"  v-model="creditor.name"></v-text-field>
                        </div>
                        <div v-show="creditor.legalForm=='private'">
                          <v-text-field  required :rules="[rulesCreditorName]" @change="updateState" label="Фамилия имя отчество *" v-model="creditor.name"></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" class="pr-10">
                        <v-text-field @change="updateState" label="Адрес" v-model="creditor.address"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field required :rules="[rulesCreditorPhone]" @change="updateState" label="Телефон *" v-model="creditor.phone"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field @change="updateState" label="E-mail" v-model="creditor.email"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" class="pr-10">
                        <v-text-field @change="updateState" label="Сумма основного долга" v-model="creditor.credit"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field @change="updateState" label="Сумма процентов" v-model="creditor.interest"></v-text-field>
                      </v-col>
                      <v-col cols="4" class="pr-10">
                        <v-text-field @change="updateState" label="Сумма штрафов" v-model="creditor.penalties"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="8" class="pr-10">
                        <v-text-field @change="updateState" label="Документ по которому возникла задолженность" v-model="creditor.document"></v-text-field>
                      </v-col>
                    </v-row>
                    
  </div>
</template>

<script>
export default {
    props: {
      creditor: {
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
        console.log('updateState emitted');
        this.$emit('updateState');
      },
      deleteCreditor(id) {
        console.log('Going deleteCreditor conponents: ', id)
        this.$store.dispatch('creditor/delete',id);
        this.$store.dispatch('popAllErrorsByID', {step: 1, id: this.$props.creditor.id});
      },
      rulesLegalForm(value) {
        if (!value) {
          this.$store.dispatch('pushError', {step: 1, name: 'creditorLegalForm_' + this.$props.creditor.id});
          return 'Нужно выбрать';
        } else {
          this.$store.dispatch('popError', {step: 1, name: 'creditorLegalForm_' + this.$props.creditor.id});
          return true;
        }
      },
      rulesCreditorName(value) {
        if (!value) {
          this.$store.dispatch('pushError', {step: 1, name: 'creditorName_' + this.$props.creditor.id});
          return 'Укажите кредитора';
        } else if (value.length < 5) {
          this.$store.dispatch('pushError', {step: 1, name: 'creditorName_' + this.$props.creditor.id});
          return '5 знаков минимум';
        } else {
          this.$store.dispatch('popError', {step: 1, name: 'creditorName_' + this.$props.creditor.id});
          return true;
        }
      },
      rulesCreditorPhone(value) {
        if (!value) {
          this.$store.dispatch('pushError', {step: 1, name: 'creditorPhone_' + this.$props.creditor.id});
          return 'Укажите телефон';
        } else if (value.length < 5) {
          this.$store.dispatch('pushError', {step: 1, name: 'creditorPhone_' + this.$props.creditor.id});
          return '5 знаков минимум';
        } else {
          this.$store.dispatch('popError', {step: 1, name: 'creditorPhone_' + this.$props.creditor.id});
          return true;
        }
      }
    }    
}
</script>

<style>

</style>