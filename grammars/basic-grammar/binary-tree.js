class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    // 
    insert(node) {
        let parent = this
        let parent_bak = this
        let left = true
        while (parent != null) {
            parent_bak = parent
            if (parent.data > node.data) {
                left = true
                
                parent = parent.left 
            } else {
                left = false
                parent = parent.right
            }
        }
        if (left) {
            parent_bak.left = node
        } else {
            parent_bak.right = node
        }
        return this
    }
}

let node = new Node(10)
let child = new Node(11)

node.insert(child)

console.log(node)
