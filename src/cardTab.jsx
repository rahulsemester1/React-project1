import CardProduct from "./cardProduct.jsx";

function CardTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div className="tab" style={styles}>
        <CardProduct title="Logitech MX Player" ind={0}/> 
        <CardProduct title="Apple Pencil (2nd Gen)" ind={1}/> 
        <CardProduct title="Zebronics" ind={2}/> 
        <CardProduct title="Petronics Toad" ind={3}/> 
        </div>
    )
}

export default CardTab;