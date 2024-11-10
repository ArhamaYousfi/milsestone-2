import React from "react"

export default function Header() {
    return (
      <div className="header">
        <ul>
          <h1>Make<span>Up</span>Cit<span>Y</span></h1>
          <li><a href="/makeup">MakeUp</a></li>
          <li><a href="/skincare">SkinCare</a></li>
          <li><a href="/bestseller">Bestsellers</a></li>
          <li><a href="/aboutUs">About Us</a></li>
        </ul>
      </div>
    )
};