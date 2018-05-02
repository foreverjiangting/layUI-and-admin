'use strict';

layui.use(['_route', '_view'], function () {
  var _route = layui._route;

  // 初始化当前位置
  _route.setBreadcrumb(['后台用户管理', {url: 'backstage.user', name: '权限维护'}]);

  // 视图渲染
  layui.jquery('body').append('<script id="temp-box" type="text/html"></script>');
  layui.jquery('#temp-box').load(hosturl() + "/modules/rights/rule/index.html", function (data) { //这里路劲做更改就行

    // 视图渲染
    var _view = new layui._view({
      // template: '/modules/rights/manager/index.html',
      template: document.getElementById('temp-box').innerHTML,

      data: {
        list: [{
            "name": "闲心",
            "time": "2017-09-23",
            "signWord": "人生就像是一场修行"
          },
          {
            "name": "许闲心",
            "time": "2017-09-23",
            "signWord": "于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…"
          }

        ]
      }
     
    });
  });

  function hosturl() {
    // 服务地址
    var hosturl = (location.origin + location.pathname) || (location.protocol + '//' + location.hostname + (location.port == 80 ? '' : ':' + location.port + location.pathname));
    return hosturl;
  };

});