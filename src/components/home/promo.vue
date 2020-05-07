<template>
  <v-card class="py-10 pl-10 pr-10 mb-10 blue white--text" flat>
                <v-row no-gutters>
                  <v-col cols="12" sm="8" class="pr-10">

                   <h1>Банкротство&nbsp;&mdash; это очищение</h1>
                   <br/>
                   <p>Legal-tech стартап &laquo;Паскуда Лигал&raquo;&nbsp;&mdash; это авторитетные юристы и&nbsp;адвокаты вооруженные технологиями искусственного интеллекта и&nbsp;глубокого машинного обучения, которые специализируются на&nbsp;банкротстве физических лиц.</p>

                   <p>Мигрени, депрессия, выпадение волос, эректильная дисфункция и&nbsp;гемморой&nbsp;&mdash; все это в&nbsp;прошлом, стоит лишь начать процедуру банкроства. Мы&nbsp;не&nbsp;обещаем вам золотых гор и&nbsp;фарта, и&nbsp;ваш брак, конечно, не&nbsp;восстановить, а&nbsp;дети будут вас ненавидеть, но&nbsp;защититься от&nbsp;преследования кредиторов и&nbsp;обрести душевное спокойствие и&nbsp;избавление от&nbsp;психосоматических болезней&nbsp;&mdash; вполне реально.</p>

                   <p>&laquo;Каждый человек, заслуживает второго шанса!&raquo;&nbsp;&mdash; именно эту фразу предложили закрепить в&nbsp;конституции представители &laquo;Паскуда Лигал&raquo; при обсуждении поправок.</p>

                   <p>Начни с&nbsp;чистого листа, просто заполни форму!</p>

                  </v-col>
                  <v-col cols="12" sm="4">

                    <v-row no-gutters  fill-height>
                      <factoid v-bind:key="factoid.title" v-for="factoid in factoids" :title="factoid.title" :message="factoid.message"/>
                    </v-row>

                  </v-col>

                </v-row>
              </v-card>
</template>

<script>
import factoid from '@/components/home/factoid.vue';
export default {
  components: {
    factoid
  },
  data() {
        return {
            factoids: [
                {
                    title:'35 лет',
                    message: 'Общий опыт юридической практики наших специалистов'
                },
                {
                    title:'$1488 млн.',
                    message: 'Долгов простили нашим клиентам'
                },
                {
                    title:'4 месяца',
                    message: 'Средний срок дела'
                },
                {
                    title:'9.5 / 10',
                    message: 'Средняя оценка качества сервиса от наших клиентов'
                }
            ]
        }
    }
}
</script>

<style>

</style>