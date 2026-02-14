import prettyPrint from "./PrettyPrint.js";
import Tree from "./Tree.js";

let myTree = new Tree([1,5,4,8,9,7,2,3,6,54,67,90,12,13,1123,445,7654,89,99,56])
prettyPrint(myTree.root)
console.log("Does the tree include 27? " + myTree.includes(27))
myTree.insert(27)
console.log("Does the tree include 27? " +myTree.includes(27))
myTree.insert(27)
myTree.insert(10000)
myTree.insert(11)
prettyPrint(myTree.root)
console.log(myTree.getNode(5))
console.log(myTree.getParentNode(10000))
