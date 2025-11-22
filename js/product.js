
$(document).ready(function () {
    $("#of27-btn1").click(function () { 
        $("#of27-pic").fadeOut(500,function (param) {
            $("#of27-pic").attr("src", "../../picture/product/of27-1.jpg");
        });
        $("#of27-pic").fadeIn();
    });
    
    $("#of27-btn2").click(function () { 
        $("#of27-pic").fadeOut(500,function (param) {
            $("#of27-pic").attr("src", "../../picture/product/of27-2.jpg");
        });
        $("#of27-pic").fadeIn();
    });
    
    $("#of02-btn1").click(function () { 
        $("#of02-pic").fadeOut(500,function (param) {
            $("#of02-pic").attr("src", "../../picture/product/of02-1.jpg");
        });
        $("#of02-pic").fadeIn();
    });

    $("#of02-btn2").click(function () { 
        $("#of02-pic").fadeOut(500,function (param) {
            $("#of02-pic").attr("src", "../../picture/product/of02-2.jpg");
        });
        $("#of02-pic").fadeIn();
    });

    $("#of02-btn3").click(function () { 
        $("#of02-pic").fadeOut(500,function (param) {
            $("#of02-pic").attr("src", "../../picture/product/of02-3.jpg");
        });
        $("#of02-pic").fadeIn();
    });

    $("#of07-btn1").click(function () { 
        $("#of07-pic").fadeOut(500,function (param) {
            $("#of07-pic").attr("src", "../../picture/product/of07-1.jpg");
        });
        $("#of07-pic").fadeIn();
    });

    $("#of07-btn2").click(function () { 
        $("#of07-pic").fadeOut(500,function (param) {
            $("#of07-pic").attr("src", "../../picture/product/of07-2.jpg");
        });
        $("#of07-pic").fadeIn();
    });

    $("#of07-btn3").click(function () { 
        $("#of07-pic").fadeOut(500,function (param) {
            $("#of07-pic").attr("src", "../../picture/product/of07-3.jpg");
        });
        $("#of07-pic").fadeIn();
    });

    $("#of18-btn1").click(function () { 
        $("#of18-pic").fadeOut(500,function (param) {
            $("#of18-pic").attr("src", "../../picture/product/of18-1.jpg");
        });
        $("#of18-pic").fadeIn();
    });

    $("#of18-btn2").click(function () { 
        $("#of18-pic").fadeOut(500,function (param) {
            $("#of18-pic").attr("src", "../../picture/product/of18-2.jpg");
        });
        $("#of18-pic").fadeIn();
    });

    $("#of18-btn3").click(function () { 
        $("#of18-pic").fadeOut(500,function (param) {
            $("#of18-pic").attr("src", "../../picture/product/of18-3.jpg");
        });
        $("#of18-pic").fadeIn();
    });

});

// Hàm thêm vào giỏ hàng (Giả lập BE lưu dữ liệu)
function themVaoGio(tenSP, giaSP, hinhSP) {
    // 1. Lấy giỏ hàng cũ từ bộ nhớ ra (nếu có)
    let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];

    // 2. Tạo sản phẩm mới
    let sanPhamMoi = {
        ten: tenSP,
        gia: giaSP,
        hinh: hinhSP,
        soLuong: 1
    };

    // 3. Kiểm tra xem sản phẩm đã có trong giỏ chưa
    let daCo = false;
    for(let i = 0; i < gioHang.length; i++){
        if(gioHang[i].ten === tenSP){
            gioHang[i].soLuong++; // Nếu có rồi thì tăng số lượng
            daCo = true;
            break;
        }
    }

    // 4. Nếu chưa có thì thêm mới
    if(!daCo) gioHang.push(sanPhamMoi);

    // 5. Lưu ngược lại vào bộ nhớ (BE basic là đây)
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
    capNhatSoLuongIcon(); 
    
    // 6. Thông báo
    alert("Đã thêm " + tenSP + " vào giỏ hàng!");
}

// --- CẬP NHẬT SỐ LƯỢNG TRÊN ICON GIỎ HÀNG ---

function capNhatSoLuongIcon() {
    // 1. Lấy giỏ hàng từ bộ nhớ
    let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
    
    // 2. Tính tổng số lượng
    let tongSoLuong = 0;
    gioHang.forEach(sp => {
        tongSoLuong += sp.soLuong;
    });

    // 3. Hiển thị lên icon (nếu tìm thấy thẻ có id="cart-count")
    let iconSoLuong = document.getElementById('cart-count');
    if (iconSoLuong) {
        iconSoLuong.innerText = tongSoLuong;
    }
}

// Gọi hàm này ngay khi trang web tải xong để cập nhật số luôn
window.onload = function() {
    capNhatSoLuongIcon();
    
    // Nếu có logic khác cần chạy khi load trang, hãy để ở đây...
};