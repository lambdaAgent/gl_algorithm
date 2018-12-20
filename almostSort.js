const arr2 = [1,5,4,3,2,6]
const arr = [1,5,3,4,2,6]
function quicksort(arr){
    const [ head , tail ] = arr;
    if(!head) return [];
    const middle = arr[Math.floor(arr.length/2)];
    const small = arr.filter(a => a < middle)
    const big = arr.filter(b => b > middle);
    return quicksort(small).concat(middle).concat(quicksort(big))
}


function almostSorted(arr){
    const sorted = quicksort(arr);
    let diff = [];
    for (let i=0;i<arr.length;i++){
        if (sorted[i]!==arr[i]) diff.push(i);
    }

    if (diff.length===0){
        console.log("yes")
    } else if (diff.length==2){
        console.log("yes")
        console.log("swap " + Number(diff[0]+1) + " " + Number(diff[1]+1));
    }
    else {
        //reverse 
        let begin = diff[0], end = diff[diff.length-1];
        const startArr = arr.slice(0, begin);
        const middle = arr.slice(begin, end+1);
        const endArr = arr.slice(end+1)
        const newArr = startArr.concat(middle.reverse()).concat(endArr)
        console.log(sorted)
        for (let i=0;i<newArr.length;i++){
            if (sorted[i]!=newArr[i])
            {
                console.log("no");  
                return;
            }
        }
        console.log('yes')
        console.log('reverse ' + Number(diff[0]+1), Number(diff[diff.length-1])+1)
    }
}

// main
const arg = JSON.parse(process.argv[2])
almostSorted(arg)