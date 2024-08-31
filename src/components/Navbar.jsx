import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-violet-300 text-white py-2">
      <div className="logo px-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 64 64"
        >
          <path
            fill="#fff8ee"
            d="M57,13v38c0,3.31-2.69,6-6,6H13c-3.31,0-6-2.69-6-6V13c0-3.31,2.69-6,6-6h38C54.31,7,57,9.69,57,13z"
          ></path>
          <path
            fill="#faefde"
            d="M54,57H10c-1-1-2-2-3-3v0c0-1.657,1.343-3,3-3h44c1.657,0,3,1.343,3,3v0C56,55,55,56,54,57z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M51,58H13c-3.86,0-7-3.141-7-7V13c0-3.859,3.14-7,7-7h38c3.86,0,7,3.141,7,7v38	C58,54.859,54.86,58,51,58z M13,8c-2.757,0-5,2.243-5,5v38c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V13c0-2.757-2.243-5-5-5H13z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,21,16,21z M16,13c-1.654,0-3,1.346-3,3	s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
          ></path>
          <circle cx="16" cy="16" r="1.5" fill="#7bbeeb"></circle>
          <path
            fill="#8d6c9f"
            d="M16,34c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,34,16,34z M16,26c-1.654,0-3,1.346-3,3	s1.346,3,3,3s3-1.346,3-3S17.654,26,16,26z"
          ></path>
          <circle cx="16" cy="29" r="1.5" fill="#ed7899"></circle>
          <path
            fill="#8d6c9f"
            d="M16,47c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,47,16,47z M16,39c-1.654,0-3,1.346-3,3	s1.346,3,3,3s3-1.346,3-3S17.654,39,16,39z"
          ></path>
          <circle cx="16" cy="42" r="1.5" fill="#f9dd8f"></circle>
          <path
            fill="#8d6c9f"
            d="M17,53c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C16,52.552,16.448,53,17,53z M12,49c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C13,49.448,12.552,49,12,49z M32,53c0.552,0,1-0.448,1-1v-2	c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C31,52.552,31.448,53,32,53z M37,53c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2	C36,52.552,36.448,53,37,53z M42,53c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C41,52.552,41.448,53,42,53z M47,53	c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C46,52.552,46.448,53,47,53z M52,49c-0.552,0-1,0.448-1,1v2	c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C53,49.448,52.552,49,52,49z M22,53c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2	C21,52.552,21.448,53,22,53z M27,53c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C26,52.552,26.448,53,27,53z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M52,17H25c-0.552,0-1-0.447-1-1s0.448-1,1-1h27c0.552,0,1,0.447,1,1S52.552,17,52,17z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M52,30H25c-0.552,0-1-0.447-1-1s0.448-1,1-1h27c0.552,0,1,0.447,1,1S52.552,30,52,30z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M52,43H25c-0.552,0-1-0.447-1-1s0.448-1,1-1h27c0.552,0,1,0.447,1,1S52.552,43,52,43z"
          ></path>
        </svg>
      </div>
      <ul className="flex gap-8 mx-8">
        <li className="cursor-pointer hover:font-bold transition-all duration-20">
          <div className="flex gap-2 my-3">
            <div className="my-1">
              <TiHome size={20} />
            </div>
            <div className='text-lg font-serif'>
              Home
            </div>
          </div>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-20">
          <div className="flex gap-2 my-3">
            <div className="my-1">
              <IoMdContact size={20} />
            </div>
            <div className='text-lg font-serif'>
            Contact
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
