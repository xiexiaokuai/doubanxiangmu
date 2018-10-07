<template>
  <div id="star">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
 
  </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = 'on' // 亮
  const CLS_HALF = 'half' // 半星星
  const CLS_OFF = 'off' // 不亮
  export default {
    props: {
      score: {
        type: Number
      }
    },
    computed: {
      itemClasses () {
        let result = []
        // 向下取整数
        let score = Math.floor(this.score) / 2
        let starOn = Math.floor(score)

        let starHalf = (score - starOn) === 0 ? 0 : 1
        //整除的情况（整数部分全部点亮）
        for (let i = 0; i < starOn; i++) {
          result.push(CLS_ON)
        }

        //是否有余数
        if (starHalf === 1) {
          result.push(CLS_HALF)
        }
        //剩余的部分全部不亮
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }

</script>

<style>
.star{
  display:inline-block
}


  .star-item {
    display: inline-block;
    height:15px;
    width: 15px;
    background-size: 13px 13px;
    margin-right:-2px;
  }
  .star-score{
    display: inline-block;
    font-size:13px;
    line-height:15px;
    top:-5px;
  }
  .on {
    background-image: url(../assets/img/rating_star_xsmall_on.png);
    background-repeat: no-repeat;
  }
  .half {
    background-image: url(../assets/img/rating_star_xsmall_half.png);
    background-repeat: no-repeat;
  }
  .off {
    background-image: url(../assets/img/rating_star_xsmall_off.png);
    background-repeat: no-repeat;
  }
</style>

