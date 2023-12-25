export default function bs_list(haystack: number[], needle: number): boolean {
    // I want to implement it in the way he showed us, but this also seems like a relatively easy recursive problem
    let low = 0;
    let hi = haystack.length; //* remember since this isnt inclusive, we can let this be the +1 it already is
    do {
        const mid_point = Math.floor(low + (hi - low) / 2);
        let value = haystack[mid_point];
        if (value === needle) return true;
        else if (value > needle) hi = mid_point;
        else low = mid_point + 1; //* mid point + 1 since the value at the midpoint was checked in an earlier line
        //* we dont do this condition for hi, since we always want to look at it like this [low, hi), hi isnt included, meaning when we set 
        //* hi = mid_point, we arent going to "check" the value of high
        //* but we need it for low, since we check starting from low, and low=midpoint means we will check midpoint again
        
    } while (low < hi);

    return false;
}
