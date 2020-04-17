/* Tạo mảng nhanvien gồm các phần tử 
    {name: "Nguyen",age:25,years:7.5}
    {name: "Thanh",age:20,years:8}
    {name: "Phong",age:22,years:10}
*/
var nhanvien = [
    {name: "Nguyen",age:25,years:2}
    {name: "Thanh",age:20,years:8}
    {name: "Phong",age:22,years:10}
]
// Viết hàm giển thị thông tin nhân viên có trong mảng
function display(nhanvien)
{
    console.log("\n");
    nhanvien.map(function(obj){
        console.log("Tên:" + obj.name + " Tuổi:" + obj.age + " years:" + obj.years);
    });
};

display(nhanvien);
// Thêm nhân viên vào cuối trong mảng
nhanvien.push({name: "Hau",age:28,years:7});
display(nhanvien);

// Thêm nhân viên vào đầu trong mảng
nhanvien.unshift({name: "Cuong",age:29,years:8});
display(nhanvien);

// Lấy nhân viên đầu mảng
console.log(nhanvien.shift());
display(nhanvien);

// Lấy nhân viên cuối mảng
console.log(nhanvien.pop({name: "cuong",age:29,years:8}));
display(nhanvien);
// Lấy danh sách nhân viên có số năm kinh nghiệm lớn hơn 5
display(nhanvien.filter(function (obj){
    if(obj.years>5) return true;
}))
// Tính tổng trung bình năm kinh nghiệm của toàn bộ nhân viên
var years = nhanvien.reduce(function(a,b){
    return a + b.years;
},0)/nhanvien.length;
console.log("Điểm trung bình: ",years);
// Sử dụng forEach để in ra thông tin nhân viên
console.log("forEach")
nhanvien.forEach(obj => console.log(obj));
// Sử dụng for để in ra thông tin nhân viên
console.log("For of");
for(let obj of nhanvien)
{
    console.log(obj);
}
// Sử dụng destructuring, forEach, arrow function
function display2({name,age})
{
    console.log(name + ":" + age);
}
nhanvien.forEach(obj => display2(obj));