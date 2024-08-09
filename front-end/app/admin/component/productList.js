import Product from "./product";

export default function ProductList(props) {
    return (
        <>
            {
                props.data.map(item => {
                    return (
                        <Product data={item} />
                    )
                })
            }

        </>
    );
}