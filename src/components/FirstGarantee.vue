<template>
  <div id="FirstGarantee">
    <div
      class="container-fluid"
      style="background-color: #f5f5f5"
      ref="mainContainer"
    >
      <!-- <button style="height: 100px; width: 100px">{{}}</button> -->
      <div
        class="row mb-2 pt-3 pl-3 pr-3 pb-2"
        style="background-color: #ffffff"
      >
        <div class="col-1 p-0" style="min-width: 5em">
          <img class="logo" src="../svg/logo_bg.svg" style="width: 100%" />
        </div>
        <div class="col pl-3">
          <div class="h1" style="line-height: 0.6">Банковские гарантии</div>
        </div>
        <div class="col-3 col-sm-2 d-flex justify-content-end">
          <a class="prev-button mr-1" @click="arrowPrev"></a>
          <a class="next-button" @click="arrowNext"> </a>
        </div>
      </div>

      <div class="row m-1" style="height: calc(100vh - 2.5em - 2em)">
        <div
          class="col-8 mr-2 pb-2 d-flex flex-column justify-content-between"
          style="background-color: #ffffff; border-radius: 20px"
          ref="comissionStatistic"
        >
          <div class="row pt-1 h5 m-0">
            Комиссия
          </div>

          <div class="row">
            <div class="col-3 my-auto text-uppercase">Сегодня</div>
            <div class="col bigDigits mb-2 d-flex justify-content-end">
              {{ comissions[0].value.toLocaleString('ru-RU') }} ₽
            </div>
          </div>
          <div class="row">
            <div class="col progress p-0 ml-2 mr-2">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>

          <div
            v-for="comission in comissionsWithoutFirst"
            :key="comission.value"
          >
            <div class="row text-uppercase">
              <div class="col-4 my-auto">{{ comission.label }}</div>
              <div class="col h2 d-flex justify-content-end my-auto">
                {{ comission.value.toLocaleString('ru-RU') }} ₽
              </div>
            </div>
            <div class="row">
              <div class="col progress p-0 ml-2 mr-2">
                <div class="progress-bar" style="width: 35%"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col pb-2 d-flex flex-column justify-content-between radiusBorder"
          style="
            background-color: #ffffff;
            border-radius: 20px;
            padding-left: 2.25rem;
          "
          ref="allDeal"
        >
          <div class="row pt-1 h5 mb-1">Все сделки</div>
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

          <div class="row h5">Новые сделки</div>
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

          <div class="row h5">Заявки в работе</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BCard } from "bootstrap-vue";

export default {
  name: 'FirstGarantee',
  data() {
    return {
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
      sumHeight: [],
      headHeight: 310,
    };
  },
  methods: {
    arrowPrev() {
      this.$emit('arrowClick', 'prev');
    },
    arrowNext() {
      this.$emit('arrowClick', 'next');
    },
    handleResize: function () {
      // console.log(e.currentTarget.innerHeight, e.currentTarget.innerWidth);
      console.log(
        this.$refs.comissionStatistic.clientHeight,
        this.$refs.allDeal.clientHeight,
      );
      // console.log(e.target.querySelectorAll('.d-flex'));
    },
    handleResize2: function ({ height }) {
      this.sumHeight[1] = height;
      this.$emit(
        'handleResize',
        this.headHeight + this.sumHeight[0] + this.sumHeight[1],
      );
    },
  },
  computed: {
    comissionsWithoutFirst() {
      return this.comissions.filter((e) => this.comissions.indexOf(e) > 0);
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
div.col.progress {
  border-radius: 20px;
}

.second-column {
  display: grid;
}
</style>
