import React, { useState, useEffect } from "react";
import shirt from "../images/shirt.jpeg";
import pants from "../images/pants.jpeg";
import dress from "../images/dress.jpeg";
import shoes from "../images/shoes.jpeg";
import shirt2 from "../images/shirt2.png";
import pants2 from "../images/pants2.png";
import jersey from "../images/jersey.png";
import dress2 from "../images/dress2.jpeg";
import dress3 from "../images/dress3.jpeg";
import pants3 from "../images/pants3.jpeg";
import ExperienceCard from "./ListingCard";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
// import listingsData from "../listings.json";
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Listings = () => {
  // const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   setListings(listingsData);
  // }, []);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [xs, setxs] = React.useState(false);
  const [s, sets] = React.useState(false);
  const [m, setm] = React.useState(false);
  const [l, setl] = React.useState(false);
  const [xl, setxl] = React.useState(false);
  const [shirt1, setshirt] = React.useState(false);
  const [pants1, setpants] = React.useState(false);
  const [dress1, setdress] = React.useState(false);
  const [shoes1, setshoes] = React.useState(false);
  const handleChangeOne = () => {
    setxs(!xs);
  };

  const handleChangeTwo = () => {
    sets(!s);
  };

  const handleChangeThree = () => {
    setm(!m);
  };
  const handleChangeFour = () => {
    setl(!l);
  };
  const handleChangeFive = () => {
    setxl(!xl);
  };
  const handleChangeSix = () => {
    setshirt(!shirt1);
  };
  const handleChangeSeven = () => {
    setpants(!pants1);
  };
  const handleChangeEight = () => {
    setdress(!dress1);
  };
  const handleChangeNine = () => {
    setshoes(!shoes1);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    setOpen(!open);
  };
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
      name: "American Rag Cie Women's Cream and Tan Pants",
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
    {
      id: 4,
      name: "White Pants",
      price: "$10/day",
      about:
        "Vintage Red Striped Tank Top Size - medium (could fit a small too) Excellent condition",
      skills: ["Excellent", "Vintage", "Beige"],
      image: shirt2,
    },
    {
      id: 5,
      name: "Black High Heels Shoes",
      price: "$20/day",
      about: "Black High Heels Shoes",
      skills: ["Used-Excellent", "Louis Vuitton"],
      image: shoes,
    },
    {
      id: 6,
      name: "Red Women's Dress",
      price: "$40.00/day",
      about:
        "Princess Polly Cindy mini dress ✨ super cute red mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
      skills: ["Brand new", "Princess Polly"],
      image: dress2,
    },
    {
      id: 7,
      name: "UIUC Jersey Shirt",
      price: "$10/day",
      about: "UIUC Jersey Shirt",
      skills: ["Excellent", "Vintage", "Beige"],
      image: jersey,
    },
    {
      id: 8,
      name: "American Rag Cie Women's Cream and Tan Pants",
      price: "$5/day",
      about:
        "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13",
      skills: ["Used-Excellent", "American Rag Cie"],
      image: pants3,
    },
    {
      id: 9,
      name: "Olive Green Women's Dress",
      price: "$40.00/day",
      about:
        "Princess Polly Cindy mini dress ✨ super cute sage green mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
      skills: ["Brand new", "Princess Polly"],
      image: dress3,
    },
  ];
  let filteredListings = Listings;
   if (search.length > 0) {
     filteredListings = Listings?.filter((item) => {
       return (
         String(item.name).toUpperCase().includes(search.toUpperCase()) ||
         String(item.price).toUpperCase().includes(search.toUpperCase()) 
        );
      }
     );
   }

  return (
    <>
          
      <input
        className=" w-2/5 h-14 bg-purple bg-opacity-40 pl-6 rounded-xl outline-black"
        type="search"
        placeholder="Search Listings"
        onChange={handleChange}
        value={search}
      />
      <AdjustmentsHorizontalIcon
        className="bold inline h-7 px-4 bg-purple"
        onClick={handleClick}
      />
      {!open ? (
        <div></div>
      ) : (
        <div className=" content-center self-center">
          <br></br>
          <div className="font-poppins h-30 rounded-xl align-left py-2">
            <b>
              <h2> Sizing</h2>
            </b>
            <Checkbox
              label="Extra Small"
              value={xs}
              onChange={handleChangeOne}
            />
                  
            <Checkbox
              label="  Small  "
              value={s}
              onChange={handleChangeTwo}
            />
                  
            <Checkbox
              label="  Medium  "
              value={m}
              onChange={handleChangeThree}
            />
                  
            <Checkbox
              label="  Large  "
              value={l}
              onChange={handleChangeFour}
            />
                  
            <Checkbox
              label="  Extra Large "
              value={xl}
              onChange={handleChangeFive}
            />
                  <br></br>
                  
            <b>
              <h2>Types</h2>
            </b>
            <Checkbox
              label="  Shirt  "
              value={shirt1}
              onChange={handleChangeSix}
            />
            <Checkbox
              label="  Pants  "
              value={pants1}
              onChange={handleChangeSeven}
            />
            <Checkbox
              label="  Dress  "
              value={dress1}
              onChange={handleChangeEight}
            />
            <Checkbox
              label="  Shoes  "
              value={shoes1}
              onChange={handleChangeNine}
            />
                
          </div>
              
        </div>
      )}
          
      <div className="text-left">
              
        <div className="text-xl text-left font-bold font-poppins pb-8">
          Listings
        </div>
              
        <div className="flex flex-wrap">
                  
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
// import React, {useState, useEffect} from "react";
// import shirt from "../images/shirt.jpeg";
// import pants from "../images/pants.jpeg";
// import dress from "../images/dress.jpeg";
// import ExperienceCard from "./ListingCard";
// import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
// // import listingsData from "../listings.json";
// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

// const Listings = () => {
//   // const [listings, setListings] = useState([]);

//   // useEffect(() => {
//   //   setListings(listingsData);
//   // }, []);

//   const [search, setSearch] = useState('');
//   const [open, setOpen] = useState(false);
//   const [xs, setxs] = React.useState(false);
//   const [s, sets] = React.useState(false);
//   const [m, setm] = React.useState(false);
//   const [l, setl] = React.useState(false);
//   const [xl, setxl] = React.useState(false);
//   const [shirt1, setshirt] = React.useState(false);
//   const [pants1, setpants] = React.useState(false);
//   const [dress1, setdress] = React.useState(false);
//   const [shoes1, setshoes] = React.useState(false);
//   const handleChangeOne = () => {
//     setxs(!xs);
//   };

//   const handleChangeTwo = () => {
//     sets(!s);
//   };

//   const handleChangeThree = () => {
//     setm(!m);
//   };
//   const handleChangeFour = () => {
//     setl(!l);
//   };
//   const handleChangeFive = () => {
//     setxl(!xl);
//   };
//   const handleChangeSix = () => {
//     setshirt(!shirt1);
//   };
//   const handleChangeSeven = () => {
//     setpants(!pants1);
//   };
//   const handleChangeEight = () => {
//     setdress(!dress1);
//   };
//   const handleChangeNine = () => {
//     setshoes(!shoes1);
//   };
//   const handleChange = (e) => {
//       e.preventDefault();
//       setSearch(e.target.value);
//   }
//   const handleClick = (e) => {
//     setOpen(!open);
// }
//   const Listings = [
//     {
//       id: 1,
//       name: "Vintage Adidas Shirt",
//       price: "$10/day",
//       about:
//         "Vintage Adidas beige t shirt Size - medium (could fit a small too) Excellent condition",
//       skills: ["Excellent", "Vintage", "Beige"],
//       image: shirt,
//     },
//     {
//       id: 2,
//       name: "American Rag Cie Women's Cream and Tan Trousers",
//       price: "$5/day",
//       about:
//         "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13",
//       skills: ["Used-Excellent", "American Rag Cie"],
//       image: pants,
//     },
//     {
//       id: 3,
//       name: "Olive Green Women's Dress",
//       price: "$40.00/day",
//       about:
//         "Princess Polly Cindy mini dress ✨ super cute sage green mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
//       skills: ["Brand new", "Princess Polly"],
//       image: dress,
//     },
//     {
//       id: 4,
//       name: "Vintage Adidas Shirt",
//       price: "$10/day",
//       about:
//         "Vintage Adidas beige t shirt Size - medium (could fit a small too) Excellent condition",
//       skills: ["Excellent", "Vintage", "Beige"],
//       image: shirt,
//     },
//     {
//       id: 5,
//       name: "American Rag Cie Women's Cream and Tan Trousers",
//       price: "$5/day",
//       about:
//         "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13",
//       skills: ["Used-Excellent", "American Rag Cie"],
//       image: pants,
//     },
//     {
//       id: 6,
//       name: "Olive Green Women's Dress",
//       price: "$40.00/day",
//       about:
//         "Princess Polly Cindy mini dress ✨ super cute sage green mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
//       skills: ["Brand new", "Princess Polly"],
//       image: dress,
//     },
//     {
//       id: 7,
//       name: "Vintage Adidas Shirt",
//       price: "$10/day",
//       about:
//         "Vintage Adidas beige t shirt Size - medium (could fit a small too) Excellent condition",
//       skills: ["Excellent", "Vintage", "Beige"],
//       image: shirt,
//     },
//     {
//       id: 8,
//       name: "American Rag Cie Women's Cream and Tan Trousers",
//       price: "$5/day",
//       about:
//         "low rise flare cargo pants light cream/tan color, 97% cotton 3% spandex material, American Rag Cie brand tag size 13",
//       skills: ["Used-Excellent", "American Rag Cie"],
//       image: pants,
//     },
//     {
//       id: 9,
//       name: "Olive Green Women's Dress",
//       price: "$40.00/day",
//       about:
//         "Princess Polly Cindy mini dress ✨ super cute sage green mini dress that ties around the neck! Unfortunately, it is too small for me in the hip area :( I can barely put this on so it’s definitely meant for girls with slim hips! Size Us 0. Brand new with tags, price is firm! For reference, I’m 5,4 with a 24-25 in waist and 37 in hips :) Dm me if you have any more questions ☺️",
//       skills: ["Brand new", "Princess Polly"],
//       image: dress,
//     },
//   ];
//   let filteredListings = Listings;
//    if (search.length > 0) {
//      filteredListings = Listings?.filter((item) => {
//        return (
//          String(item.name).toUpperCase().includes(search.toUpperCase()) ||
//          String(item.price).toUpperCase().includes(search.toUpperCase())
//         );
//       }
//      );
//    }

//   return (
//     <>
//     <input className=' w-2/5 h-14 bg-purple bg-opacity-40 pl-6 rounded-xl outline-black' type="search" placeholder="Search Listings"  onChange={handleChange} value = {search}/>
//     <AdjustmentsHorizontalIcon className="bold inline h-7 px-4	bg-purple" onClick = {handleClick} />
//     {!open ? <div></div> :
//     <div>
//       <h2> Sizing</h2>
//       <Checkbox
//         label="Extra Small"
//         value={xs}
//         onChange={handleChangeOne}
//       />
//       <Checkbox
//         label="Small"
//         value={s}
//         onChange={handleChangeTwo}
//       />
//       <Checkbox
//         label="Medium"
//         value={m}
//         onChange={handleChangeThree}
//       />
//       <Checkbox
//         label="Large"
//         value={l}
//         onChange={handleChangeFour}
//       />
//       <Checkbox
//         label="Extra Large"
//         value={xl}
//         onChange={handleChangeFive}
//       />
//       <h2>Types</h2>
//       <Checkbox
//         label="Shirt"
//         value={shirt1}
//         onChange={handleChangeSix}
//       />
//       <Checkbox
//         label="Pants"
//         value={pants1}
//         onChange={handleChangeSeven}
//       />
//       <Checkbox
//         label="Dress"
//         value={dress1}
//         onChange={handleChangeEight}
//       />
//       <Checkbox
//         label="Shoes"
//         value={shoes1}
//         onChange={handleChangeNine}
//       />
//     </div>
//     }
//     <div className="text-left">
//       <div className="text-xl text-left font-bold font-poppins pb-8">Listings</div>
//       <div className="flex flex-wrap">
//         {filteredListings.map((listing) => (
//           <ExperienceCard
//             key={listing.id}
//             name={listing.name}
//             price={listing.price}
//             about={listing.about}
//             skills={listing.skills}
//             image={listing.image}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Listings;
