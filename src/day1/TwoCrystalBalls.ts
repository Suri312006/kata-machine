export default function two_crystal_balls(breaks: boolean[]): number {

    //jump by sqrt of n
    const jump_amt = Math.floor(Math.sqrt(breaks.length))
    let breakpoint = 0; //* not sure if this is intended behavior

    let i = jump_amt;

    for(; i<breaks.length; i+=jump_amt){
        const broken = breaks[i]

        if( broken){
            breakpoint = i
            break
        }
    }

    for(let j = breakpoint - jump_amt; j <= breakpoint; ++j){
        let value = breaks[j]
        if(value){
            return j
        }
    }
    return -1
}
//* primes solution underneath
/* export default function two_crystal_balls(breaks: boolean[]): number {

    //jump by sqrt of n
    const jump_amt = Math.floor(Math.sqrt(breaks.length))

    let i = jump_amt;

    for(; i<breaks.length; i+=jump_amt){
        const broken = breaks[i]

        if( broken){
            break
        }
    }
i -= jump_amt
    for(let j = 0; j < jump_amt && i<breaks.length; ++j, ++i){
        let value = breaks[i]
        if ( value ){
            return  i
        }
    }
    return -1
} */