import Image from "next/image";
import React from "react";
import cleanser from "../Cleanser.jpg"
import gel from "../Gel Moisturizer.webp"
import glow from "../glow facial toner.webp"
import hand from "../hand and feet brightening cream.jpg"
import sunscreen from "../sunsreen.jpg"
import vitamin from "../vitamin C & E.jpg"

export default function skincare(){
    return(
       <div className="skincare">

       <div className="cleanser">
        <Image
          src={cleanser}
          width={200}
          height={300}
          alt="Cleanser"
        />
        <h3>Daily Purifying Rice <br /> Cleanser(Face Wash)</h3>
        <p>Rs.945.00</p>
        </div>

        <div className="gel">
        <Image
            src={gel}
            width={200}
            height={300}
            alt="gel"
         />
         <h3>Cloud - Oil Free Gel <br /> Moisturizer</h3>
         Rs.1,365.00
        </div>

        <div className="glow">
        <Image
            src={glow}
            width={200}
            height={300}
            alt="glow"
         />
         <h3>Glow Facial Toner(for <br /> Open Pores)</h3>
         <p>Rs.945.00</p>
        </div>

        <div className="hand">
        <Image
            src={hand}
            width={200}
            height={300}
            alt="hand"
         />
         <h3>Hand & Feet Repair <br />Brightening Cream</h3>
         <p>Rs.875.00</p>
        </div>

        <div className="sunscreen">
        <Image
            src={sunscreen}
            width={200}
            height={300}
            alt="sunscreen"
         />
         <h3>Light Moisture Mineral <br />Sunscreen</h3>
         <p>Rs.875.00</p>
        </div>

        <div className="vitamin">
        <Image
            src={vitamin}
            width={200}
            height={300}
            alt="vitamin"
         />
         <h3>Vitamin C & E Serum</h3>
         <p>Rs.1,225.00</p>
         </div>

       </div>
    )
};