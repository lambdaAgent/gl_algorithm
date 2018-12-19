
const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

// const expected = [
//     [(0,0==0,1)2, (0,1==0,2)3 , (0,2==0,3)4 , (0,3==1,3)8],
//     [(1,0==0,0)1, (1,1==1,2)7 , (1,2==2,2)11, (1,3==2,3)12],
//     [(2,0==1,0)5, (2,1==1,1)6 , (2,2==2,1)10, (2,3==3,3)16],
//     [(3,0==2,0)9, (3,1==3,0)13, (3,2==3,1)14, (3,3==3,2)15]
// ]

function rotateMatrix(mat){
    let top = 0
    let bottom = mat.length -1
  
    let left = 0
    let right = mat[0].length -1
  
    while (left < right && top < bottom){ 
        // Store the first element of next row, 
        //this element will replace first element of 
        //current row 
        let prev = mat[top+1][right] 

        //Move elements of top row one step right 
        for (let i=right; i>left-1; i--){ 
            let curr = mat[top][i] 
            mat[top][i] = prev 
            prev = curr 
        }
        top += 1
        // Move elements of leftmost column one step down 
        for (let i=top; i<bottom+1; i++){ 
            let curr = mat[i][left] 
            mat[i][left] = prev 
            prev = curr 
        }  
        left += 1
        // Move elements of bottom row one step right 
        for (i=left; i < right+1; i++){
            let curr = mat[bottom][i] 
            mat[bottom][i] = prev 
            prev = curr 
        }

        bottom -= 1
        // Move elements of rightmost column one step upwards 
        for (let i = bottom; i > top-1; i--){ 
            let curr = mat[i][right] 
            mat[i][right] = prev 
            prev = curr 
        }
        right -= 1
    }
  
    return mat 
}

function rotate(mat, Ntimes){
    for(let i=0; i<Ntimes; i++){
        rotateMatrix(mat)
    }
    return mat;
}

const result = rotateMatrix(matrix)

const arg = JSON.parse(process.argv[2])

const res = rotate(arg)
console.log(res)