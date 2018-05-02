

扩展模块(layui_modules)
===
## route.js
* setBreadcrumb&nbsp;&nbsp;&nbsp;&nbsp;_route.setBreadcrumb(params[, setting])
 ```
 每个模块应调用此方法显示当前位置导航。params显示导航参数,可配置导航点击后跳转业务模块。
 setting地址导航配置,现在可以配置是否显示导航。
 ```
 示例：
 ```
 //隐藏地址导航栏
_route.setBreadcrumb(null, {hide: true}); 
//不配置点击后跳转
_route.setBreadcrumb(['前一级目录', '当前目录']); 
//配置点击后跳转
_route.setBreadcrumb(['前两级目录', {url: '业务模块路径', name: '前一级目录',data:'传递的参数'}, '当前目录']); 
 ```

* go&nbsp;&nbsp;&nbsp;&nbsp;_route.go(url[, urlParams])
 ```
 业务模块之间相互跳转。url指向业务模块名，urlParams所需要传递的参数。
 ```
 示例：
 ```
 _route.go('user',{id:1});
 ```

* config&nbsp;&nbsp;&nbsp;&nbsp;_route.config
 ```
 设置跳转的业务模块路径，在app.js中配置。
 ```
 示例：
 ```
_route.config.base = 'modules/{0}/index.js';
 ```

* params&nbsp;&nbsp;&nbsp;&nbsp;_route.params
 ```
 获取上个页面传递到当前页面的参数。
 ```
 示例：
 ```
_route.params.id获取id参数
 ```
 
 
## view.js
* template&nbsp;&nbsp;&nbsp;&nbsp;_view.template(html)
 ```
 HTML模版。暂时只支持接收html字符串，在配合fis3工具下使用__inline('index.html')引入HTML。
 ```

* data&nbsp;&nbsp;&nbsp;&nbsp;_view.data(params)
 ```
 模板引擎数据。若视图中有需要渲染的数据，在初始化_view时params就必须传入对应的默认数据
 ```

* before&nbsp;&nbsp;&nbsp;&nbsp;_view.before()
 ```
 模版渲染之前执行函数。若在渲染模版之前异步获取数据，需要将请求return给before函数。
 若不是异步获取则不需要return。
 ```

* complete&nbsp;&nbsp;&nbsp;&nbsp;_view.complete(view)
 ```
 模版渲染完成后执行函数，返回view中所有对象。
 ```

* event&nbsp;&nbsp;&nbsp;&nbsp;_view.event(view)
 ```
 添加dom元素事件，每次模版渲染完成后都会执行该函数。返回view中所有对象。
 ```

* 示例
 ```
 // 初始化view
 var _view = new layui._view({
    template: __inline('index.html'),
    data: {
      list: [{"user": "詹姆斯"}, {"user": "周杰伦"}],
      pageSize: 8,
      pageNum: 1
    },
    before: getListData,
    event: addEvent
  });
  // 获取列表数据
function getListData(pageNum) {
  return _ajax.get({url: 'test', data: {pageNum: pageNum || 1}})
  .then(function (data) {
      _view.data.list = data.list;
      _view.data.pageSize = data.pageSize;
      _view.data.pageNum = data.pageNum;
    });
  }
  // 添加事件
  function addEvent(){
	  // ...
  }
 ```

