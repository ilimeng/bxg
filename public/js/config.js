/**
 * Created by 李 on 2017/9/20.
 */
require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery',
    cookie : 'jquery-cookie/jquery.cookie',
    common : '../js/common',
    bootstrap : 'bootstrap/js/bootstrap.min',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    form : 'jquery-form/jquery.form',
    validate : 'validate/jquery.validate',
    login : '../js/login',
    teachAdd : '../js/teachAdd',
    template : 'artTemplate/template-web',
    teacherList : '../js/teacherList',
    util : '../js/util',
  },
  shim : {
    bootstrap : {
      deps : ['jquery'],
    },
    language : {
      deps : ['jquery','datepicker']
    },
    validate : {
      deps : ['jquery']
    }
  }
})