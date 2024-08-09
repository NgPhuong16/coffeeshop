import Link from "next/link";
import ProductList from "./productList";

export default function BestSeller(props) {
    return (
        <>
            <article class="">
                <div className="card border-0 px-0">
                    <div className="card-header row row-cols-2 border-0 ">
                        <div className="col">
                            <h5 className="text-warning">Best Sellers</h5>
                            <h3 className="text-success fw-bold">Best Offers View</h3>
                        </div>
                        <div className="col">
                            <Link href="" className="btn btn-warning rounded-5 " >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-4 ">
                            <ProductList data={props.data} />
                        </div>
                    </div>
                </div>
            </article>
            <div className="row">
                <div class="card my-3 col-6 border-0">
                    <img src="/img/banner/banner-pr-1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card my-3 col-6 border-0">
                    <img src="/img/banner/banner-pr-2.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

        </>
    );
}