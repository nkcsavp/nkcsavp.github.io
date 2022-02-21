# 树(`tree`)

## `Java`

```java
BinaryTree bt = new BinaryTree(); // 新建一个二叉树实例
BinaryTreeNode root = bt.getRoot(); // 获取根结点
root.insertLeft(value); // 插入左子结点
root.insertRight(value); // 插入右子结点
root.removeLeft(); // 删除左子结点
root.removeRight(); // 删除右子结点
BinaryTreeNode node1 = root.left; // 获取左子结点
BinaryTreeNode node2 = root.right; // 获取右子结点
root.getValue(); // 获取结点的值
```

## `Python`

```python
bt = BinaryTree() # 新建一个二叉树实例
root = bt.root # 获取根结点
root.insertLeft(value) # 插入左子结点
root.insertRight(value) # 插入右子结点
root.removeLeft() # 删除左子结点
root.removeRight() # 删除右子结点
node1 = root.left # 获取左子结点
node2 = root.right # 获取右子结点
root.getValue() # 获取结点的值
```

## `C++`

```cpp
BinaryTree binaryTree;
BinaryTreeNode* root = binaryTree.getRoot();
root->insertLeft(value); // 插入左子结点
root->insertRight(value); // 插入右子结点
root->removeLeft(); // 删除左子结点
root->removeRight(); // 删除右子结点
BinaryTreeNode* node1 = root->left; // 获取左子结点
BinaryTreeNode* node2 = root->right; // 获取右子结点
root->getValue(); // 获取结点的值
```

