import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
        <Product title="Laptop" price={30000} features={["compatible","mobile","durable"]} /> 
        <Product title="Mobile" price={50000} features={["fast-charging","cheap","durable"]} /> 
        <Product title="Pen" price={45000} features={["light-Weight","mobile","long-lasting"]}/> 
        </>
    )
}

export default ProductTab;