// --- LOGIC GIỎ HÀNG (BE BASIC) ---

// 1. Hàm thêm sản phẩm vào bộ nhớ
function themVaoGio(ten, gia, hinh) {
    // Lấy giỏ hàng cũ từ LocalStorage (nếu chưa có thì tạo mảng rỗng)
    let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];

    // Kiểm tra xem sản phẩm này đã có trong giỏ chưa
    let sanPhamCu = gioHang.find(sp => sp.ten === ten);

    if (sanPhamCu) {
        // Nếu có rồi -> Tăng số lượng lên 1
        sanPhamCu.soLuong += 1;
    } else {
        // Nếu chưa có -> Thêm mới vào
        gioHang.push({ ten: ten, gia: gia, hinh: hinh, soLuong: 1 });
    }

    // Lưu ngược lại vào bộ nhớ
    localStorage.setItem('gioHang', JSON.stringify(gioHang));

    // Báo thành công (FE)
    alert("Đã thêm [" + ten + "] vào giỏ hàng thành công!");
}

// 2. Hàm lấy danh sách để hiển thị (Dùng cho trang Giỏ hàng)
function layGioHang() {
    return JSON.parse(localStorage.getItem('gioHang')) || [];
}

// 3. Hàm xóa sản phẩm
function xoaKhoiGio(tenSP) {
    let gioHang = layGioHang();
    // Lọc bỏ sản phẩm có tên trùng khớp
    gioHang = gioHang.filter(sp => sp.ten !== tenSP);
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
    location.reload(); // Tải lại trang để cập nhật bảng
}

// 4. Hàm tính tổng tiền
function tinhTongTien() {
    let gioHang = layGioHang();
    let tong = 0;
    gioHang.forEach(sp => {
        tong += sp.gia * sp.soLuong;
    });
    return tong.toLocaleString('vi-VN') + 'đ';
}