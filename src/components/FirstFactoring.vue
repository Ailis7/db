<template>
  <div id="FirstGarantee">
    <div
      class="container-fluid"
      style="background-color: #f5f5f5; height: 100vh"
    >
    
      <div
        class="row mb-2 pt-3 pl-3 pr-3 pb-2"
        style="background-color: #FFFFFF"
      >
        <div class="col-1" style="width: 70%">
          <img class="logo" src="../svg/logo_factoring.svg"/>
        </div>
        <div class="col-8 pl-3">
          <div class="h1" style="line-height: 0.6; ">Факторинг ПЛЮС</div>
        </div>
        <div class="col d-flex justify-content-end">
          <a class="prev-button mr-1"> </a>
          <a class="next-button"> </a>
        </div>
      </div>

      <div class="row m-1" style="height: calc(100vh - 2.5em - 2em)">
        <div
          class="col-8 mr-2 pb-2 d-flex flex-column justify-content-between"
          style="background-color: #FFFFFF; border-radius: 20px;"
        >
          <div class="row pt-1">
            <div class="col h5 m-0">Комиссия</div>
          </div>

          <div class="row">
            <div class="col-4 my-auto text-uppercase">Сегодня</div>
            <div class="col bigDigits mb-2 d-flex  justify-content-end">
              {{ comissions[0].value.toLocaleString("ru-RU") }} ₽
            </div>
          </div>
          <div class="row">
            <div class="col progress p-0 ml-2 mr-2">
              <div class="progress-bar" style="width: 50%;"></div>
            </div>
          </div>

          <div
            v-for="comission in comissionsWithoutFirst"
            :key="comission.value"
          >
            <div class="row text-uppercase">
              <div class="col-4 my-auto ">{{ comission.label }}</div>
              <div class="col h2 d-flex justify-content-end  my-auto">
                {{ comission.value.toLocaleString("ru-RU") }} ₽
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
          class="col pb-2 d-flex flex-column justify-content-between"
          style="background-color: #FFFFFF; border-radius: 20px; padding-left: 2.25rem"
        >
          <div class="row pt-1">
            <div class="row">
              <div class="col h5 mb-1">
                Все сделки
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row bigDigits">{{ sdelki[0].value }}</div>
              <div class="row">
                <small class="text-uppercase">Количество</small>
              </div>
            </div>
            <div class="col">
              <div class="row bigDigits">1.2</div>
              <!-- {{ abbreviateNumber_num(sdelki[0].avg_cheque, 1) }} -->
              <div class="row">
                <small class="text-uppercase">
                  Средний чек (млрд.)
                  <!-- {{ abbreviateNumber_title(sdelki[0].avg_cheque) }} -->
                </small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="row">
              <div class="col h5">
                Новые клиенты
              </div>
            </div>
          </div>
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
                  Средний чек (млрд.)
                  <!-- {{ abbreviateNumber_title(sdelki[0].avg_cheque) }} -->
                </small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="row">
              <div class="col h5">
                Заявки в работе
              </div>
            </div>
          </div>
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
                <small class="text-uppercase">
                  Риски
                </small>
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
  name: "FirstGarantee",
  data() {
    return {
      comissions: [
        { label: "Сегодня", value: 1098754 },
        { label: "Вчера", value: 257272 },
        { label: "Неделю назад", value: 1402503 },
        { label: "Год назад", value: 2974769 }
      ],
      sdelki: [
        { value: 70, avg_cheque: "" },
        { value: 2, avg_cheque: "" }
      ],
      rest: [{ value: 2 }, { value: 10 }]
    };
  },
  methods: {
    click() {
      console.log("click");
    },
    getPercent(array, value, key) {
      var max = 0;
      array.forEach(item => {
        max = item[key] > max ? item[key] : max;
      });
      console.log((value * 100) / max + "%");
      return (value * 100) / max + +"%";
    }
  },
  computed: {
    comissionsWithoutFirst() {
      return this.comissions.filter(e => this.comissions.indexOf(e) > 0);
    }
  }
};
</script>

<style>
/* html {
  font-size: 40px;
  font-family: Roboto-Bold;
}
* {
  font-weight: bold !important;
}

@media screen and (max-width: 1281px) {
  html {
    font-size: 20px;
  }
}

.prev-button,
.next-button {
  display: block;
  width: 2em;
  height: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  background-size: 2em 2em;
}

.prev-button:hover,
.next-button:hover {
  opacity: 1;
  cursor: pointer;
}

.prev-button {
  background-image: url("./svg/arrow-left.svg");
}
.next-button {
  background-image: url("./svg/arrow-right.svg");
}

.bigDigits {
  font-size: 3em;
}
.progress-bar {
  border-radius: 20px;
  background-color: #503aeb;
}

.text-uppercase {
} */
</style>
