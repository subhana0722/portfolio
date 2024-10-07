import React from 'react'
import { FaFacebookF ,FaTwitter} from "react-icons/fa";
import { IoBasketballSharp } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-9 pt-24 bg-black">
        <div className="container m-auto">
            <ul className="flex gap-3.5 justify-center font-normal text-base text-white mb-9">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">PORTFOLIO</a>
                </li>
                <li>
                    <a href="#">BLOG</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
            <div className="text-primary">
                <ul className="flex gap-4 justify-center mb-12">
                    <li className="rounded-full w-7 h-7 bg-white flex justify-center items-center">
                        <a href="#"><FaFacebookF /></a>
                    </li>
                    <li className="rounded-full w-7 h-7 bg-white flex justify-center items-center">
                        <a href="#"><FaTwitter /></a>
                    </li>
                    <li className="rounded-full w-7 h-7 bg-white flex justify-center items-center">
                        <a href="#"><IoBasketballSharp /></a>
                    </li>
                    <li className="rounded-full w-7 h-7 bg-white flex justify-center items-center">
                        <a href="#"><FaPinterestP /></a>
                    </li>
                </ul>
            </div>

          
        </div>
        <p className="text-white text-center border-t border-zinc-700 pt-9">© 2020 CaliberThemes</p>
     </footer>
  )
}

export default Footer