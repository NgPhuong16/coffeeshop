"use client";
import { addItem } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import AddCartBtn from "../../component/addCartBtn";

export default function ProductDetail({ params }) {
    const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
    const { data: product, error: errorProduct, isLoading: isLoadingProduct } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/products/id/${params.id}`, fetcher
        // Đây là đường link lấy API
        // params.id lấy id từ trên url
    );
    const dispatch = useDispatch();
    const [size, setSize] = useState('S');
    const [quantity, setQuantity] = useState(1);

    if (errorProduct) return <strong>Error</strong>
    if (isLoadingProduct) return <strong>Loading...</strong>
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.image}`} className="w-100" />
                    </div>
                    <div className="col-md-8">
                        <h1>{product.name}</h1>
                        Danh mục:
                        <Link href={`/menu/${product.categoryId}`}>
                            {product.category.name}
                        </Link> <br />
                        <div className="text-warning">
                            {product.rating} <br />
                            {
                                [...Array(Math.floor(product.rating))].map(i => {
                                    return <i class="fa-solid fa-star"></i>
                                })
                            }
                            {
                                [...Array(5 - Math.floor(product.rating))].map(i => {
                                    return <i class="fa-regular fa-star"></i>
                                })
                            }
                            {/* <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-solid fa-star-half"></i> */}
                        </div>
                        <div className="display-1">{product.price.toLocaleString()} VND</div>
                        <div className="row">
                            <div className="col-md-6">
                                Size:
                                <select className="form-select mb-3" onChange={(e) => setSize(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                Số lượng:
                                <input type="number" className="form-control" defaultValue={1} onChange={(e) => setQuantity(e.target.value)} />
                            </div>

                        </div>

                        {/* <button onClick={() => dispatch(addItem({ product, quantity, size }))} className="btn btn-dark btn-lg w-100 mb-3">
                            Thêm vào giỏ hàng
                        </button> */}
                        <AddCartBtn className="btn-lg mb-3" product={product} quantity={quantity} size={size}>
                            Thêm vào giỏ hàng
                        </AddCartBtn>
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}