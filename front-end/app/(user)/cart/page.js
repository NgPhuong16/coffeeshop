"use client";
import { removeCart, removeItem, updateItem } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    // const cart = [
    //     {
    //         id: 'sdfsdfsdfsdf',
    //         name: 'Tra sua',
    //         price: 123,
    //         image: "product/trasua.png",
    //         quantity: 2,
    //         size: 'S'
    //     },
    //     {
    //         id: 'sdfsdfsdfsdf1',
    //         name: 'Tra sua phuc long',
    //         price: 123,
    //         image: "product/trasua.png",
    //         quantity: 3,
    //         size: 'S'
    //     },

    // ]
    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cart);
    const total = cart.reduce((total, item) => total += item.price * item.quantity, 0);
    const router = useRouter();
    const [fullName, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const closeBtn = useRef();
    const submit = (e) => {
        e.preventDefault();
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    fullName,
                    phone,
                    address,
                },
                detail: cart,
                total_money: total,
            })
        }).then((res) => {
            alert("Đặt hàng thành công!");
            dispatch(removeCart());
            closeBtn.current.click();
            router.push("/");
        });
    }
    return (
        <>
            <div className="container my-5">
                <h1>Gio hang</h1>
                <div className="row">
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th className="text-end" scope="col">Giá bán</th>
                                    <th className="text-center" scope="col">Số lượng</th>
                                    <th className="text-end" scope="col">Thành tiền</th>
                                    <th className="text-end" scope="col">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => {
                                    return (
                                        <>
                                            <tr key={product.id} className="align-middle">
                                                <td>
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.image}`} className="img-thumbnail me-3" style={{ width: 100 + 'px' }} alt="..." />
                                                    <strong>{product.name}</strong>  ({product.size})
                                                </td>
                                                <td className="text-end">{product.price.toLocaleString()} VND</td>
                                                <td className="text-end">
                                                    <input type="number" min={1} className="form-control m-auto" style={{ width: 100 + 'px' }} defaultValue={product.quantity}
                                                        onChange={(e) => dispatch(
                                                            updateItem({ product, quantity: e.target.value, size: product.size })
                                                        )} />
                                                </td>
                                                <td className="text-end">{(product.price * product.quantity).toLocaleString()} VND</td>
                                                <td className="text-end">
                                                    <button onClick={() => dispatch(removeItem({ product, size: product.size }))} className="btn btn-sm btn-outline-danger"><i class="fa-solid fa-xmark"></i></button>
                                                </td>
                                            </tr >
                                        </>
                                    )
                                })}

                            </tbody>
                            <tfoot>
                                <tr>
                                    {/* <th colSpan={3} className="text-end">Tổng thành tiền</th>
                                    <th className="text-end">{total.toLocaleString()} VND</th> */}
                                    <th colSpan={5} className="text-end">
                                        <button onClick={() => dispatch(removeCart())} className="btn btn-sm btn-outline-danger">Xóa tất cả</button>
                                    </th>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Thông tin thanh toán</h3>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr className="align-middle">
                                            <th>Tổng thành tiền</th>
                                            <th className="text-end text-success">{total.toLocaleString()} VND</th>
                                        </tr>
                                        {/* <tr className="align-middle">
                                            <th>Mã giảm giá</th>
                                            <td className="text-end"><input type="text" placeholder="Mã giảm giá nếu có" style={{ borderOpacity: 0.25 }} className="border-2 border-warning rounded-2 p-2" /></td>
                                        </tr> */}
                                        <tr className="align-middle">
                                            <th colSpan={2} className="text-center">
                                                <Link href="" className="btn btn-danger w-100">Đặt hàng</Link>
                                            </th>
                                        </tr>
                                        <tr className="align-middle">
                                            <td colSpan={2} className="">
                                                <button type="button" className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Đặt hàng
                                                </button>
                                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <form onSubmit={submit} className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Thông tin giao hàng</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn} ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div class="mb-3">
                                                                    <label for="fullName" class="form-label">Họ và tên</label>
                                                                    <input type="text" class="form-control" id="fullName" onChange={(e) => setFullname(e.target.value)} />
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="phone" class="form-label">Số điện thoại</label>
                                                                    <input type="text" class="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} />
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="address" class="form-label">Địa chỉ</label>
                                                                    <input type="text" class="form-control" id="address" onChange={(e) => setAddress(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                                                <button type="submit" className="btn btn-dark">Xác nhận</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}