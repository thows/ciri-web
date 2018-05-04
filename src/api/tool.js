import 'mint-ui/lib/style.css'
import {Toast, MessageBox} from 'mint-ui';
import moment from 'moment'

export default {
  domind: function () {
    // return 'http://60.205.7.211:8816'
    return 'http://127.0.0.1:8080'
  },
  path: function () {
    return '/gateway'
  },

  oos: function () {
    return 'http://ciri-prod.oss-cn-beijing.aliyuncs.com/'
  },

  generatorUrl: function (url) {
    if (url.indexOf('/img') !== -1 || url.indexOf('com') !== -1) {
      return url
    } else {
      return this.oos() + url
    }
  },

  checkEmail: function (email) {
    let re = /^.*\@.*\.com/
    return re.test(email)
  },
  checkMobile: function (mobile) {
    let re = /^1\d{10}$/
    return re.test(mobile)
  },
  checkPhone: function (phone) {
    let re = /^0\d{2,3}-?\d{7,8}$/
    return re.test(phone)
  },

  buildForm: function (arr) {
    if (!(arr instanceof Array)) {
      console.log('from Is not an array')
      return null
    }

    let param = new URLSearchParams()

    arr.forEach(function (v) {
      param.append(v.key, v.v)
    })
    return param
  },
  getuser: function () {
    let username = sessionStorage.getItem('username')
    if (typeof username === 'undefined' || username === '')
      return null
    else
      return username
  },
  isBank: function (str) {
    return typeof str === 'undefined' || str === '' || str === null;
  },
  isBankArr: function (arr) {
    alert(1);
    return arr === null || arr.length != 0;
  },
  islogin: function () {
    return sessionStorage.getItem('islogin')
  },
  gettoken: function () {
    return sessionStorage.getItem('token') === null ? '' : sessionStorage.getItem('token')
  },
  substr: function (string, count) {
    return string.length > count ? string.substr(0, count) + '...' : string;
  },
  toast: function (msg) {
    Toast({
      message: msg,
      position: 'bottom',
      duration: 5000
    });
  },
  MessageBox: function (msg) {
    return MessageBox({
      title: '提示',
      message: msg,
      showCancelButton: true
    });
  },
  replaceAll: function (target, s1, s2) {
    if (this.isBank(target)) {
      return null;
    }
    return target.replace(new RegExp(s1, "gm"), s2);
  },
  time(time) {
    return moment(time).format("YYYY-MM-DD");
  },

}
