import Image from "next/image"
import best from "../vitamin C & E.jpg"
import foundation from "../miss rose foundation.webp"



export default function bestseller() {
    return(
      <div className="bestseller">

        <div className="best">
        <Image
            src={best}
            width={200}
            height={300}
            alt="best"
         />
         <h3>Vitamin C & E Serum</h3>
         <p>Rs.1,225.00</p>
         </div>

         <div className="foundation">
        <Image
            src={foundation}
            width={200}
            height={300}
            alt="foundation"
         />
         <h3>Miss Rose Flawless <br /> Foundation</h3>
         <p>Rs.450.00</p>
         </div>

      </div>
    )
};