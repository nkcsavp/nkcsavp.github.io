# 用户文档

## Part 1 关于自定义功能

可以借助网站提供的框架，自行编写算法代码，操作网站提供的数据结构，并得到对应的动画展示。

自定义功能必须登录才能使用，每次执行都将会被记录。

#### 不同数据结构的使用方法

* [树](./tree.html)(`tree`)
* [数组](./array.html)(`array`)
* [图](./graph.html)(`graph`)

#### 关于不同语言

* `Java`

  输入的代码实际上是`public static void main(String[] args)`中的内容，不能使用`import`.

* `Python`

  代码可以使用`import`.

* `C++`

  代码可以使用`#include`，但是必须包含主函数，即：

  ```cpp
  #include<string>
  using namespace std;
  int main(){
  	// Your codes here
  }
  ```


## Part 2 关于Share Key

每次自定义功能的执行记录中，都可以进行`Share`，从而得到`Share Key`。

其他用户无需登录，使用`Share Key`，即可获取该执行记录的相关信息，并可以复制代码和观看动画。

`Stop`或删除执行记录时，`Share Key`将会失效。