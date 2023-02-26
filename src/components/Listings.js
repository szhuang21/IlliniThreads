import React, {useState} from "react";
import shirt from "../images/shirt.jpeg";
import pants from "../images/pants.jpeg";
import dress from "../images/dress.jpeg";
import ExperienceCard from "./ListingCard";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'



const Listings = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
  }
  const Listings = [
    {
      id: 1,
      name: "Vintage Adidas Shirt",
      price: "$10/day",
      about:
        "Vintage Adidas beige t shirt Size - medium (could fit a small too) Excellent condition",
      skills: ["Excellent", "Vintage", "Beige"],
      image: shirt,
    },
    {
      id: 2,
      name: "American Rag Cie Women's Cream and Tan Trousers",
      price: "$5/day",
      about:
        "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13",
      skills: ["Used-Excellent", "American Rag Cie"],
      image: pants,
    },
    {
      id: 3,
      name: "Olive Green Women's Dress",
      price: "$40.00/day",
      about:
        "Princess Polly Cindy mini dress ✨ super cute sage green mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
      skills: ["Brand new", "Princess Polly"],
      image: dress,
    },
  ];
  let filteredListings = Listings;
   if (search.length > 0) {
     filteredListings = Listings?.filter((item) => {
       return (
         String(item.id).toUpperCase().includes(search.toUpperCase()) ||
         String(item.name).toUpperCase().includes(search.toUpperCase()) ||
         String(item.price).toUpperCase().includes(search.toUpperCase()) ||
         String(item.about).toUpperCase().includes(search.toUpperCase()) ||
         String(item.skills).toUpperCase().includes(search.toUpperCase()) ||
         String(item.image).toUpperCase().includes(search.toUpperCase())
       );
      }
     );
   } 
  

  return (
    <>
    <input className=' w-2/5 h-14 bg-purple bg-opacity-40 pl-6 rounded-xl' type="search" placeholder="Search Listings" onChange={handleChange} value = {search}/>
    <AdjustmentsHorizontalIcon className="bold inline h-7 px-4	bg-purple" />
    <div class="text-left">
      <div class="text-xl text-left font-bold font-poppins pb-8">Listings</div>
      <div class="flex flex-wrap">
        {filteredListings.map((listing) => (
          <ExperienceCard
            key={listing.id}
            name={listing.name}
            price={listing.price}
            about={listing.about}
            skills={listing.skills}
            image={listing.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Listings;
