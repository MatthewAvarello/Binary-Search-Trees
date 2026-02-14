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
    includes(value){
        let currentnode = this.root;
        while(currentnode !== null){
            if(currentnode.value == value){
                return true
            }          
            if (value > currentnode.value){
                currentnode = currentnode.right
            } else {
                currentnode = currentnode.left
            }
        }
        return false
    }
    insert(value){
        if (this.includes(value)){
            return
        }
        let currentnode = this.root
        do{
            if (value > currentnode.value){
                if (currentnode.right == null){
                    currentnode.right = new Node(undefined,undefined,value)
                    console.log("Inserting")
                    return
                }
                currentnode = currentnode.right
            } else if (value < currentnode.value){
                if(currentnode.left == null){
                    console.log("Inserting")
                    currentnode.left = new Node(undefined,undefined,value)
                    return
                }
                currentnode = currentnode.left
            }
        } while(currentnode !== null)
    }
    getNode(value){
        if(this.includes(value) == false){
            return
        }
        let currentnode = this.root;
        while(currentnode !== null){
            if(currentnode.value == value){
                return currentnode
            }          
            if (value > currentnode.value){
                currentnode = currentnode.right
            } else {
                currentnode = currentnode.left
            }
        }
    }
    getParentNode(value){
        if(this.includes(value) == false){
            return
        }
        if (this.root.value == value){
            return
        }
        let currentnode = this.root 
        while(currentnode !== null){
            try {
                if (currentnode.left.value == value){
                    return currentnode.value
                }
            } catch (error) {
 
            }
            try {
                if (currentnode.right.value == value){
                    return currentnode.value
                }
            } catch (error) {

            }
            if (currentnode.left.value == value || currentnode.right.value == value){
                return currentnode.value
            }

            if (value > currentnode.value){
                currentnode = currentnode.right
            } else {
                currentnode = currentnode.left
            }
        }

    }
    deleteItem(value){
        if (!this.includes(value)){
            return
        }


    }
}