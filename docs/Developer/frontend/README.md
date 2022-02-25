# 前端贡献指南

> 创建一个新算法的流程

1. `Fork`[前端仓库](https://github.com/nkcsavp/frontend)，在`Fork`后的仓库上进行修改

2. 修改文件如下：

   * 如果添加一个排序算法(或某些数组算法)，仅需修改

     `src/components/generator/sort.js`

   * 如果添加一个树算法，仅需修改

     `src/components/generator/tree.js`

3. 修改方式

   请按照文件中的注释进行，**同时也提供了实例，请参照示例编写**

   函数的参数解释如下：

   | 参数    | 解释                                                         | 其他                              |
   | ------- | ------------------------------------------------------------ | --------------------------------- |
   | `data`  | 一个数组，存储样例数据(对于树，索引为结点在完全二叉树中的位置，空结点为`undefined`) |                                   |
   | `mvs`   | 一个`Vue`的`ref`对象，存储动作数据（关于可用的动作数据，查阅[AlgoMotion文档](https://github.com/NicerWang/Algomotion#关于默认的movesreader)） | 赋值或`push`时，使用`mvs.value`   |
   | `infos` | 一个`Vue`的`ref`对象，存储信息数据                           | 赋值或`push`时，使用`infos.value` |

4. `commit`&`push`

   `commit`的信息格式为`feat:sort-bubble`(修改了`sort.js`，且新增了名为`bubble`的函数)

5. 向前端仓库提交`Pull Request`，等待`Merge`

   



