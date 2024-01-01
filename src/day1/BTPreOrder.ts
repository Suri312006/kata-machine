export default function pre_order_search(head: BinaryNode<number>): number[] {

return walk(head, [])
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[]{
    //base case when curr is undefined
    if (!curr){
        return path;
    }

    //pre

    path.push(curr.value)
    //recurse
    walk(curr.left, path);
    walk(curr.right, path)

    //post
    // we dont do anything in post
    return path

}
