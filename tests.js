
const node = {
}

function calc(a, b) {
    return a + b
}
let pD = 2



/*
                               1
                            /     \
                           2       3
                        /    \   /   \
                       4     5  6     7
                     /   \
                    8     9

 */





function calc(node, pD) {
    if(node === null) {
        return 0
    }

    const result = 0 +
      calc(node.left, pD + 1) +  calc(node.right, pD + 1)









    return result
}

function nodeDepths(root) {
    const result = calc(root, 0)

    console.log("Final result: ", result)
    return result
}













console.log(result)
