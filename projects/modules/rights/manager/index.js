'use strict';

layui.use(['form', 'laypage', '_route', 'laydate', '_view', '_ajax'], function () {
  var form = layui.form()
    , laypage = layui.laypage
    , _route = layui._route
    , layer = layui.layer
    , _ajax = layui._ajax
    , laydate = layui.laydate
    , startTime
    , endTime;

  // 初始化当前位置
  _route.setBreadcrumb(['权限管理', '管理员管理']);

  // 视图渲染
  var _view = new layui._view({
    //template: '/modules/rights/manager/index.html',
    template: '<span class="test">44444</span>',
    data: {
      list: [
        {
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
    },
    event: addEvent
  });
  function getListData() {

  }
  function addEvent() {
    $(".test").bind("click",function(){
      alert("333");
    })

  }

});