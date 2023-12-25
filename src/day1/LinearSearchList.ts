export default function linear_search(haystack: number[], needle: number): boolean {
    // the ++i operator is equivlent to i++. Pre-increment operator
    for (let i = 0; i < haystack.length; ++i){
        if (haystack[i] === needle) return true;
    }
    return false;

}