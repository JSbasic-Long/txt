// // Câu a

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// let tongPT = 0


// for(let i =  0 ; i < arr.length ; i = i + 1 ){
  
//     console.log('Phan tu thu %s = %s',i,arr[i])
//     tongPT = tongPT + arr[i]
// }
// // Câu b
//     console.log('Tổng PT =',tongPT)

// // Câu c
//   let giaTriLonNhat = arr[0]
//   let giaTriNhoNhat = arr[0]
//   for(let i=1;i<arr.length;i++){
//     if(giaTriLonNhat < arr[i]){
//         giaTriLonNhat = arr[i]
//     }
//     if(giaTriNhoNhat > arr[i]){
//         giaTriNhoNhat = arr[i]
//     }
//   }
// console.log('Giá trị lớn nhất =', giaTriLonNhat)
// console.log('Giá trị nhỏ nhất', giaTriNhoNhat)

// // Câu d

// console.log('Trung bình cộng PT mảng =', tongPT / arr.length )

// // Câu e

// let arr1 = []
// let j = 0
// for( i=arr.length-1; i>=0; i--){
//     arr1[j] = arr [i]
//     j++
// }
// console.log(arr1)

// //  temp = arr[i]
// //  arr[i] = arr1[j]
// //  arr1[j] = temp
// //  // swap : biến tạm để đổi giá trị 



// // Câu f

//  let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let ex = []
// let e = 0
// let check = true
// let c = 0
// for(let i =  0 ; i < arr.length ; i = i + 1 ){
//     c = 0
//     check = true
//         if(e > 0){
//             for(e=0;e<arr.length;e=e+1){
//                 if(arr[i] == ex[e]){
//                check = false 
//         }
//     }
// }
//     if(check){
//         for(j=0;j<arr.length;j++){
//             if(arr[i] == arr[j]){
//                 c = c+1
//             }
//         }
//     }
//     if(c>0){
//         ex[e] = arr[i]
//         e = e + 1 
//         console.log('Số %s gồm %s số',arr[i],c)
//     }
// }

// // Cách 2 câu f

// const tanSoXuatHien = {}
// for(i=0;i<arr.length;i=i+1){
//     tanSoXuatHien[arr[i]] = (tanSoXuatHien[arr[i]] || 0) + 1
// }
// console.log(tanSoXuatHien)

// // Câu g
 // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// for( i = arr.length - 1 ; i >= 0 ; i-- ){
//     arr[i+1] = arr[i] 
// }
// arr[0] = 117
// console.log(arr)

// // // Cách 2 

// // newArr = [117]
// // arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

//  let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// // Câu h 
//  let checkTangDan = true
// for(i=0;i<arr.length;i++){

//     if(arr[i+1] < arr[i]){
//         checkTangDan = false
//         break
//     }
// }
//     if(checkTangDan === true){
//         console.log('Mảng tăng dần')
    
//     }
//     else{
//         console.log('Mảng không tăng dần')
//     }


// // Câu i 


// for(let i=0; i<arr.length; i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

// // arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // Câu j 
//  for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         }
//     }
//  }
//  console.log(arr)


// // Câu k
//  for(let i = 0; i<arr.length;i++){
//         if(arr[i] %2 ==0){
//             console.log('Số chẵn thứ %s = %s',i,arr[i])
//         }
//     } 


// // Câu l 

// for(let i =0; i<arr.length;i++){
//     if(arr[i] %2 != 0 ){
//         console.log('Số lẻ thứ %s = %s',i, arr[i])
//     }
// }

//--------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



//------------------------- Vòng While ---------------------------


// // Mẫu
// let n = 0
// while(n<10){
//     console.log('So n=',n)
//     n= n+1
// }


// // // Câu a
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i=0
// while(arr[i] !== undefined){
//         console.log('Phần tử thứ %s = %s',i,arr[i])
//         i++
// }

// // Câu b
// i=0
// let tongPT = 0
// while(arr[i] !== undefined){
//         tongPT += arr[i]
//         i++
// }
// console.log('Tổng PT =', tongPT )

// // Câu c

// let max = -Infinity
// let min = Infinity
// i = 0
// while(arr[i] !== undefined){
//         if(arr[i]>max){
//                 max = arr[i]
//         }
//         if(arr[i]<min){
//                 min = arr[i]
//         }
//         i++
// }
// console.log('Phần tử lớn nhất = %s,Phần tử nhỏ nhất = %s',max,min)

// // Câu d

// console.log('Trung bình Cộng =', tongPT / i)

// // Câu e

// i = arr.length 
// while(i--){
//         console.log('Phần tử thứ %s = %s ',i,arr[i])
// }

// // Câu f

// i = 0
// let tanSoXuatHien =  {}
// while(arr[i] !== undefined){
//         tanSoXuatHien[arr[i]] = (tanSoXuatHien[arr[i]] || 0 ) +1 
//         i++
// }
// console.log('Số lần xuất hiện',tanSoXuatHien)


// // câu g

// i = arr.length 

// while(i--){  
//         arr[i+1] = arr[i] 
// }
// console.log(arr)
// arr[0] = 117
// console.log(arr)

// // Câu h

// i = 0
// let checkTangDan = true
// while(arr[i] !== undefined){
//         if(arr[i] > arr[i+1]){
//                 checkTangDan = false
//                 break
//         }
//         i++
// }
//         if(checkTangDan === true){
//                 console.log('Dãy số tăng dần')
//         }
//         else{
//                 console.log('Dãy số không tăng dần đều')
//         }
        


// //Câu i

// i = 0

// let temp = 0


// while(arr[i] !== undefined){
//     let j = i + 1
//             while(arr[j] !== undefined){
//             if(arr[i] < arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//        j++
//     }
//     i++
// }
// console.log(arr)


// // Câu j

// i = 0
// temp = 0

// while(arr[i] !== undefined){
//      j = i + 1
//         while(arr[j] !== undefined){
//             if(arr[i] > arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         j++
//         }
//     i++
// }
// console.log(arr)



// //Câu k

// i = 0 
// while(i < arr.length){
//         if(arr[i] % 2 == 0){
//                 console.log('Phần tử số chẵn =',arr[i])
//         }
//         i++
// }


// // Câu l

// i = 0 
// while(i < arr.length){
//         if(arr[i] % 2 != 0){
//                 console.log('Phần tử số lẻ =',arr[i])
//         }
//         i++
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//====================================================================


// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0

// do{
//     console.log('Số i thứ %s = %s',i,arr[i])
//     i++
// }while(arr[i] !== undefined)


// // Câu b

// i = 0
// let tongPT = 0
// do{
//     tongPT = tongPT + arr[i]
//     i++
// }
//     while (arr[i] !== undefined)
// console.log('Tổng PT =', tongPT )


// // Câu c

// i = 0
// let max = -Infinity
// let min = Infinity

// do{
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i++
// }while(arr[i] !== undefined)
// console.log('Max = %s , Min = %s', max,min)

// // Câu d

// console.log('Trung bình cộng PT =', tongPT / i)

// // Câu e

// i = arr.length - 1
//  do{
//     console.log('Phần tử thứ %s = %s',i, arr[i])
//  }while(i--)


// // Câu f 

// let tanSoXuatHien = {}
// i = 0
// do{
//     tanSoXuatHien[arr[i]] = ( tanSoXuatHien[arr[i]] || 0 ) + 1
//     i++
// }while(i < arr.length)
// console.log(tanSoXuatHien)


// // Câu g
// i = arr.length - 1

// do{
//     arr[i+1] = arr[i]
// }while(i--)

//  arr[0] = 117
//  console.log(arr)


// // Câu h
//  checkTangDan = true
// i = 0
// do{
//     if(arr[i] > arr[i+1]){
//         checkTangDan = false
//         break
//     }
//     i++
// }while(arr[i] !== undefined)
//     if(checkTangDan === true){
//         console.log('Tăng dần')
//     }
//     else{
//         console.log('Không tăng dần')
//     }

// // Câu i

// i = 0
// temp = 0
// do{
//     let j = i +1
//         do{
//             if(arr[i] > arr[j] ){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//             j++
//         }while(arr[j] !== undefined)
//     i++
// }while(arr[i] !== undefined)

// console.log('Tăng dần',arr)


// // Câu j

// i = 0
// temp = 0

// do{
//     let j = i +1
//     do{
//         if(arr[i] < arr[j]){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     j++
//     }while(arr[j] !== undefined)
// i++
// }while(arr[i] !== undefined)

// console.log('Giảm dần',arr)



// // Câu k

// i = 0

// do{
//     if(arr[i] % 2 == 0){
//         console.log('Số chẵn thứ %s = %s',i, arr[i])
//     }
//     i++
// }while(arr[i] !== undefined)


// // Câu l

// i = 0

// do{
//     if(arr[i] %2 !== 0)
//     console.log('Số lẻ thứ %s = %s',i,arr[i])
//     i++
// }while(arr[i] !== undefined)

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



// Bài 2


//---------------------------------- Vòng For ----------------------------------
// Câu a

let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
for(let i = 0; i< arr.length; i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i] + arr[j] == 10){
            console.log(arr[i],arr[j])
        }
    }
}


// Câu b

let tanSoXuatHien = {}
for(let i = 0; i < arr.length; i++){
    tanSoXuatHien[arr[i]] = (tanSoXuatHien[arr[i]] || 1 ) 
}

console.log(tanSoXuatHien)




// Câu c

//                     arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]





// Câu d












































// Câu b

// function tongPhanTu(n){
//     let tong = 0
//     for( let i = 0; i < n.length; i = i+1){
//     tong += n[i] 
// }
//     return tong
// }
// let n = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// console.log(tongPhanTu(n))

// // Câu c

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let max = -451
// for(let i=0;i<arr.length;i=i+1){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(`Giá trị lớn nhất =`,max)

// let lowest = 451
// for(let i=0;i<arr.length;i=i+1){
//     if(arr[i]<lowest){
//         lowest = arr[i]
//     }
// }
// console.log(`Giá trị nhỏ nhất=`,lowest)


// // Câu d

// function tongPT(n){
//     let mang = 0
//     for( let i=0 ; i < n.length ; i=i+1 ){
//         mang += n[i]
//     }
//     return mang
// }
// let n = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// console.log(tongPT(n))
// let trungBinhCong = tongPT(n) / n.length
// console.log(trungBinhCong)


// // Câu e

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i=0;i<arr.length;i=i+1){
//     console.log('Phần tử thứ %s=%s',i,arr[i])
// }
//  arr.reverse();

// console.log(arr)


// // Câu f
 
// function mang(arr,n){
//     let soLanXuatHien = 0;
    
//     for( let i = 0 ; i < arr.length ; i = i + 1 )
//     if( arr[i] == n ){
//     soLanXuatHien ++;
// }
// console.log("Phần tử",'', + n +' ', "xuất hiện",'' + soLanXuatHien + "lần" )
// }
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// mang(arr,3)
// mang(arr,45)

// // Câu g

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.unshift(117)
// console.log(arr)



// // Câu h
 
// let mang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let kiemTraMang = arr =>{
//     for(let i=1; i<arr.length; i=i+1){
//         if(arr[i]-arr[i-1]>1){
//             return arr[i]
//         }
//     }
//     return false
// } 
// console.log(kiemTraMang(mang))

//  // Câu i

// function manga(a,b){
//  return a - b 
// }
// let a = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// console.log(a.sort(manga))

// // Câu j

// let a = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// a.sort((a,b)=> b-a)
// console.log(a)



// // Câu k

// let a = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let b = []
// for(let i =0;i<a.length;i=i+1){
//     if(a[i]%2==0){
//         b.push(a[i])
//     }
// }
// console.log(`${b}`)


// // Câu l

// let a = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let b = a.filter(function(mang){
//     return mang % 2 !==0
// })
// console.log(b)


