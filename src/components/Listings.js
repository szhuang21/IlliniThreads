import React from "react";
import shirt from "../images/shirt.jpeg";
import pants from "../images/pants.jpeg";
// import logo from "../images/logo.png";
import ExperienceCard from "./ListingCard";

const Listings = () => {
  return (
    <div class="text-left">
      <div class="text-xl text-left font-bold font-poppins pb-8">Listings</div>
      {/* <logo/> */}
      <div class="flex flex-wrap">
        <ExperienceCard
          name="Shirt"
          price="$10/day"
          about="Vintage Adidas beige t shirt Size - medium (could fit a small too) Excellent condition"
          skills={["Excellent", "Vintage", "Beige"]}
          image={shirt}
        />

        <ExperienceCard
          name="American Rag Cie Women's Cream and Tan Trousers"
          price="$5/day"
          about={
            "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13"
          }
          skills={["Used-Excellent", "American Rag Cie"]}
          image={pants}
        />
      </div>
    </div>
  );
};

export default Listings;
