# 组合模式
> 组合模式将对象组合成树形结构，以表示“部分整体”的层次结构。 除了用来表示树形结
  构之外，组合模式的另一个好处是通过对象的多态性表现，使得用户对单个对象和组合对象的使
  用具有一致性

 - 表示树形结构。通过回顾上面的例子，我们很容易找到组合模式的一个优点：提供了一
   种遍历树形结构的方案，通过调用组合对象的 execute 方法，程序会递归调用组合对象下
   面的叶对象的 execute 方法，所以我们的万能遥控器只需要一次操作，便能依次完成关门、
   打开电脑、 登录 QQ 这几件事情。组合模式可以非常方便地描述对象部分-整体层次结构。
  - 利用对象多态性统一对待组合对象和单个对象。利用对象的多态性表现，可以使客户端
   忽略组合对象和单个对象的不同。在组合模式中，客户将统一地使用组合结构中的所有
   对象，而不需要关心它究竟是组合对象还是单个对象。

以宏命令为例，请求从树最顶端的对象往下传递，如果当前处理请求的对象是叶对象（普通
子命令），叶对象自身会对请求作出相应的处理；如果当前处理请求的对象是组合对象（宏命令），
组合对象则会遍历它属下的子节点，将请求继续传递给这些子节点。
总而言之，如果子节点是叶对象，叶对象自身会处理这个请求，而如果子节点还是组合对象，
请求会继续往下传递。叶对象下面不会再有其他子节点，一个叶对象就是树的这条枝叶的尽头，
组合对象下面可能还会有子节点

1. 组合模式不是父子关系
2. 对叶对象操作的一致性
3. 避免双向映射关系
4. 用职责链模式提高组合模式性能

## 实现
深度优先遍历

## 应用
 - 表示对象的部分-整体层次结构
 - 客户希望统一对待树中的所有对象
 - 文件夹扫描