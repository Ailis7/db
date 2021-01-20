<template>
  <div id="dashboard">
    <!-- <first-garantee @arrowClick='arrowClick'></first-garantee> -->
    <!-- <second-garantee></second-garantee> -->
    <!-- <first-factoring></first-factoring> -->
    <!-- <el-button @click="changeCarousel(item)">test</el-button> -->

    <el-carousel
      :interval="500000"
      indicator-position="none"
      arrow="always"
      ref="carousel"
      :height="carouselHeight"
      @change="change"
    >
      <el-carousel-item>
        <first-garantee
          @arrowClick="arrowClick"
          @handleResize="handleResize"
          ref="firstGarantee"
        ></first-garantee>
      </el-carousel-item>
      <el-carousel-item>
        <second-garantee
          @arrowClick="arrowClick"
          @handleResize="handleResize"
          ref="secondGarantee"
        ></second-garantee>
      </el-carousel-item>
      <el-carousel-item>
        <first-factoring
          @arrowClick="arrowClick"
          @handleResize="handleResize"
          ref="firstFactoring"
        ></first-factoring>
      </el-carousel-item>
      <el-carousel-item>
        <second-factoring
          @arrowClick="arrowClick"
          @handleResize="handleResize"
          ref="secondFactoring"
        ></second-factoring>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import FirstGarantee from './components/FirstGarantee';
import SecondGarantee from './components/SecondGarantee';
import FirstFactoring from './components/FirstFactoring';
import SecondFactoring from './components/SecondFactoring';


export default {
  name: 'dashboard',
  components: {
    FirstGarantee,
    SecondGarantee,
    FirstFactoring,
    SecondFactoring
  },
  data() {
    return {
      carouselHeight: '100vh',
      arrow: 'never',
    };
  },
  methods: {
    arrowClick(swipe) {
      if (swipe === 'prev') {
        this.$refs.carousel.prev();
      } else {
        this.$refs.carousel.next();
      }
    },
    change(index) {
      for (let prop in this.$refs) {
        let vueElem = this.$refs[prop];
        if (vueElem.elemID === index) {
          this.currentComponent = vueElem;
          this.changeResize();
        }
      }
    },
    handleResize(height) {
      this.carouselHeight = height;
    },
    changeResize() {
      this.currentComponent.handleResize();
    },
  },
  created() {
    window.addEventListener('resize', this.changeResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeResize);
  },
  computed: {},
  mounted: function() {
    this.currentComponent = this.$refs.firstGarantee;
    this.currentComponent.handleResize();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

html body {
  font-family: Roboto;
}

// @function calcFluidFontSize($f-min, $f-max, $v-min, $v-max) {
//   $k: ($f-max - $f-min)/ ($v-max - $v-min);
//   $b: $f-min - $k * $v-min;

//   $b: $b * 1px;

//   @return calc(#{$k} * 100vw + #{$b});
// }
html {
  font-size: 20px;
  // font-size: calcFluidFontSize(28, 40, 1280, 1920);
}

@media (min-width: 1920px) {
  html {
    font-size: 40px;
  }
}

@media (min-width: 1600px) and (max-width: 1919px) {
  html {
    font-size: 35px;
  }
}

@media (min-width: 1280px) and (max-width: 1600px) {
  html {
    font-size: 27px;
  }
}

@media (max-width: 767px) {
  html {
    font-size: 12px;
  }
  .headerName[class] {
    margin-right: -100px;
    padding-left: 5px !important;
  }

  button.el-carousel__arrow[class] {
    display: inline-block;
    position: fixed;
  }

  header.row.mainHeader[class] {
    min-height: 7.5%;
    font-size: 10px;
  }
  // .description {
  //   -webkit-transform: rotate(-45deg); //Chrome, Safari
  //   -moz-transform: rotate(-45deg); //Firefox
  //   -o-transform: rotate(-45deg); //Opera
  //   -ms-transform: rotate(-45deg); //IE
  //   transform: rotate(90deg); //браузеры без префексов
  //   display: block;
  // }
  main.row {
    min-height: 89.5%;
    display: flex;
  }

  .white {
    .description[class] {
      display: block;
      height: 2rem;
      text-align: center;
      padding-top: 0.5rem;
    }
    // .cell[class]:not(.description) {
    //   margin-top: -10rem;
    // }
    .first_cell {
      margin-left: 1rem;
    }
  }
  main.row .row .col .row,
  .deal_description {
    display: block;
    text-align: center;
  }
}

div.col.progress {
  border-radius: 20px;
}

.el-carousel__arrow[class] {
  display: none;
}

.mainHeader {
  min-height: 13.5%;
}

main.row {
  min-height: 83.5%;
}

.col[class],
.row[class],
.h1[class],
.h2[class],
.h3[class],
.h4[class],
.h5[class],
.h6[class],
small[class] {
  font-weight: 700;
}

.prev-button,
.next-button {
  display: block;
  width: 2em;
  height: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  background-size: 100%;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}

.prev-button {
  background-image: url('./svg/arrow-left.svg');
}
.next-button {
  background-image: url('./svg/arrow-right.svg');
}

.bigDigits[class] {
  font-size: 3em;
  line-height: 1;
  padding: 0px;
}
.white .bigDigits[class] {
  word-spacing: -0.5rem;
}

.progress-bar[class] {
  border-radius: 20px;
  background-color: #503aeb;
}

.progress[class] {
  height: 0.8rem;
}

small.text-uppercase {
  font-size: 0.6rem;
}

small.text-uppercase.col {
  padding: 0;
}

.text_center {
  margin-left: 1.75rem;
}

.decrease {
  color: #ff7f00;
}

.increase,
.increase2 {
  color: #67c23a;
}
.increase::before {
  content: '\25b2'; /*"\2BC5";*/
  font-size: 1rem;
  position: absolute;
  left: -1.25rem;
  top: 0.2rem;
}

.decrease[class],
.increase[class],
.increase2[class] {
  margin-bottom: 0;
  padding: 0;
}

.white {
  background-color: #ffffff;
  border-radius: 20px;
}

.cell[class] {
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 2rem;
  justify-content: center;
}

.manyText {
  padding-top: 0.9rem;
}
</style>
