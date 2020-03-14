<template>
  <div class="grid-view" ref="gridView">
<!--    大的单元格视图，里面插入规定格式的单元格-->
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "GridView",
    props: {
		  cols: {
		    type: Number,
        default: 2
      },
      hMargin: {
		    type: Number,
        default: 8
      },
      vMargin: {
		    type: Number,
        default: 8
      },
      itemSpace: {
		    type: Number,
        default: 8
      },
      lineSpace: {
		    type: Number,
        default: 8
      }
    },
    mounted: function () {
		  setTimeout(this._autoLayout, 20)
    },
    updated: function () {
      this._autoLayout()
    },
    methods: {
		  _autoLayout: function () {
        // 1.获取gridEl和children
        // 注: 这里为什么不用document.querySelector呢?
        // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
        let gridEl = this.$refs.gridView;
        let children = gridEl.children;

        // 2.设置gridEl的内边距
        //使用``和${}实现变量和字符串的拼接
        //类似于 this.vMargin + 'px' + this.hMargin + 'px'
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`

        // 3.计算item（每个子元素）的宽度
        let itemWidth = (gridEl.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols;
        for (let i = 0; i < children.length; i++) {
          let item = children[i];
          item.style.width = itemWidth + 'px';
          //给左边列的元素设置右外边距
          if ((i+1) % this.cols !== 0) {
            item.style.marginRight = this.itemSpace + 'px'
          }
          //给第一行以外的元素设置上外边距
          if (i >= this.cols) {
            item.style.marginTop = this.lineSpace + 'px'
          }
        }
      }
    }
	}
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>
