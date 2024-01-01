export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case when curr is undefined
    if (!curr) {
        return path;
    }

    //pre

    //recurse
    walk(curr.left, path);
    walk(curr.right, path);

    //post
    path.push(curr.value);

    return path;
}
