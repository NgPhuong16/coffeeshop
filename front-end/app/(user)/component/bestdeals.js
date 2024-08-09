import Link from "next/link";
import ProductList from "./productList";

export default function BestDeal(props) {
    return (
        <>
            <article className="">
                <div className="row row-cols-3 mb-3 gap-0">
                    <div className="col zoom-container">
                        <img src="/img/banner/banner-pr-1.png" className="w-100" alt="" />
                    </div>
                    <div className="col zoom-container">
                        <img src="/img/banner/banner-pr-2.png" className="w-100" alt="" />
                    </div>
                    <div className="col zoom-container">
                        <img src="/img/banner/banner-pr-3.png" className="w-100" alt="" />
                    </div>
                </div>
                <div className="card border-0 px-0">
                    <div className="card-header row row-cols-2 border-0 ">
                        <div className="col">
                            <div className=" card-title h4 fw-bold text-warning">Best Deals <span className="text-success">of this Week!</span></div>
                            <p>Những Khuyến Mãi Không Thể Bỏ Lỡ Tuần Này</p>
                        </div>
                        <div className="col">
                            <Link href="" className="btn btn-warning rounded-5 " >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div class="row row-cols-5">
                            <ProductList data={props.data} />
                        </div>
                    </div>
                </div>

            </article>

        </>
    );
}