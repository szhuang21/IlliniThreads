import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import listingsData from "../listings.json";


const Form = () => {
  const [Listings, setListings] = useState([]);


  const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => { 
    	if (images.length < 1) return;
	const newImageUrls = [];
	images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
	setImageURLs(newImageUrls);
    }, [images]);
    function onImageChange(e) {
	setImages([...e.target.files]);
    }

  
  useEffect(() => {
    setListings(listingsData);
  }, []);


  const { push } = useHistory();
  const [formData, setFormData] = useState({
    name: "", 
    seller: "",
    price: "",
    type: "",
    size: "",
    date: "",
    pickup: "",
    about: "",
    tags: "",
    image: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Nonbinary" },
  ];

  const sizes = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
  ];

  const clothingTypes = [
    // EVENTUALLY CREATE A SELECT ALL
    { id: 1, name: "Top" },
    { id: 2, name: "Bottom" },
    { id: 3, name: "Dress" },
    { id: 4, name: "Shoes" },
  ];

  const handleChange = (event) => {
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });

    // setFormData((prevalue) => {
    //   return {
    //     ...prevalue,
    //     [event.target.name]: event.target.value,
    //   };
    // });
  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    // name
    if (!formData.name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof formData.name !== "undefined") {
      if (!formData.name.match(/^[a-zA-Z\w\s]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (formData.email) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof formData.email !== "undefined") {
      let lastAtPos = formData.email.lastIndexOf("@");
      let lastDotPos = formData.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formData.email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          formData.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }

      if (
        formData.email.substring(lastAtPos, formData.email.length) !==
        "@illinois.edu"
      ) {
        formIsValid = false;
        errors["email"] = "Not an illinois.edu email";
      }
    }

    // social media
    if (typeof formData.instagram !== "undefined") {
      if (!formData.instagram.match(/^[a-z0-9_\.]+$/)) {
        formIsValid = false;
        errors["instagram"] = "Invalid Instagram Username";
      }
    }

    if (typeof formData.snapchat !== "undefined") {
      if (!formData.snapchat.match(/^[a-z0-9_\.]+$/)) {
        formIsValid = false;
        errors["snapchat"] = "Invalid Snapchat Username";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    // push({
    //   pathname: "/submitted",
    //   state: { formData }, // your data array of objects
    // });

    // push("/submitted");
    event.preventDefault();

    if (handleValidation()) {
      alert("Form Submitted");
    } else {
      alert("Form Has Errors");
    }

    setFormSubmitted(true);

    console.log("formData ", formData);
    let code = new URLSearchParams(window.location.search).get("code");

    // console.log(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code)

    // TODO: ADD SPOTIFY OAUTH STUFF HERE

    // let jsonData = {
    //   gender: "male",
    //   size: "medium",
    //   name: formData["name"],
    //   preference: formData["genderPreference"],
    //   ig_username: "placeholder_name",
    //   snap_username: "placeholder_name",
    //   email: formData["email"],
    //   code: code,
    // };

      // Create a new object from the form data
    const newItem = {
      name: formData.name,
      seller: formData.seller,
      price: formData.price,
      type: formData.type,
      size: formData.size,
      date: formData.date,
      pickup: formData.pickup,
      about: formData.about,
      tags: formData.tags,
      image: formData.image,
    };


    // Clear the form
    setFormData({
      name: "",
      seller: "",
      price: "",
      type: "",
      size: "",
      date: "",
      pickup: "",
      about: "",
      tags: "",
      image: "",
    });

  // Add the new item to Listings
    setListings([...Listings, newItem]);

    // fetch("http://127.0.0.1:5000/register", {
    //   mode: "cors",
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(jsonData),
    // })
    //   .then(function (response) {
    //     console.log(response);

    //     if (response.status === 200) {
    //       push({
    //         pathname: "/submitted",
    //         state: { formData }, // your data array of objects
    //       });
    //     } else {
    //       console.log("An error has occurred.");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // setFormData({
    //   // clears data
    //   name: "",
    //   email: "",
    //   genderPreference: "",
    // });
  };

  return (
    <div class="p-10 justify-center place-content-center max-w-[60%]">
      <div class="text-xl text-black font-bold font-montserrat mb-1">
        Create Listing
      </div>
      <div class="text-xs text-gray-600 font-montserrat">
        Post your listing for others to rent!
      </div>

      <div class="w-full font-montserrat">
        <form onSubmit={handleSubmit}>
          {/* <div class="mb-4 mt-2">
            <label for="name" class="font-bold">
              Description
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tell us about your item. Start with a headline, then add details including material, condition, size, and sty"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div> */}
          <div class="mb-4">
            <label for="name" class="font-bold">
              Item Name
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="seller" class="font-bold">
              Seller Username
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="seller"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="price" class="font-bold">
              Item Price
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="$"
              type="integer"
              name="price"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="type" class="font-bold">
              Clothing Type:
            </label>

            <select
              className="w-full py-2 px-3 text-xs text-gray-800 bg-white border rounded shadow-sm outline-none appearance-none"
              value={formData.clothingType}
              label="Clothing Type"
              onChange={handleChange}
              name="type"
            >
              {clothingTypes.map((item) => (
                <option value={item.name}>{"  " + item.name}</option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label for="name" class="font-bold">
              Size
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="size"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="date" class="font-bold">
              Start Date
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="date"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="date" class="font-bold">
              End Date
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="date"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label for="pickup" class="font-bold">
              Pickup Location
            </label>
            <input
              class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="pickup"
              onChange={handleChange}
            />
          </div>

          <div class="mb-4 mt-2">
            <div class="">
              <label for="about" class="w-full">
                Description:
              </label>
              <textarea
                class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us about your item. Start with a headline, then add details including material, condition, size, and style."
                type="text"
                rows="6"
                name="about"
                onChange={handleChange}
              />
              <div class="text-xs text-red-500 ml-1 mt-1">{errors.message}</div>
            </div>
          </div>

          {/* I can see this question leading to troll answers if a person says they're straight but then says they're interested in men */}

          <div class="mb-4">
            <label for="name" class="font-bold">
              Image Link
            </label>
            <label>
              <input
                class="border rounded w-full py-2 px-3 text-xs text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="enter image"
                type="file"
                name="image"
                onChange={onImageChange}
              />
              { imageURLs.map(imageSrc => <img src={imageSrc} width="400" height="400"/>) }
            </label>
          </div>

          <input
            type="submit"
            value="Post It"
            class="text-white bg-zinc-900 rounded-lg w-full p-1"
            // onClick={this.onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
