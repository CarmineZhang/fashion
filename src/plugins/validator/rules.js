export default {
  required: {
    test: (val) => {
      return val.length !== 0
    },
    message: '必填项',
  },
  mobile: {
    test: /^1(3|4|5|7|8)\d{9}$/,
    message: '手机号码格式不正确'
  }
}
