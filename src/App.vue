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
    >
      <el-carousel-item>
        <first-garantee @arrowClick="arrowClick"></first-garantee>
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
    return {};
  },
  methods: {
    arrowClick(direction) {
      direction === 'prev'
        ? this.$refs.carousel.prev()
        : this.$refs.carousel.next();
    },
  },
  computed: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap');

.el-carousel,
.el-carousel__container[class] {
  height: 100vh;
}
html body {
  font-family: Roboto;
}

html {
  font-size: 40px;
}

@media screen and (max-width: 1281px) {
  html {
    font-size: 20px;
  }
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
  font-weight: bold;
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
  background-image: url('./svg/arrow-left.svg');
}
.next-button {
  background-image: url('./svg/arrow-right.svg');
}

.bigDigits {
  font-size: 3em;
  line-height: 1;
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
}

small.text-uppercase.col.text-center {
  left: 3rem;
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
  font-weight: 500;
  margin-bottom: 0;
}
</style>
