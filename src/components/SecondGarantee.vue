<template>
  <div id="SecondGarantee">
    <div
      class="container-fluid"
      style="background-color: #f5f5f5; min-height: 100vh"
      ref="mainContainer"
    >
      <div
        class="row pt-3 pl-3 pr-3 pb-2 mainHeader"
        style="background-color: #ffffff; min-height: 13.5%; margin-bottom: 1%"
        ref="headerProject"
      >
        <div class="col-1 col-md-1 p-0" style="min-width: 5em">
          <img class="logo" src="../svg/logo_bg.svg" style="width: 100%" />
        </div>
        <div class="col-12 col-md pl-3 pr-0 headerName">
          <div class="h1" style="line-height: 0.6">Банковские гарантии</div>
        </div>
        <div class="col-2 d-flex justify-content-end p-0">
          <a class="prev-button mr-1" @click="arrowPrev"></a>
          <a class="next-button" @click="arrowNext"> </a>
        </div>
      </div>

      <div
        class="ml-1 mr-1 d-flex flex-column justify-content-between"
        style="min-height: 83.5%"
        ref="allStatistic"
      >
        <div class="row h5">
          <div class="col"></div>
          <div class="col">
            На текущий день
          </div>
          <div class="col">
            Динамика месяца
          </div>
          <div class="col">
            Доля рынка
          </div>
        </div>

        <div class="row white flex-fill">
          <div class="col cell h5 text-uppercase" style="font-weight: normal">
            Объем <strong>портфеля</strong>
          </div>

          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">17.8 <span class="h5">млрд</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                32%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5">
                104%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text-center">за год</small>
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
              <div class="col increase h5">
                406%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text-center">за год</small>
            </div>
          </div>
          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">2.9%</div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col increase2 h5">
                192%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5">
                4%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col"
                >наша доля
                <p class="m-0">за год</p></small
              >
              <small class="text-uppercase col text-center"
                >рынок
                <p class="m-0">за год</p></small
              >
            </div>
          </div>
        </div>

        <div class="row white flex-fill mt-2 mb-2" ref="oneOfTwoRow">
          <div class="col cell h5 text-uppercase" style="font-weight: normal;">
            Количество <strong>сделок</strong>
          </div>

          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">18.1 <span class="h5">млрд</span></div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                16%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5">
                46%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text-center">за год</small>
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
              <div class="col increase h5">
                13%
                <!-- {{ strict(data.year) }}% -->
              </div>
            </div>
            <div class="row">
              <small class="text-uppercase col">от плана</small>
              <small class="text-uppercase col text-center">за год</small>
            </div>
          </div>
          <div class="col cell">
            <div class="row">
              <div class="col bigDigits">15.6%</div>
              <!-- не нашёл переменной -->
            </div>
            <div class="row">
              <div class="col decrease h5">
                21%
                <!-- {{ strict(data.plan) }}% -->
              </div>
              <div class="col increase h5">
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
              <small class="text-uppercase col text-center"
                >рынок
                <p class="m-0">за год</p></small
              >
            </div>
          </div>
        </div>

        <div class="row white flex-fill">
          <div class="col cell h5 text-uppercase" style="font-weight: normal;">
            Сделки по <strong>новым клиентам</strong>
          </div>
          <div class="col cell">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BCard } from "bootstrap-vue";

export default {
  name: 'SecondGarantee',
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
    handleResize: function() {
      console.log(
        this.$refs.absoluteHeightListner.getBoundingClientRect(),
        'absolute',
      );
      console.log(this.$refs.oneOfTwoRow.getBoundingClientRect(), 'row');
      if (this.$refs.mainContainer.clientWidth === 0)
        setTimeout(() => this.handleResize(), 1000);
      if (this.$refs.mainContainer.clientWidth > 600) {
        this.$refs.mainContainer.style.height =
          document.documentElement.clientHeight + 'px';

        const sumHeight =
          (this.$refs.headerProject.clientHeight +
            this.$refs.allStatistic.clientHeight) /
          0.97;

        const browserHeight = document.documentElement.clientHeight;

        this.sumHeight = sumHeight > browserHeight ? sumHeight + 'px' : '100vh';

        this.$refs.mainContainer.style.height = this.sumHeight;

        const newSumHeight =
          (this.$refs.headerProject.clientHeight +
            this.$refs.allStatistic.clientHeight) /
          0.97;

        // console.log(newSumHeight, sumHeight);
        if (newSumHeight > sumHeight) {
          this.$refs.mainContainer.style.height = newSumHeight + 'px';
          this.$emit('handleResize', newSumHeight + 'px');
        } else {
          this.$emit('handleResize', this.sumHeight);
        }
      }
    },
    handleResizeTest: function() {
      console.log('hey!');
    },
  },
  computed: {
    comissionsWithoutFirst() {
      return this.comissions.filter((e) => this.comissions.indexOf(e) > 0);
    },
  },
};
</script>

<style>
.white {
  background-color: #ffffff;
  border-radius: 20px;
}

/* div.col.my-auto.num {
  padding-bottom: 2rem;
} */
.cell[class] {
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 2rem;
  justify-content: center;
  /* margin-top: auto;
  margin-bottom: auto; */
  /* display: -ms-grid; */
}
</style>
