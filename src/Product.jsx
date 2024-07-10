function Product({title,price,features}){
// let style={backgroundColor:price >30000 ?"pink" : " "};
    return(
     <div className="product" style={{backgroundColor:price >30000 ?"pink" : " "}}>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p>
            {features.map((feature)=> <li>{feature}</li>
             )}
        </p>
        <p>{price>30000 ? "Discount of 5%" : ""}</p>
        </div>
    );
}

export default Product;