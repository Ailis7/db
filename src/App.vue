<template>
  <div id="dashboard">
    <!-- <first-garantee @arrowClick='arrowClick'></first-garantee> -->
    <!-- <second-garantee></second-garantee> -->
    <!-- <first-factoring></first-factoring> -->
    <!-- <el-button @click="changeCarousel(item)">test</el-button> -->

    <el-carousel
      :interval="500000"
      indicator-position="none"
      arrow="never"
      ref="carousel"
      :height="carouselHeight"
    >
      <el-carousel-item>
        <first-garantee
          @arrowClick="arrowClick"
          @handleResize="handleResize"
          ref="hey"
        ></first-garantee>
      </el-carousel-item>
      <el-carousel-item>
        <second-garantee @arrowClick="arrowClick"></second-garantee>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import FirstGarantee from './components/FirstGarantee';
import SecondGarantee from './components/SecondGarantee';

export default {
  name: 'dashboard',
  components: {
    FirstGarantee,
    SecondGarantee,
  },
  data() {
    return {
      carouselHeight: '100vh',
    };
  },
  methods: {
    arrowClick(direction) {
      this.$refs.hey.handleResizeTest();
      console.log(document.querySelectorAll('.el-carousel__item'));
      if (direction === 'prev') {
        this.$refs.carousel.prev()
      } else {
        this.$refs.carousel.next();
      }
    },
    handleResize(height) {
      this.carouselHeight = height;
      // console.log(height);
    },
  },

  computed: {},
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

html body {
  font-family: Roboto;
}

@function calcFluidFontSize($f-min, $f-max, $v-min, $v-max) {
  $k: ($f-max - $f-min)/($v-max - $v-min);
  $b: $f-min - $k * $v-min;

  $b: $b * 1px;

  @return calc( #{$k} * 100vw + #{$b} );
}
html {
  font-size: calcFluidFontSize(28, 40, 1280, 1920);
}

// html {
//   font-size: calc((100vw - 1280px) / (1920 - 1280) * (40 - 28) + 28px);
// }

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
  background-size: 2em 2em;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}

// .prev-button:hover,
// .next-button:hover {
//   opacity: 1;
//   cursor: pointer;
// }

.prev-button {
  background-image: url('./svg/arrow-left.svg');
}
.next-button {
  background-image: url('./svg/arrow-right.svg');
}

.bigDigits[class] {
  font-size: 3em;
  line-height: 1;
  word-spacing: -0.5rem;
  padding: 0px;
  /* margin: auto; */
}
.progress-bar[class] {
  border-radius: 20px;
  background-color: #503aeb;
}

small.text-uppercase {
  font-size: 0.6rem;
}

small.text-uppercase.col {
  position: absolute;
  padding: 0;
}

small.text-uppercase.col.text-center {
  left: 2.4rem;
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
}

.decrease[class],
.increase[class],
.increase2[class] {
  margin-bottom: 0;
  padding: 0;
}

/* @media screen and (max-width: 1281px) {
  html {
    font-size: 26px;
  }
  small.text-uppercase.col.text-center {
    left: 2.9rem;
  }
}
@media screen and (max-width: 1481px) {
  html {
    font-size: 30px;
  }
}

@media screen and (max-width: 1700px) {
  html {
    font-size: 32px;
  }
}


@media screen and (max-width: 1700px) {
  
} */
</style>
