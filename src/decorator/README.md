# 装饰者模式
> 给对象动态地增加职责的方式称为装饰者（decorator）模式。装饰者模式能够在不改
  变对象自身的基础上，在程序运行期间给对象动态地添加职责。跟继承相比，装饰者是一种
  更轻便灵活的做法

代理模式和装饰者模式最重要的区别在于它们的意图和设计目的。代理模式的目的是，当直
接访问本体不方便或者不符合需要时，为这个本体提供一个替代者。本体定义了关键功能，而代
理提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。装饰者模式的作用就是为对
象动态加入行为。

## 实现
 - monkey patch
 - AOP
 - proxy
 - ES7 decorator

## 应用
 - 数据上报
 - 统计函数的执行时间
 - 动态改变函数参数
 - 插件式的表单验证