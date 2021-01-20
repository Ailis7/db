export const resizeFunc = {
  methods: {
    resizeCount(
      mainContainer,
      headerContainer,
      bodyContainer,
      secondBodyContainer,
    ) {
      if (this.$refs[mainContainer].clientWidth === 0)
        setTimeout(() => this.handleResize(...arguments), 1000);
      console.log(this.$refs[mainContainer].clientWidth);

      this.$refs[mainContainer].style.height = '100vh';

      const countHeight = () => {
        let body = this.$refs[bodyContainer].clientHeight;
        if (this.$refs[mainContainer].clientWidth < 767 & secondBodyContainer !== undefined) {
          body += this.$refs[secondBodyContainer].clientHeight;
        }
        return (this.$refs[headerContainer].clientHeight + body) / 0.98;
      };

      const firstCountHeight = countHeight();

      const browserHeight = document.documentElement.clientHeight;

      this.sumHeight =
        firstCountHeight > browserHeight ? firstCountHeight + 'px' : '100vh';

      this.$refs[mainContainer].style.height = this.sumHeight;

      const secondCountHeight = countHeight();

      console.log(secondCountHeight, firstCountHeight);
      if (secondCountHeight > firstCountHeight) {
        console.log('test!');
        this.$refs[mainContainer].style.height = secondCountHeight + 'px';
        this.$emit('handleResize', secondCountHeight + 'px');
      } else {
        this.$emit('handleResize', this.sumHeight);
      }
    },
  },
};
