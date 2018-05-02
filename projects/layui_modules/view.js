'use strict';

layui.define(['laytpl'], function (exports) {
  var laytpl = layui.laytpl;

  function _view(params) {

    console.log('params',params)

    var _this = this
      , before = null;

    // HTML模版
    _this.template =  params.template;



    // 模板引擎数据
    _this.data = params.data || {};

    // 模版渲染之前执行函数
    _this.before = params.before;

    // 模版渲染完成后执行函数
    _this.complete = params.complete;

    // 添加dom元素事件，每次模版渲染完成后都会执行该函数
    _this.event = params.event;


    // 当是
    before = _this.before && _this.before();

    // todo 视图局部渲染 待完成...
    // console.log($(_this.template).find('#testDom').html());


    if (before) {
      before.then && before.then(function () {
        // _this.render();
        _this.complete && _this.complete(_this);
      })
    } else {
      _this.render();
      _this.complete && _this.complete(_this);
    }
  }

  /**
   * 渲染模版
   * @param data
   * @param callback
   */
  _view.prototype.render = function (data, callback) {
    var _this = this;
    var hosturl = function(){
      // 服务地址
      var hosturl = (location.origin + location.pathname) || (location.protocol + '//' + location.hostname + (location.port == 80 ? '' : ':' + location.port + location.pathname));
      return hosturl;
    };
    var loadHtml  = function(Id, FileName){
      $('#' + Id).load(hosturl() + FileName);




    };

    data = _.extend(_this.data, data);


    console.log('_this.data',data)

    laytpl(_this.template).render(data, function (html) {

     //  console.log(html)

     // // loadHtml('dx-template',html); //插入页面
     //  // var compiled = _.template(_this.template);
      // var insertHtml = compiled(data);
      $('#dx-template').html(html);
      callback && callback();
      _this.event && _this.event(_this);
    });

  };


  //输出view接口
  exports('_view', _view);
});