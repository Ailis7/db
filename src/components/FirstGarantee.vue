<template>
  <div id="FirstGarantee">
    <div
      class="container-fluid"
      style="background-color: #f5f5f5; height: 100vh"
      ref="mainContainer"
    >
      <!-- <button style="height: 100px; width: 100px">{{}}</button> -->
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

      <main class="row ml-1 mr-1 ">
        <section
          class="col-12 col-md-8 mr-2 pb-2 d-flex flex-column justify-content-between"
          style="background-color: #ffffff; border-radius: 20px"
          ref="comissionStatistic"
        >
          <div class="row pt-1 h5 m-0">Комиссия</div>

          <div class="row">
            <div class="col-3 col-md-3 cell text-uppercase">Сегодня</div>
            <div
              class="col bigDigits mb-2 d-flex justify-content-end"
              style="padding-right: 0.3rem"
            >
              {{ comissions[0].value.toLocaleString('ru-RU') }} ₽
            </div>
          </div>
          <div class="row">
            <div class="col progress p-0 ml-2 mr-2 mt-n2">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>

          <div
            v-for="comission in comissionsWithoutFirst"
            :key="comission.value"
          >
            <div class="row text-uppercase">
              <div class="col-5 col-md-4 cell">{{ comission.label }}</div>
              <div class="col h2 d-flex justify-content-end ml-auto">
                {{ comission.value.toLocaleString('ru-RU') }} ₽
              </div>
            </div>
            <div class="row">
              <div class="col progress p-0 ml-2 mr-2">
                <div class="progress-bar" style="width: 35%"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="col pb-2 d-flex flex-column justify-content-between radiusBorder"
          style="
            background-color: #ffffff;
            border-radius: 20px;
            padding-left: 1.25rem;
          "
          ref="allDeal"
        >
          <div class="row pt-1 h5 mb-1 deal_description">Все сделки</div>
          <div class="row">
            <div class="col">
              <div class="row bigDigits">{{ sdelki[0].value }}</div>
              <div class="row">
                <small class="text-uppercase">Количество</small>
              </div>
            </div>
            <div class="col">
              <div class="row bigDigits">16.1</div>
              <!-- {{ abbreviateNumber_num(sdelki[0].avg_cheque, 1) }} -->
              <div class="row">
                <small class="text-uppercase">
                  Средний чек (млрд)
                  <!-- {{ abbreviateNumber_title(sdelki[0].avg_cheque) }} -->
                </small>
              </div>
            </div>
          </div>

          <div class="row h5 deal_description">Новые сделки</div>
          <div class="row">
            <div class="col">
              <div class="row bigDigits">{{ sdelki[1].value }}</div>
              <div class="row">
                <small class="text-uppercase">Количество</small>
              </div>
            </div>
            <div class="col">
              <div class="row bigDigits">8.2</div>
              <!-- {{ abbreviateNumber_num(sdelki[1].avg_cheque, 1) }} -->
              <div class="row">
                <small class="text-uppercase">
                  Средний чек (тыс.)
                  <!-- {{ abbreviateNumber_title(sdelki[0].avg_cheque) }} -->
                </small>
              </div>
            </div>
          </div>

          <div class="row h5 deal_description">Заявки в работе</div>
          <div class="row">
            <div class="col">
              <div class="row bigDigits">{{ rest[0].value }}</div>
              <div class="row">
                <small class="text-uppercase">МРК</small>
              </div>
            </div>
            <div class="col">
              <div class="row bigDigits">{{ rest[1].value }}</div>
              <div class="row">
                <small class="text-uppercase"> Риски </small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { resizeFunc } from '../mixins/resizeFunc';

export default {
  name: 'FirstGarantee',
  mixins: [resizeFunc],
  data() {
    return {
      elemID: 0,
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
    handleResize: function() {
      this.resizeCount('mainContainer', 'headerProject', 'allDeal');
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
