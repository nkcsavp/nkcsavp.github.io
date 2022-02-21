# 图(`graph`)

## `Java`

```java
Graph g = new Graph(); // 新建一个Graph实例(必须)
g.emphasize(index); // 强调展示结点
g.emphasize(index1,index2); // 强调展示边
g.deEmphasize(index); // 取消强调展示
g.deEmphasize(index1,index2); // 取消强调展示
```

## `Python`

```python
g = Graph() # 新建一个Graph实例(必须)
g.emphasizeLink(index1,index2) # 强调展示边
g.deEmphasizeLink(index1,index2) # 取消强调展示
g.emphasizeNode(index) # 强调展示结点
g.deEmphasizeNode(index) # 取消强调展示
```

## `C++`

```cpp
Graph g; // 新建一个Graph实例(必须)，支持使用Graph*
g.emphasize(index); // 强调展示结点
g.emphasize(index1,index2); // 强调展示边
g.deEmphasize(index); // 取消强调展示
g.deEmphasize(index1,index2); // 取消强调展示
```

