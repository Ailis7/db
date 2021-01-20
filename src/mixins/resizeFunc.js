export const resizeFunc = {
  methods: {
    resizeCount(mainContainer, headerContainer, bodyContainer) {
      console.log(mainContainer, headerContainer, bodyContainer)
      if (this.$refs[mainContainer].clientWidth === 0) setTimeout(() => this.handleResize(...arguments), 1000);

      if (this.$refs[mainContainer].clientWidth > 767) {
        this.$refs[mainContainer].style.height = '100vh';

        const countHeight =
          (this.$refs[headerContainer].clientHeight +
            this.$refs[bodyContainer].clientHeight) /
          0.98;

        const browserHeight = document.documentElement.clientHeight;

        this.sumHeight =
          countHeight > browserHeight ? countHeight + 'px' : '100vh';

        this.$refs[mainContainer].style.height = this.sumHeight;

        const newCountHeight =
          (this.$refs[headerContainer].clientHeight +
            this.$refs[bodyContainer].clientHeight) /
          0.98;

        if (newCountHeight > countHeight) {
          this.$refs[mainContainer].style.height = newCountHeight + 'px';
          this.$emit('handleResize', newCountHeight + 'px');
        } else {
          this.$emit('handleResize', this.sumHeight);
        }
      } else {
        this.$emit('handleResize', this.sumHeight);
      }
    }
  }
}