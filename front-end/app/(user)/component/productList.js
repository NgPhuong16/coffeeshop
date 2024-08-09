import { useSelector } from "react-redux";
import Product from "./product";
import { useRef, useState } from "react";

export default function ProductList(props) {
    let data = props.data;
    let dataDefault = useRef([...props.data]);

    const { min, max } = useSelector((state) => state.filter);
    // console.log(min);
    // console.log(max);
    const filterData = data.filter((item) => min <= item.price && item.price <= max);
    // console.log(data);

    const sortType = useSelector((state) => state.sort);
    let sortedData;
    if (sortType == "ASC") {
        sortedData = filterData.sort((a, b) => a.price - b.price);
    } else if (sortType == "DESC") {
        sortedData = filterData.sort((a, b) => b.price - a.price);
    } else {
        sortedData = filterData;
    }
    return (
        <>
            {/* <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2"> */}
            {
                sortedData.map(item => {
                    return (
                        <div key={item.id} className="col">
                            <Product data={item} />
                        </div>
                    )
                })
            }

            {/* </div> */}
        </>
    )
}