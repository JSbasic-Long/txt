let arr = [1,2,3,4,5,6,7,8,9]
 
let checkTangDan = true
let temp = 0
for(let i = 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            checkTangDan = false
            break
        }
    }
}   

        if(checkTangDan === true){
            console.log('Tăng')
        }
        else{
            console.log('K Tăng')
        }