"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    const pathName = usePathname();
    const cart = useSelector((state) => state.cart);
    const totalItem = useMemo(() => {
        return cart.reduce((total, item) => Number(total) + Number(item.quantity), 0)
    }, [cart]);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark mb-3" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" href="/"><i class="fa-solid fa-mug-hot"></i> Phuong Coffee</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName == "/" ? "active" : ""}`} aria-current="page" href="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName == "/menu" ? "active" : ""}`} href="/menu">Menu</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathName == "/cart" ? "active" : ""}`} href="/cart">
                                    Giỏ hàng
                                    <span class="badge text-bg-secondary ms-1">{totalItem}</span>
                                </Link>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tài khoản
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className={`dropdown-item ${pathName == "/login" ? "active" : ""}`} href="/login">Đăng nhập</Link></li>
                                    <li><Link className={`dropdown-item ${pathName == "/register" ? "active" : ""}`} href="/register">Đăng ký</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="/">Đăng xuất</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav >
        </>
    );
}