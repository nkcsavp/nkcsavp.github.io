# TestCases

* array_java

  ```java
  DataList data = new DataList();
  for (int i = 1; i < data.size(); i++) {
    boolean flag = true;
    for (int j = 0; j < data.size() - i; j++) {
      if (data.get(j) > data.get(j+1)) {
        data.swap(j,j+1);
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  ```

* tree_java

  ```java
  BinaryTree bt = new BinaryTree();
  BinaryTreeNode root = bt.getRoot();
  root.insertLeft(1);
  root.removeLeft();
  root.removeRight();
  root.insertRight(2);
  root.right.getValue();
  ```

* graph_java

  ```java
  Graph g = new Graph();
  g.emphasize(0);
  g.emphasize(0,1);
  g.deEmphasize(1);
  ```

* graph_python

  ```python
  g = Graph()
  g.emphasizeLink(0,1)
  g.deEmphasizeLink(0, 1)
  g.emphasizeNode(1)
  g.deEmphasizeNode(1)
  ```

* tree_python

  ```python
  bt = BinaryTree()
  root = bt.root
  root.removeLeft()
  root.insertLeft(777)
  root.removeRight()
  root.insertRight(2)
  root.left.insertLeft(1)
  root.left.left.insertLeft(222)
  ```

* array_python

  ```python
  datalist = DataList()
  datalist.get(1)
  datalist.swap(1, 2)
  ```

* array_cpp

  ```c++
  int main(){
    DataList data;
    for (int i = 1; i < data.size(); i++) {
      bool flag = true;
      for (int j = 0; j < data.size() - i; j++) {
        if (data.get(j) > data.get(j+1)) {
          data.swap(j,j+1);
          flag = false;
        }
      }
      if (flag) {
        break;
      }
    }
  }
  ```

* tree_cpp

  ```c++
  int main(){
    BinaryTree binaryTree;
    BinaryTreeNode* root = binaryTree.getRoot();
    std::cout<< root->left->getValue();
    root->removeLeft();
    root->insertLeft(1);
  }
  ```

* graph_cpp

  ```c++
  int main(){
    Graph g;
    g.emphasize(1);
    g.emphasize(1,2);
    g.deEmphasize(1);
    g.deEmphasize(0,1);
  }
  ```
