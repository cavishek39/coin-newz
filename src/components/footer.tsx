import React from "react";
import ThemeToggler from "./theme-toggler";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="justify-evenlyw-full flex uppercase md:max-w-[300px]">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="py-2 text-sm">Help Center</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <div className="flex w-full justify-end">
            <div className="relative w-full py-4 md:w-[300px]">
              <div className=" mt-4 flex justify-center py-4 md:justify-end md:py-0 md:pb-4">
                <ThemeToggler />
              </div>

              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="mr-2 w-full rounded-2xl border border-input bg-primary p-2 shadow-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="my-2 rounded-2xl bg-button p-2 px-4 text-btnText shadow-xl hover:shadow-2xl md:w-auto">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex justify-between py-4 text-accent">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaFacebookF />
                <FaGithub />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
