import Node from "./Node.js";
import prettyPrint from "./PrettyPrint.js";
import util from "node:util"
export default class Tree{

    root;

    constructor(array){
        this.root = this.#buildTree(array)
    }

    #buildTree(array){
        array.sort((a,b) => a - b)
        let rootNode = this.#recursiveBalance(array)
        prettyPrint(rootNode)
        return rootNode
    }
    #recursiveBalance(array){

        if (array.length == 0){
            console.log("Base case activated")
            return null
        }

        let middleIndex = Math.floor(array.length / 2)

        if (array.length == 1){
            middleIndex -= middleIndex
        }

        let middleValue = array[middleIndex]

        array.splice(middleIndex,1)

        let leftNode = this.#recursiveBalance(array.slice(0,middleIndex))
        let rightNode = this.#recursiveBalance(array.slice(middleIndex))

        let rootNode = new Node(leftNode,rightNode,middleValue)
        return rootNode
    }
}