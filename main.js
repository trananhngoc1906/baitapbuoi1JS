//Bài 1: tính tiền lương nhân viên

/**
 * -Đầu vào
 *  + LUONGNGAY: 100000
 *  + soNgayLam: 20
 * 
 * -Xử lý
 *  + tongLuong = LUONGNGAY * soNgayLam
 * 
 * -Đầu ra
 *  + tongLuong = ?
 */

const LUONGNGAY = 100000;
var soNgayLam = 20;

var tongLuong = LUONGNGAY * soNgayLam;
console.log('Tổng lương là: ' + tongLuong);


// Bài 2: Tính giá trị trung bình

/**
 * -Đầu vào
 *  + number1: 10
 *  + number2: 20
 *  + number3: 30
 *  + number4: 40
 *  + number5: 50
 * 
 * -Xử lý
 *  + tong = number1 + number2 + number3 + number4 + number5
 *  + trungBinh = tong / 5
 * 
 * -Đầu ra
 *  + trungBinh = ?
 * 
 */

var number1 = 10;
var number2 = 20;
var number3 = 30;
var number4 = 40;
var number5 = 50;

var tong = number1 + number2 + number3 + number4 + number5;
var trungBinh = tong / 5;

console.log('Trung bình là: ' + trungBinh);

//Bài 3: Quy đổi tiền

/**
 * -Đầu vào
 *  + TIGIA : 23500
 *  + usdMuonDoi: 5
 * 
 * -Xử lý
 *  + tienVND = TIGIA * usdMuonDoi
 * 
 * -Đầu ra
 *  + tienVND = ? 
 */

const TIGIA = 23500;
var usdMuonDoi = 5;

var tienVND = TIGIA * usdMuonDoi;
console.log('Số tiền nhận lại là: ' + tienVND);

//Bài 4: Tính diện tích, chu vi hình chữ nhật

/**
 * -Đầu vào
 *  + chieuDai: 40
 *  + chieuRong : 20
 * 
 * -Xử lý
 *  + chuVi = chieuDai * 2 + chieuRong * 2
 *  + dienTich = chieuDai * chieuRong
 * 
 * -Đầu ra
 *  + chuVi = ?
 *  + dienTich = ?
 */

var chieuDai = 40;
var chieuRong = 20;

var chuVi = chieuDai * 2 + chieuRong * 2;
var dienTich = chieuDai * chieuRong;

console.log('Chu vi là: ' + chuVi);
console.log('Diện tích là: ' + dienTich);

//Bài 5: Tính tổng 2 ký số

/**
 * -Đầu vào
 *  + number: 46
 * 
 * -Xử lý
 *  + soHangChuc = number / 10
 *  + soHangDV = number % 10
 *  + tong = soHangChuc + soHangDV
 * 
 * -Đầu ra
 *  + tong = ?
 * 
 */


var number = 83;

var soHangChuc = Math.floor(number / 10);
var soHangDV = number % 10;

var tong = soHangChuc + soHangDV;
console.log('Tổng 2 ký số là: ' + tong);
