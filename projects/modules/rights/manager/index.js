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
    template:'/modules/rights/manager/index.html',
    event: addEvent
  });
  function addEvent() {
   

  }

});