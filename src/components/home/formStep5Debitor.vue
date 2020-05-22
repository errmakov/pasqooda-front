<template>
  <div>               
                     <v-row no-gutters>
                      <v-col cols="8" class="pr-10">
                        <p>Должник №{{serialNumber}} <v-btn v-if="serialNumber>1" fab elevation="0" x-small color="primary" @click.native="deleteDebitor(debitor.id)"><v-icon dark>mdi-minus</v-icon></v-btn></p>
                        <v-radio-group row v-model="debitor.legalForm" @change="updateState" >
                        <v-row>
                          <v-col cols="12" sm="5" md="3">
                            <v-radio label="Физлицо" value="private"></v-radio>
                          </v-col>
                          <v-col cols="12" sm="5" md="3">
                            <v-radio label="Юрлицо"  value="legal"></v-radio>
                          </v-col>
                        </v-row>
                        </v-radio-group>
                        <div v-if="debitor.legalForm=='legal'">
                          <v-text-field @change="updateState" label="Название организации"  v-model="debitor.name"></v-text-field>
                        </div>
                        <div v-if="debitor.legalForm=='private'">
                          <v-text-field @change="updateState" label="Фамилия имя отчество" v-model="debitor.name"></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="Адрес" v-model="debitor.address"></v-text-field>
                      </v-col>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="Телефон" v-model="debitor.phone"></v-text-field>
                      </v-col>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="E-mail" v-model="debitor.email"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="Сумма основного долга" v-model="debitor.credit"></v-text-field>
                      </v-col>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="Сумма процентов" v-model="debitor.interest"></v-text-field>
                      </v-col>
                      <v-col cols="12"   sm="6" md="4"  class="pr-10">
                        <v-text-field @change="updateState" label="Сумма штрафов" v-model="debitor.penalties"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12" sm="8" class="pr-10">
                        <v-text-field @change="updateState" label="Документ по которому возникла задолженность (название, номер, дата если есть)" v-model="debitor.document"></v-text-field>
                      </v-col>
                    </v-row>
                    
  </div>
</template>

<script>
export default {
    props: {
      debitor: {
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
        this.$emit('updateState');
      },
      deleteDebitor(id) {
        this.$store.dispatch('debitor/delete',id);
      }
    }    
}
</script>

<style>

</style>