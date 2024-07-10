import Price from "./price.jsx";

export default function CardProduct({title,ind}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];
    let description=[
        ["8000 DPI","5 Programmable Buttons"],
        ["Intuitive Touch Surface","Designed for ipad Pro"],
        ["Designed for ipad Pro","Intuitive Touch Surface"],
        ["Wireless Mouse 2.4Ghz","Optical Orientation"]
    ];
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description[ind][0]}</p>
            <p>{description[ind][1]}</p>
            <Price oldPrice={oldPrice[ind]} newPrice={newPrice[ind] }  />
        </div>
    )
}