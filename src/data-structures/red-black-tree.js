import RedBlackNode from '../models/red-black-node'
import {defaultCompare, Colors, Compare} from '../utils'
import BinarySearchTree from './binary-search-tree'

export default class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (!this.root) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (!node.left) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    } else if (!node.right) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right
    } else {
      return this.insertNode(node.right, key)
    }
  }
  fixTreeProperties(node) {}
  rotationLL(node) {}
  rotationRR (node) {}
}