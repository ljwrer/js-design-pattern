# 模板方法模式
> 模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常
  在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺
  序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法

模板方法模式是一种典型的通过封装变化提高系统扩展性的设计模式。在传统的面向对象语
言中，一个运用了模板方法模式的程序中，子类的方法种类和执行顺序都是不变的，所以我们把
这部分逻辑抽象到父类的模板方法里面。而子类的方法具体怎么实现则是可变的，于是我们把这
部分变化的逻辑封装到子类中。通过增加新的子类，我们便能给系统增加新的功能，并不需要改
动抽象父类以及其他子类，这也是符合开放封闭原则的。

## 实现
 - 高阶函数(DC式继承)
 - 继承
 - 委托代理

## 应用
 -  UI 组件