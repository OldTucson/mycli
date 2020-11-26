export const validatePhone = (rule, value, callback) => {
  let reg = /^[1][0-9]{10}$/
  if (value && !reg.test(value)) {
    // eslint-disable-next-line standard/no-callback-literal
    callback('请输入正确的手机号')
  } else {
    callback()
  }
}
