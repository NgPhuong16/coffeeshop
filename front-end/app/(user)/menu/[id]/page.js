"use client";
import ProductList from "../../component/productList";
import useSWR from "swr";

export default function MenuDetail({ params }) {
    const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
    const { data: productList, error: errorProduct, isLoading: isLoadingProduct } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products/byCategory/${params.id}`, fetcher);
    if (errorProduct) return <strong>Có lỗi xảy ra</strong>
    if (isLoadingProduct) return <strong>Đang load</strong>
    return (
        <>
            <ProductList data={productList} />
        </>
    )
}