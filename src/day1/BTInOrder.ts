
function walk(curr: BinaryNode<number> | null, path: number[]): number[]{
    //base case when curr is undefined
    if (!curr){
        return path;
    }

    //pre

    //recurse
    walk(curr.left, path);
    path.push(curr.value)
    walk(curr.right, path)

    //post
    // we dont do anything in post
    return path

}

export default function in_order_search(head: BinaryNode<number>): number[] {
return walk(head, [])
}