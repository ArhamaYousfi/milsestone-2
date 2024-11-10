import Image from "next/image";
import React from "react";
import image from "../(public)/makeup.webp"
import nail from "../(public)/nail polish.jpg"
import liquid from "../(public)/liquad foundation.webp"
import loose from "../(public)/loose powder.jpg"
import sunscreen from "../(public)/sunsreen.jpg"
import glitter from "../(public)/glitter eye palette.jpg"

export default function Home() {
  return (
<div>

    <div className="img">
       <Image
          src={image}
          width={1270}
          height={450}
          alt="Picture of the makeup"
        />
    </div>

    <div className="all">
      <h1>All Collections</h1>
    </div>

  <div id="collimg">
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

    <div className="liquid">
        <Image
          src={liquid}
          width={280}
          height={250}
          alt="liquid"
        />
        <h3>Liquid Foudation</h3>
        <p>Rs.675.00</p>
    </div>

    <div className="loose">
        <Image
          src={loose}
          width={280}
          height={250}
          alt="loose"
        />
        <h3>Loose Powder</h3>
        <p>Rs.500.00</p>
    </div>
     
    <div className="sunscreen">
        <Image
          src={sunscreen}
          width={280}
          height={250}
          alt="sunscreen"
        />
        <h3>Light Moisture Mineral <br />Sunscreen</h3>
        <p>Rs.875.00</p>
    </div>

    <div className="glitter">
        <Image
          src={glitter}
          width={280}
          height={250}
          alt="glitter"
        />
        <h3>Glitter palette</h3>
        <p>Rs.100.00</p>
    </div>
  </div>

    <div id="brand">
      <h1>Foundation Of The Brand</h1>
      <p>The foundation of Makeup City is built on the belief that beauty should be inclusive,<br /> empowering, and accessible to everyone. With a mission to offer high-quality, diverse makeup products at affordable prices, the brand celebrates individuality and self-expression. Makeup City values inclusivity, providing a wide range of shades for all skin tones, and is committed to sustainability and cruelty-free practices. At its core, the brand aims to help customers feel confident and beautiful, while making apositive impact on the world.</p>
    </div>

  </div>
  );
}
