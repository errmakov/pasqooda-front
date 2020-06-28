<template>
  <div>
  <div v-if="(paystatus == 0)">
    <h1>Выясняем статус вашей оплаты</h1>
  </div>
  <div v-if="(paystatus == 1)">
    <h1>Оплата прошла успешно!</h1>
    <p>Вот ваше заявление: <a :href="downloadLink">заявление.pdf</a></p>
    <p  v-if="registration.contact_email">Мы также отправили заявление на вашу почту {{registration.contact_email}}.</p>
  </div>
  <div v-if="(paystatus == 2)">
    <h1>Оплата еще не прошла</h1>
    <p>Если вы уже оплачивали, то, вероятно, нужно немного подождать. Подождите и обновите страницу.</p>
    <p>Убедитесь, что деньги списались с вашей карты или кошелька. Если нет - то, возможно, произошла ошибка в момент оплаты и оплату нужно повторить. Ссылка на оплату у вас на почте.</p>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
export default {

  data() {
    return {
      paystatus: 0, // 0 - status undefined yet  1 - status defined  2 - status pending
      userid: null
            
    }
  },
  mounted() {
    let postData = {payid: this.payment.payid};
    axios.post(this.appConfig.apiUrl + '/checkout/status', postData)
    .then((response)=>{
      
      this.userid = response.data.message.userid;
      if ((response.data.res !== 'OK') || (response.data.message.status !== 'succeeded')) {
        this.paystatus = 2;
      } else {
        this.paystatus = 1;
      }
      
    })
    .catch((err)=>{
      console.log('Something wrong: ', err);
      this.$store.dispatch('notice/add', {type: 'error', message: 'Мы не смогли получить статус платежа. Перезагрузите страницу чуть позже.'}, {root: true});
    })
  },
  methods: {
    
  },
  computed: {
    downloadLink () {
      return this.appConfig.apiUrl + '/download/' + this.userid + '.pdf';
    },
    ...mapState(
            ['loading', 'payment', 'registration']
    ),
  }
};
</script>

<style></style>
