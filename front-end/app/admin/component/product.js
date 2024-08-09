import Link from "next/link";

export default function Product(props) {
    const product = props.data;
    return (
        <>
            <tr>
                <td style={{ width: 64 + 'px' }}>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.image}`} class="w-100" />
                </td>
                <td class="text-start">
                    <strong>
                        {product.name}
                    </strong>
                    <br />
                    <small>
                        Id: <strong>{product._id}</strong> |
                        Category: <a href="#" class="text-decoration-none fw-bold">{product.category.name}</a>
                    </small>
                </td>
                <td>
                    {product.price.toLocaleString()} VND
                    {/* <br /><del>25,000,000đ</del> */}
                </td>

                <td>
                    {product.rating}<br />
                    {product.rating > 0 && (
                        <small className="text-warning">
                            {
                                [...Array(Math.floor(product.rating))].map(i => {
                                    return <i class="fas fa-xs fa-star"></i>
                                })
                            }
                            {
                                [...Array(5 - Math.floor(product.rating))].map(i => {
                                    return <i class="fas fa-xs fa-star-half-alt"></i>
                                })
                            }
                        </small>
                    )}
                    {
                        product.rating <= 0 && (
                            <small className="fw-bold text-warning">No rating</small>
                        )
                    }
                    {/* <i class="fas fa-star fa-xs text-warning"></i>
                    <i class="fas fa-star fa-xs text-warning"></i>
                    <i class="fas fa-star fa-xs text-warning"></i>
                    <i class="fas fa-star fa-xs text-warning"></i>
                    <i class="far fa-star fa-xs text-warning"></i> */}
                </td>
                <td>
                    <a href="#" target="_blank" class="btn btn-primary btn-sm">
                        <i class="fas fa-eye fa-fw"></i>
                    </a>
                    <Link href={`/admin/product/edit/${product._id}`} class="btn btn-outline-warning btn-sm">
                        <i class="fas fa-pencil fa-fw"></i>
                    </Link>
                    <a href="#" class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-times fa-fw"></i>
                    </a>
                </td>
            </tr>
        </>
    );
}