import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="text-bg-dark">
                <div className="container p-5">
                    <div className="row row-cols-4">
                        <div class="col">
                            <Link className="navbar-brand" href="/"><h2><i class="fa-solid fa-mug-hot"></i> Phuong Coffee</h2></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div>
                                <i class="bi bi-geo-alt-fill"></i> Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM.
                            </div>
                            <div>
                                <i class="bi bi-telephone-fill"></i> 0822 164 203
                            </div>
                            <div>
                                <i class="bi bi-envelope-at-fill"></i> nguyenngocphuong160403@gmail.com
                            </div>
                            <div>
                                <i class="bi bi-clock-history"></i> Làm việc cả tuần từ 7:00 - 22:00

                            </div>
                        </div>
                        <div class="col">
                            <h3>Dịch vụ khách hàng</h3>
                            <div class="list-group border-0">
                                <a href="#" class="list-group-item border-0 text-bg-dark ">An toàn mua sắm</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Thông tin thanh toán</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Dịch vụ giao hàng</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Thanh toán online</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Dịch vụ trả hàng</a>
                            </div>
                        </div>
                        <div class="col">
                            <h3>Về chúng tôi</h3>
                            <div class="list-group border-0">
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Thông tin tuyển dụng</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Địa chỉ công ty</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Danh sách chi nhánh</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Góp ý khiếu nại</a>
                                <a href="#" class="list-group-item border-0 text-bg-dark ">Liên hệ chúng tôi</a>
                            </div>
                        </div>
                        <div class="col">
                            <h3>Đăng ký thành viên</h3>
                            <div><span>Đăng ký ngay để không bỏ lỡ bất kỳ khuyến mãi nào từ Latte House</span></div>
                            <div class="input-group my-3">
                                <input type="text" class="form-control" placeholder="Nhập email của bạn" aria-label="@gmail.com"
                                    aria-describedby="button-addon2" />
                                <button class="btn bi bi-send-fill btn-success" type="button" id="button-addon2"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}