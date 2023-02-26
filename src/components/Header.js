import React from "react";
import logo from "../images/logo.png"
const Header = () => {
  return (
    <div>
      <nav class="sm:px-4 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          {/* <a href="/" class="flex items-center">
            <div class="self-center text-xl font-semibold font-domine">Campus Threads</div>
          </a> */}
          <a href="/" class="flex items-center">
            <div class="self-center text-xl font-semibold font-domine">
              <img
                src={logo}
                alt="..."
                class="shadow w-12 rounded-lg align-middle border-none"
              />
              {/* <div class="self-center text-xl font-semibold font-domine">
                Campus Threads
              </div> */}
            </div>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 font-montserrat">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400"
                >
                  Listings
                </a>
              </li>
              <li>
                <a
                  href="/form"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400"
                >
                  Post Listing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded rounded hover:underline hover:text-pink-400"
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
