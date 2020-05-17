<template>
 <div> 
  <v-row justify="center">
    <v-dialog v-model="isVisibleSuccess" persistent max-width="290">
      
      <v-card>
        <v-card-title class="headline">Успешный успех!</v-card-title>
        
        <v-card-text>Мы уже занимаемся вашим запросом, <span v-if="registration.contact_email!==null"> проверьте почту <b>{{registration.contact_email}}</b> через несколько минут и</span> ждите звонка на номер <b>{{registration.contact_phone}}</b>.
        </v-card-text>
        
        <v-card-actions class="justify-center">
          <v-btn color="blue darken-1" text @click.stop="resetSuccess">Я рад!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <p>foobar from success<br/>isVisibleSuccess: {{isVisibleSuccess}} <br/>visible: {{visible}}</p> 
</div>
</template>


<script>
import {mapState} from "vuex";
export default {
    data() {
        return {
            visible: true
        }
    },
    methods: {
        resetSuccess() {
            this.visible = false;
        }
    },
    computed: {
        ...mapState(['loading', 'registration']),
        myComputed() {
            return true;
        },
        isVisibleSuccess() {
            if ((this.loading == 2) && (this.visible == true)) {
                return true;
            } else {
                return false;
            }
        }
    
    }

}
</script>

<style>

</style>