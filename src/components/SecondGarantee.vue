<template>
  <div id="SecondGarantee">
    <div
      class="container-fluid"
      style="background-color: #f5f5f5; height: 100vh"
      ref="mainContainer"
    >
      <header
        class="row pt-3 px-3 pb-2 mainHeader"
        style="background-color: #ffffff; margin-bottom: 1%"
        ref="headerProject"
      >
        <div class="col-1 col-md-1 p-0" style="min-width: 5em">
          <img class="logo" src="../svg/logo_bg.svg" style="width: 100%" />
        </div>
        <div class="col-12 col-md pl-3 pr-0 headerName">
          <div class="h1" style="line-height: 0.6">Банковские гарантии</div>
        </div>
        <div class="col-2 d-flex justify-content-end p-0">
          <a
            class="prev-button mr-1 btn btn-md btn-default  d-md-block d-none"
            @click="arrowPrev"
          ></a>
          <a
            class="next-button btn btn-md btn-default d-md-block d-none "
            @click="arrowNext"
          >
          </a>
        </div>
      </header>

      <main
        class="ml-1 mr-1 d-flex flex-column justify-content-between"
        style="min-height: 83.5%"
        ref="allStatistic"
      >
        <section class="row h5">
          <div class="col-0 col-md-3"></div>
          <div class="col">
            На текущий день
          </div>
          <div class="col">
            Динамика месяца
          </div>
          <div class="col">
            Доля рынка
          </div>
        </section>

        <section class="row white flex-fill" ref="oneOfTwoRow">
          <div class="col-12 col-md-3 cell h5 text-uppercase description" style="font-weight: normal">
            Объем <strong>портфеля</strong>
          </div>

          <div class="col cell first_cell">
            <div class="row">
              <div class="col bigDigits">17.8 <span class="h5">млрд</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                32%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                104%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text_center">за год</small>
            </div>
          </div>

          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">1.1 <span class="h5">млрд</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                85%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                406%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text_center">за год</small>
            </div>
          </div>
          <div class="col cell manyText">
            <div class="row">
              <div class="col bigDigits">2.9%</div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col increase2 h5">
                192%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                4%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col"
                >наша доля
                <p class="m-0">за год</p></small
              >
              <small class="text-uppercase col text_center"
                >рынок
                <p class="m-0">за год</p></small
              >
            </div>
          </div>
        </section>

        <section class="row white flex-fill mt-2 mb-2" ref="twoOfTwoRow">
          <div class="col-12 col-md-3 cell h5 text-uppercase description" style="font-weight: normal;">
            Количество <strong>сделок</strong>
          </div>

          <div class="col cell first_cell">
            <div class="row">
              <div class="col bigDigits">18.1 <span class="h5">млрд</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                16%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                46%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text_center">за год</small>
            </div>
          </div>

          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">2.3 <span class="h5">тыс</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                13%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                13%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text_center">за год</small>
            </div>
          </div>
          <div class="col cell manyText">
            <div class="row">
              <div class="col bigDigits">15.6%</div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                21%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5 text_center">
                68%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small
                class="text-uppercase col __listner__"
                ref="absoluteHeightListner"
                >наша доля
                <p class="m-0">за год</p></small
              >
              <small class="text-uppercase col text_center"
                >рынок
                <p class="m-0">за год</p></small
              >
            </div>
          </div>
        </section>

        <section class="row white flex-fill">
          <div class="col-12 col-md-3 cell h5 text-uppercase description" style="font-weight: normal;">
            Сделки по <strong>новым клиентам</strong>
          </div>
          <div class="col cell first_cell">
            <div class="row">
              <div class="col bigDigits">
                14.4 <span class="h5" style="display: inline;">тыс</span>
              </div>
            </div>
          </div>
          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">
                0.7 <span class="h5" style="display: inline;"></span>
              </div>
            </div>
          </div>
          <div class="col cell"></div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { resizeFunc } from '../mixins/resizeFunc'

export default {
  name: 'SecondGarantee',
  mixins: [resizeFunc],
  data() {
    return {
      elemID: 1,
      sumHeight: '100vh',
      comissions: [
        { label: 'Сегодня', value: 1098754 },
        { label: 'Вчера', value: 257272 },
        { label: 'Неделю назад', value: 1402503 },
        { label: 'Год назад', value: 2974769 },
      ],
      sdelki: [
        { value: 70, avg_cheque: '' },
        { value: 2, avg_cheque: '' },
      ],
      rest: [{ value: 2 }, { value: 10 }],
    };
  },
  methods: {
    arrowPrev() {
      this.$emit('arrowClick', 'prev');
    },
    arrowNext() {
      this.$emit('arrowClick', 'next');
    },
    handleResize: function() { //  allStatistic headerProject
      this.resizeCount('mainContainer', 'allStatistic', 'headerProject')
    },
  },
  computed: {
    comissionsWithoutFirst() {
      return this.comissions.filter((e) => this.comissions.indexOf(e) > 0);
    },
  },
};
</script>

<style></style>
