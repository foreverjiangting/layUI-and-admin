"use strict";

layui.define(function(exports) {
  var _config = {};
  /**
   * 环境变量
   */
  _config.env = {
    //开发的测试地址
    develop: {
      api: "http://192.168.0.200:8080/labpoo/",
      imageUrl: "http://192.168.0.200:8080/labpoo/system/showPic/"
    },

    //生产的测试地址
    production: {
      api: "/labpoo/",
      imageUrl: "/labpoo/system/showPic/"
    }
    
  }["__fis.env"];

  //输出config接口
  exports("_config", _config);
});
