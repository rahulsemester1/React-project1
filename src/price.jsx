import "./price.css";

export default function Price({oldPrice,newPrice}){

    let styles={
        backgroundColor:"#e0c367",
        height:"40px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",

    }
    return(
        <div className="price" style={styles}>
              <span style={ {textDecorationLine:"line-through"} }>{oldPrice}</span>
              &nbsp; &nbsp;
              &nbsp; &nbsp;
              <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
       
    )
}