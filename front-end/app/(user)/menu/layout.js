"use client";
import Link from "next/link";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sortDefault, sortASC, sortDESC } from "@/redux/slices/sortSlice";
import { setMax, setMin } from "@/redux/slices/filterSlice";

export default function Layout({ children }) {
    const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
    const { data: categoryList, error: errorCategory, isLoading: isLoadingCategory } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/categories`, fetcher);
    const dispatch = useDispatch();
    const sortType = useSelector(state => state.sort);
    if (errorCategory) return <strong>Có lỗi xảy ra</strong>
    if (isLoadingCategory) return <strong>Đang load</strong>
    const pathName = usePathname();
    return (
        <>
            <div className="container my-5">
                <h1>Menu</h1>
                <div className="row">
                    <div className="col-sm-3 ">
                        <div class="card mb-3">
                            <div class="card-header text-bg-dark">
                                <h5 className="mb-0">Danh muc</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <Link href="/menu" className={`text-decoration-none list-group-item list-group-item-action ${pathName == "/menu" ? "text-success fw-bold" : ""}`}>
                                    Tất cả
                                </Link>
                                {
                                    categoryList.map(item => {
                                        return (
                                            <>
                                                <Link key={item._id} href={`/menu/${item._id}`} className={`text-decoration-none list-group-item list-group-item-action ${pathName == "/menu/" + item._id ? "text-success fw-bold" : ""}`}>
                                                    {item.name}
                                                </Link>
                                            </>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header text-bg-dark">
                                <h5 className="mb-0">Sắp xếp</h5>
                            </div>
                            <div className="card-body">
                                <div className="btn-group w-100">
                                    <button className={`btn btn-${sortType == null ? "" : "outline-"}dark `} onClick={() => dispatch(sortDefault())}>Mặc định</button>
                                    <button className={`btn btn-${sortType == "ASC" ? "" : "outline-"}dark `} onClick={() => dispatch(sortASC())}>Giá tăng</button>
                                    <button className={`btn btn-${sortType == "DESC" ? "" : "outline-"}dark `} onClick={() => dispatch(sortDESC())}>Giá giảm</button>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header text-bg-dark">
                                <h5 className="mb-0">Khoảng giá</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group">

                                    <div className="input-group-text">Từ</div>
                                    <input className="form-control" type="number" min={10000} max={100000} step={5000} defaultValue={10000} onChange={(e) => dispatch(setMin(e.target.value))} />


                                    <div className="input-group-text">Đến</div>
                                    <input className="form-control" type="number" min={10000} max={100000} step={5000} defaultValue={9999999} onChange={(e) => dispatch(setMax(e.target.value))} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 row row-cols-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}