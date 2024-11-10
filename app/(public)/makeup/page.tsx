import Image from "next/image";
import palette from "../glitter eye palette.jpg"
import loose from "../loose powder.jpg"
import liquid from "../liquad foundation.webp"
import nail from "../nail polish.jpg"
import foundation from "../miss rose foundation.webp"
import lipstick from "../2in1.webp"
import eyeshadow from "../eyeshadow palette.webp"
import mascara from "../bob mascara.jpg"
import eyeliner from "../eneded eyeliner liquid & pencil 6950.webp"


export default function makeup() {
    return(
      <div id="main">
            <div className="eyeshadow">
              <Image
                 src={eyeshadow}
                 width={280}
                 height={250}
                 alt="eyeshadow" 
              />
              <h3>EyeShadow Palette</h3>
              <p>Rs.1,525.00</p>
         </div>

         <div className="lipstick">
             <Image
                src={lipstick}
                width={280}
                height={250}
                alt="lipstick"
             />
             <h3>2in1 Lipstick</h3>
             <p>Rs.975.00</p>
         </div>

         <div className="palette">
             <Image
               src={palette}
               width={280}
               height={250}
               alt="palette"
              />
             <h3>Glitter palette</h3>
             <p>Rs.100.00</p>
            </div>

            <div className="mascara">
             <Image
                src={mascara}
                width={280}
                height={250}
                alt="mascara"
             />
             <h3>Mascara</h3>
             <p>Rs.450.00</p>
         </div>

            <div className="miss">
             <Image
               src={foundation}
               width={280}
               height={290}
               alt="foundation"
              />
             <h3>Miss Rose Flawless <br /> Foundation</h3>
             <p>Rs.450.00</p>
          </div>

          <div className="loose">
             <Image
                src={loose}
                width={280}
                height={260}
                alt="loose"
               />
              <h3>Loose Powder</h3>
              <p>Rs.500.00</p>
           </div> 

          <div className="lqd">
             <Image
               src={liquid}
               width={280}
               height={250}
               alt="liquid"
              />
              <h3>Liquid Foudation</h3>
              <p>Rs.675.00</p>
           </div>

           <div className="nail">
             <Image
               src={nail}
               width={280}
               height={250}
               alt="nail"
               />
             <h3>Red Nail Polish</h3>
             <p>Rs.200.00</p>
           </div>

           <div className="eyeliner">
             <Image
                src={eyeliner}
                width={280}
                height={250}
                alt="eyeliner"
             />
             <h3>Water Prove Eyeliner</h3>
             <p>Rs.475.00</p>
         </div>

        </div>
    )
};