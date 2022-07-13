# 百度训练营项目--报名首页
线上演示地址：https://ding-shanshan.github.io/baidu_first/Untitled-1.html

通过使用HTML、CSS、JavaScript等技术，实现如设计稿中的示例，实现一个HTML页面


第一步：完成静态页面的布局及样式开发，包含：

1. 不使用任何上层封装的第三方类、库、框架
3. 保证该页面在Chrome，Firefox，Edge、Safari等PC浏览器上的实现一致性（无移动端适配）
6. 最头部的菜单及按钮，实现其鼠标移动其上，以及点击时的反馈样式。
7. 圆形图片，源文件使用方形，圆形效果使用CSS来实现

第二步：完成对上一步作业的进一步升级，升级内容包括：

1. 实现一个报名区域
   
1.1 报名区域内包含学校输入，年份输入，电子邮箱的输入以及一个报名按钮

1.2 输入框按照良好的用户体验设计焦点在 与 焦点不在的样式

1.3 按钮请实现其鼠标滑过以及点击时的样式


2. 实现课程安排的筛选功能
   

2.1 包含“全部”、“HTML”、“CSS”、“JavaScript”四个模块

2.2 给每一个课程增加一个或多个标签标示

2.3 在课程安排筛选区域，当前选中的部分加粗，黑色，且底边有加重的样式

2.4 根据用户在筛选区域的选择，动态设置下方课程列表的显示

2.5 课程列表的总数在6-10，保证每一个被筛选的选项都有对应的课程

第三步：实现一个入学年份的可视选择，包括：
1. 入学年份输入框改为一个非输入框的区域（我们暂时称之为选择结果区域），默认显示某一个年份，默认样式同上一步
2. 当鼠标移动进入“选择结果区域”时，在年份下方弹出一个如图的面板，供具体年份选择，并且弹出面板中和选择结果区域值一样的部分加强显示；同时，选择结果区域样式发生改变（变为图中所示）。
3. 年份可选择的范围，和界面是解耦的，相关配置，可以参考的实现方式包括但不限制：
  3.1 通过年份输入的DOM中的自定义属性
  3.2 通过在JavaScript代码设置变/常量进行配置
4. 点击弹出面板中的某个年份，完成选择，弹出面板消失
5. 鼠标移动出 “选择结果区域”+“弹出面板” 时，弹出面板消失，选择结果区域样式恢复到默认态
6. 包含圆角、阴影等细节样式

第四步：实现选择学校面板，包括：
1. 学校输入框变成非输入框区域（同样称之为 选择结果区域），默认为一种让选择的友好提示，不做默认选项选择。默认样式同前几步该部分样式
2. 当鼠标移动进入“选择结果区域”时，弹出学校选择面板，选择结果区域样式发生改变（变为图中所示）。
3. 弹出面板中包含左右两个部分，左侧的省市选择，及右侧的院校选择；左侧选中某个省市时，右侧的院校List会联动发生改变，只显示该省市下的院校。
4. 当已经有选择某个院校时，对应选择的省市加强显示，并且保证显示在界面上（tip：当省市列表过长时，当前选择的学校所在省市靠后时，需要调整左侧的滚动高度，可以考虑从体验层面，所选省市显示在什么位置比较合适）；同理，选择的院校
并且弹出面板中和选择结果区域值一样的部分加强显示，并且保证显示在可视区域内；
5. 出于实现角度考虑，省市及院校可虚构数据，省市请保证至少10个，至少有1个省市包含的院校超过20个。（但请注意虚构数据不违反国家法律法规政策）
6. 选择完成和选择面板消失的逻辑同第三步
7. 类似圆角、阴影等细节样式

第五步：实现报名提交的验证与提示
1. 验证内容包含：是否选择学校，电子邮箱的正确性
2. 当验证不通过时，在报名区域下方弹出红色提示区域提示具体问题
3. 错误提示区域3s自动消失
4. 当验证通过时，在报名区域下方弹出绿色提示区域提示报名成功，5s自动消失
5. 报名成功时，报名区域的内容和区域高宽发生如图变化，并增加文字按钮重新报名
6. 点击重新报名时，报名区域恢复到原始状态，且将上一次报名时用的信息作为默认选择
7. 红色和绿色的提示封装为一个组件
8. 不需要涉及任何与服务端数据请求交互 
