import Node from "./Node.js";
import prettyPrint from "./PrettyPrint.js";
export default class Tree{

    root;

    constructor(array){
        
    }

    buildTree(array){
        array.sort((a,b) => a - b)
        let rootNode = this.recursiveBalance(array)
        prettyPrint(rootNode)
    }
    recursiveBalance(array){

        if (array.length == 0){
            console.log("Base case activated")
            return null
        }

        let middleIndex = Math.ceil(array.length / 2)
        let middleValue = array[middleIndex]

        array.splice(middleIndex,1)

        let leftNode = this.recursiveBalance(array.slice(0,middleIndex))
        let rightNode = this.recursiveBalance(array.slice(middleIndex))

        let rootNode = new Node(leftNode,rightNode,middleValue)
        return rootNode
    }
}