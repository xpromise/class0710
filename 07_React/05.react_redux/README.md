## 评论管理功能
* 拆分组件
	* App 应用主组件
	* CommentAdd 添加评论组件
	* CommentList 显示评论组件
	* CommentItem 评论内容组件
* 实现静态组件
	* 将静态资源导入到public
	* 实现静态组件
		* 将class改为className
		* 将style改为{{}}形式
		* input改为自结束标签形式
* 实现动态组件
  * 数据存放在哪里？
    * 多个组件使用，存放在公共父组件App中
  * 数据名称：comments
  * 数据类型：[{}, {}]
  * 实现基本动态显示
    	
		