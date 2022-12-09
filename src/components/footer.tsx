import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div m-8 pt-8 text-primary">
      <h1 className="py-4 px-4 text-2xl font-bold">CoinNewz</h1>
      <div className="grid px-4 md:grid-cols-2">
        <div className="flex w-full justify-between uppercase md:max-w-[300px]">
          <div>
            <ul>
              <li className="py-2 text-xs font-semibold">
                <Link href={"https://www.linkedin.com/in/avishek-c-211855124/"}>
                  Contact Me
                </Link>
              </li>
              <li className="py-2 text-xs font-semibold">
                <Link href={"https://www.coingecko.com/en/api/documentation"}>
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-2 text-xs font-semibold">
                <Link href={"/https://github.com/cavishek39"}>About Me</Link>
              </li>
              <li className="py-2 text-xs font-semibold">
                <Link
                  href={
                    "https://www.google.com/search?q=crypto+investment&rlz=1C1CHBF_enIN1028IN1028&oq=crypto+inv&aqs=chrome.0.0i433i512j0i512l3j0i20i263i512j0i512j0i20i263i512j0i512l3.4891j0j7&sourceid=chrome&ie=UTF-8"
                  }
                >
                  Invest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <div className="flex w-full justify-end">
            <div className="relative w-full py-4 md:w-[300px]">
              <div className=" mt-4 flex justify-center py-4 md:justify-end md:py-0 md:pb-4">
                {/* <ThemeToggler /> */}
              </div>

              <p className="text-center font-semibold md:text-right">
                Sign up for CryptoNewz
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="mr-2 w-full rounded-xl border border-input bg-primary p-2 shadow-2xl md:w-auto"
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
                <FaGithub href="/https://github.com/cavishek39" />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center font-semibold">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
