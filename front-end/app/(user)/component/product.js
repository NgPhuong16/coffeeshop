import Link from "next/link";
import AddCartBtn from "./addCartBtn";

export default function Product(props) {
    const product = props.data;
    return (
        <>
            <div className="card p-3">
                <Link href={`/product/${product._id}`} className="text-dark text-decoration-none">
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.image}`} className="card-img-top" alt="..." />
                </Link>

                <div className="card-body">
                    <Link href={`/product/${product._id}`} className="text-dark text-decoration-none">
                        <h5 className="card-title text-truncate">{product.name}</h5>
                    </Link>
                    {product.rating > 0 && (
                        <small className="text-warning">
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
                        </small>
                    )}
                    {
                        product.rating <= 0 && (
                            <small className="fw-bold text-warning">No rating</small>
                        )
                    }

                    <p className="card-text">{product.price.toLocaleString()} VND</p>
                    <AddCartBtn product={product} quantity={1} size="S">
                        Đặt mua
                    </AddCartBtn>
                </div>
            </div>
        </>
    );
}