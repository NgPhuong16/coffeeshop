import Link from "next/link";
import ProductList from "./productList";

export default function SpecialProducts(props) {
    return (
        <>
            <article className="">
                <div className="card border-0 px-0">
                    <div className="card-header row row-cols-2 border-0 ">
                        <div className="col">
                            <h5 className="text-warning">Awesome Shop</h5>
                            <h3 className="text-success fw-bold">Our Special Products</h3>
                        </div>
                        <div className="col">
                            <Link href="" className="btn btn-warning rounded-5 " >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <img src="/img/banner/vertical-banner-special.png" className="w-100 h-100" alt="" />
                            </div>
                            <div className="col-9 row row-cols-4 row-gap-4">
                                <ProductList data={props.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}