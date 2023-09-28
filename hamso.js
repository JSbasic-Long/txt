// Bài 3
// 
function tinhTong(a,b){
    const ketQua = a + b
    return ketQua
}
const kq1 = tinhTong(1,2)
console.log(kq1)
//
function tinhHieu(a,b){
    const ketQua = a - b
    return ketQua
}
const kq2 = tinhHieu(1,2)
console.log(kq2)
//
function tinhTich(a,b){
    const ketQua = a * b
    return ketQua
}
const kq3 = tinhTich(1,2)
console.log(kq3)
//
function tinhThuong(a,b){
    const ketQua = a / b
    return ketQua 
}
const kq4 = tinhThuong(1,2)
console.log(kq4)
// Câu b :
function trungBinhCong(a,b){
    const ketQua = (a + b)/2
    return ketQua
}
const kq5 = trungBinhCong(1,2)
console.log(kq5)
// Câu c :
function giaTriBieuThuc(x,y,z){
    const bieuThuc = x*x + 2*x + 1
    return bieuThuc
}
function giaTriBieuThuc2(x,y,z){
    const bieuThuc = x*x*x - 3*x*y - 5*y + 3*y*y
    return bieuThuc
}
function giaTriBieuThuc3(x,y,z){
    const bieuThuc = (x*y)*(x*y) - 2*x*x*y + 13*y
    return bieuThuc
}
function giaTriBieuThuc4(x,y,z){
    const bieuThuc = 4*x*x*x + 3*x*y + y*y - (2*x*x - 3*y)
    return bieuThuc
}
function giaTriBieuThuc5(x,y,z){
    const bieuThuc = ((5*x*x) / (4*x*y)) + y*y
    return bieuThuc
}
function giaTriBieuThuc6(x,y,z){
    const bieuThuc = x*x - ((2*z*x*y) / (y*y)) + 5*x - 2*y*y + 4*x*z*z*z + z*z*z
    return bieuThuc
}
const kq6 = giaTriBieuThuc3(3,4,6)
console.log(kq6)
// Câu d :
function hinhTron(d,Pi){
    const chuVi = d * Pi
    return chuVi
}
const kq7 = hinhTron(5,3.14)
console.log(kq7)
console.log('Diện tích =',(kq7*kq7)*3.14)
// Câu e :
function chuNhat(a,b){
    const chuVi = (a + b)/2
    return chuVi
}
const kq8 = chuNhat(15,10)
console.log(kq8,'Câu e')
function chuNhat1(a,b){
    const dienTich = a * b
    return dienTich
}
const kq9 = chuNhat1(15,10)
console.log(kq9,'Câu e')
// Câu g : 
function quangDuongg(Tg,Vg){
    const ketQua = Vg * Tg
    return ketQua 
}
const kq10 = quangDuongg(150/60,60)
console.log(kq10,'Câu g')
// Câu h :
function quangDuongh(Vh,Th){
    const ketQua = Vh * Th
    return ketQua
}
const kq11 = quangDuongh(15.2, 3)
console.log(kq11,'Câu h')
// Câu i :
function quangDuongi(Ti,Vi){
    const ketQua = Ti * Vi
    return ketQua
}
const kq12 = quangDuongi(200/60,42,'Câu i')
console.log(kq12)
// Câu j :
function theTichKhoiGo(a,b,c){
    const khoi1 = a * b * c
    const khoi2 = (a+a+a) * b *c 
    return khoi1 + khoi2
}
const theTich = theTichKhoiGo(8,5,6)
console.log(theTich)