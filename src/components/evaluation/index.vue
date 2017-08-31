<template>
  <div>
    <div class="header-wrapper">
      <div class="header-back"></div>
      <div class="header-info">发表评价</div>
    </div>
    <div class="comment">
      <div class="comment-view">
        <span>评分：</span>
        <star></star>
      </div>
      <div class="textarea-wrap">
        <textarea v-model.trim="content" placeholder="这次买的商品满意吗？写点心得给其他顾客参考吧。长度在6-500字之间"></textarea>
      </div>
      <p class="comment-img">添加图片
        <small>（您最多可以上传5张图片）</small>
      </p>
      <ul class="images">
        <li v-for="(item,index) in imgList" :key="index">
          <img :src="item">
        </li>
        <li>
          <a class="add" @click="showUpload"></a>
        </li>
      </ul>
      <input type="file" ref="iptfile" @change="upload($event)" accept="image/gif,image/png,image/jpg">
      <div class="footer-action">
        <a class="action comment-action" @click="submit">发表评价</a>
      </div>
    </div>
  </div>
</template>
<script>
import Star from '@/components/widget/star'
import * as http from '@/services'
export default {
  name: 'evaluation',
  components: {
    Star
  },
  created() {
    let params = this.$store.state.route.params
    this.oId = params.oId
    this.cId = params.cId
  },
  data() {
    return {
      oId: 0,
      cId: 0,
      imgList: [],
      content: '',
      level: -1
    }
  },
  methods: {
    submit() {
      if (this.level === -1) {
        this.$ve.alert('请填写评分')
        return
      }
      if (this.content.length === 0) {
        this.$ve.alert('请填写评论')
        return
      } else if (this.content.length < 6) {
        this.$ve.alert('评论字数太短')
        return
      } else if (this.content.length > 500) {
        this.$ve.alert('评论字数太长，超过500')
        return
      }
      http.addEvaluation(this.oId, this.level, this.cId, this.content, this.imgList.join(',')).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('评价成功', () => {
            this.$router.go(-1)
          })
        }
      })
    },
    showUpload() {
      if (this.imgList.length < 5) {
        this.$refs.iptfile.click()
      } else if (this.imgList.length == 5) {
        this.$ve.alert('最多上传5张图片')
      }
    },
    upload(e) {
      let file = e.target.files[0];
      let param = new FormData();
      param.append('file', file, file.name)
      http.uploadImg(param).then(res => {
        if (res.retcode === 0) {
          this.imgList.push(res.msg)
        } else {
          this.$ve.alert(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
input[type='file'] {
  opacity: 0;
}

.comment {
  background-color: #f8f8f8;
  padding: 10px 15px;
  .comment-view {
    padding: 10px 5px;
    line-height: 20px;
    span {
      vertical-align: top;
    }
  }
  .textarea-wrap {
    position: relative;
    padding: 10px;
    background: #fff;
    textarea {
      resize: none;
      width: 100%;
      height: 70px;
      border: none;
      background: none;
      font-size: 12px;
      -webkit-appearance: none;
      border-radius: 0;
      background-color: #fff;
    }
    &:before {
      content: "";
      display: block;
      border: 1px solid #e5e5e5;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      transform: scale(.5);
      transform-origin: 0 0;
      bottom: -100%;
      right: -100%;
    }
  }
  .comment-img {
    margin: 10px 0;
    small {
      color: $subcolor;
    }
  }

  .images {
    height: 50px;
    margin-bottom: 20px;
    li {
      position: relative;
      float: left;
      margin-right: 10px;
      width: 50px;
      height: 50px;
      .add {
        position: relative;
        display: block;
        width: 48px;
        height: 48px;
        background: #fff;
        border: 1px dashed #ddd;
        &:after {
          content: "\20";
          display: block;
          width: 20px;
          height: 20px;
          background: url('//wq.360buyimg.com/fd/base/img/my/comment_v2.png?t=20160114') no-repeat 0 0;
          background-size: 80px 40px;
          background-position: -40px -20px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -10px 0 0 -10px;
        }
      }
    }
  }
  .footer-action {
    .comment-action {
      flex: 1;
    }
  }
}
</style>


