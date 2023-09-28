// Bài 1
// Câu a
function kiemTraAmDuong(n){
    if(n>0){
        console.log('Số Dương')
    }
    else if(n=0){
        console.log('Số Không Âm Không Dương')
    }
    else{
        console.log('Số Âm')
    }
}
kiemTraAmDuong(3)
// Câu b
function chanLe(n){
    if(n%2 === 0){
        console.log('Số Chẵn')
    }else{
        console.log('Số Lẻ')
    }
}
chanLe(2)
// Câu c
function soLonNhat(a,b,c){
    if(a>b,a>c){
        console.log('A là số lớn nhất')
    }else if(b>a,b>c){
        console.log('B là số lớn nhất')
    }else{
        console.log('C là số lớn nhất')
    }
    }
soLonNhat(1,2,3)
// Cách 2
function soLonNhat1(a,b,c){
    let max = a
    if(max < b){
        max = b
    }if(max <c){
        max = c
    }
    console.log('số lơn nhất', max)
}
soLonNhat1(1,2,3)
// Câu d
function kiemTraNamNhuan(n){
    if(n % 4 == 0 && n % 100 && n % 400 == 0 != 0 ){
        console.log( n,'Là Năm Nhuận')
    }
       else{
        console.log(n,'Không Phải Năm Nhuận')
       }
}
kiemTraNamNhuan (2024)
kiemTraNamNhuan (2000)
kiemTraNamNhuan (1998)
kiemTraNamNhuan (2012)
// Câu e 
function kiemTraKiTu(n){
    if(n = u,e,o,a,i){
        console.log(n,'Là Nguyên Âm')
    }
    else{
        console.log(n,'Là')
    }
}