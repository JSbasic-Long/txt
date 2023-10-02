// // Bài 1
// // Câu a
// function kiemTraAmDuong(n){
//     if(n>0){
//         console.log('Số Dương')
//     }
//     else if(n=0){
//         console.log('Số Không Âm Không Dương')
//     }
//     else{
//         console.log('Số Âm')
//     }
// }
// kiemTraAmDuong(3)
// // Câu b
// function chanLe(n){
//     if(n%2 === 0){
//         console.log('Số Chẵn')
//     }else{
//         console.log('Số Lẻ')
//     }
// }
// chanLe(2)
// // Câu c
// function soLonNhat(a,b,c){
//     if(a>b,a>c){
//         console.log('A là số lớn nhất')
//     }else if(b>a,b>c){
//         console.log('B là số lớn nhất')
//     }else{
//         console.log('C là số lớn nhất')
//     }
//     }
// soLonNhat(1,2,3)
// // Cách 2
// function soLonNhat1(a,b,c){
//     let max = a
//     if(max < b){
//         max = b
//     }if(max <c){
//         max = c
//     }
//     console.log('số lơn nhất', max)
// }
// soLonNhat1(1,2,3)
// // Câu d
// function kiemTraNamNhuan(n){
//     if(n % 4 == 0 && n % 100 && n % 400 != 0 ){
//         console.log( n,'Là Năm Nhuận')
//     }
//        else{
//         console.log(n,'Không Phải Năm Nhuận')
//        }
// }
// kiemTraNamNhuan (2024)
// kiemTraNamNhuan (2028)
// kiemTraNamNhuan (2021)
// kiemTraNamNhuan (2020)
// kiemTraNamNhuan (2018)
// // Câu e 
// function kiemTraKiTu(n){
//     if(n == 'u' || n == 'e' || n == 'o' || n == 'a' || n == 'i' || n == 'U' || n == 'E'|| n == 'O'|| n == 'A'|| n == 'I' ){
//         console.log(n,'Là Nguyên Âm')
//     }
//     else{
//         console.log(n,'Là Phụ Âm')
//     }
// }
// kiemTraKiTu('A')
// kiemTraKiTu('b')
// kiemTraKiTu('t')
// kiemTraKiTu('I')
// // Bài 2 
// // Câu a

// function phuongTrinh(a,b,c){ 
//     let n = b*b - 4*a*c 
//     if( n<0 ){
//         console.log('PT vô nghiệm')
//     }
//     else if(a==0 && b==0){
//         console.log('PT vô nghiệm')
//     }
//     else if(n==0){
//         x1 = x2 = (-b) / (2*a) 
//         console.log('PT có nghiệm kép',x1=x2)
//     }
//     else if( a==0 ){
//         console.log('PT có 1 nghiệm duy nhât',-c/b)
//     }
//     else{
//         x1 = (-b + Math.sqrt(n)) / (2*a)
//         x2 = (-b - Math.sqrt(n)) / (2*a)
//         console.log('PT Có 2 nghiệm phân biệt',x1,x2)
//     }
// }
// phuongTrinh(1,2,1)
// phuongTrinh(0,1,1)
// phuongTrinh(1,0,1)
// phuongTrinh(1,1,0)
// phuongTrinh(1,1,1)
// phuongTrinh(0,0,1)
// phuongTrinh(0,1,2)
// phuongTrinh(1,1,1)

// // Câu b 
// function thueTNvaLuong(n){
//     if(n<8000000){
//         console.log('0% thuế',n)
//     }
//     else if(8000000 <= n && n <=15000000){
//         console.log('15% thuế',(n*15)/100)
//     }
//     else{
//         console.log('20% thuế',(n*20)/100)
//     }
// }
// thueTNvaLuong(16000000)
// thueTNvaLuong(10000000)
// thueTNvaLuong(2000000)


// // Câu c
// function diemTB(a,b,c){
//     let  n = (a+2*b+3*c)/(1+5)
//     if(n>=9){
//         console.log('Hạng A')
//     }else if(n>=7 && n<9){
//         console.log('Hạng B')
//     }else if(n>=5 && n<7){
//         console.log('Hạng C')
//     }else{
//         console.log('Hạng F')
//     }
// }
// diemTB(7,8,9)
// diemTB(4,5,6)
// diemTB(1,2,3)
// diemTB(0,1,2)
// diemTB(7,7,6)
// diemTB(5,7,2)
// diemTB(0,0,0)
// diemTB(10,10,10,)


// Câu d 
function giaCuocDT(n){
    let phiCoDinh = 25000
    if(n>=0 && n<=50){
        chiPhi = n*600
    }else if(n>50 && n<=200){
        chiPhi = (n-50)*400 + 50*600 
    }else if(n>200){
        chiPhi = (n-200)*200 + 50*600 + 150*400 
    }
    tongChiPhi = phiCoDinh * chiPhi
    
    return tongChiPhi
}
giaCuocDT(800)
giaCuocDT(120)
giaCuocDT(20)