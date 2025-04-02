"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosMic, IoIosMicOff } from "react-icons/io";
import { FaMapLocation, FaCalendarDays, FaChevronUp } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbAirConditioning } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CiGift } from "react-icons/ci";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useInView } from "react-intersection-observer";
const MainContent = () => {
  const { ref: sc1Ref, inView: sc1View } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: sc2Ref, inView: sc2View } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: sc3Ref, inView: sc3View } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nama = queryParams.get("to");
  const openingRef = useRef(null);
  const [isOpen, setIsopen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("/hope-you-comeback.mp3");

  const ToglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // hide open invitation
  const HidenOpening = () => {
    if (openingRef.current) {
      openingRef.current.classList.add("opening-close");
    }
    document.body.style.overflow = "";
    document.body.style.overflow = "";
  };

  // hide scroll
  useEffect(() => {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);

  // active music
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <>
      <section className="relative bg-black overflow-hidden  ">
        <div
          className={`max-w-[560px] mx-auto relative overflow-hidden  ${
            isOpen ? "min-[560px]:border-l-2  min-[560px]:border-white" : ""
          }`}
        >
          {/* opening content */}
          <div
            ref={openingRef}
            className="absolute inset-0 w-full bg-black  h-[100vh] z-[999] "
          >
            <div className="flex items-center justify-center h-full relative ">
              <div className="absolute inset-0 w-full h-[100vh] flex justify-center items-center overflow-hidden z-10 ">
                <div className="bg-[url('/assets/logo-inivienity.png')] w-[300px] h-[380px] bg-cover bg-center opacity-20 scale-infinite" />
                <div className="absolute shine w-[300px] h-[380px] z-10 opacity-40" />
              </div>
              <div className="relative z-30">
                <div>
                  <div className="text-center">
                    <p className=" text-white tracking-[1.4px] text-[14px] uppercase leading-none">
                      inivienity night
                    </p>
                    <h1 className="text-[#A2803B] text-[48px] leading-[120%]">
                      iNi ViE Hospitality
                    </h1>
                  </div>
                  <div className="mt-[40px] text-center">
                    <p className=" text-white text-[14px] leading-none">
                      Dear.
                    </p>
                    <h1 className="text-white text-[24px] tracking-[1px] capitalize leading-[120%] py-2 font-bold">
                      {nama}
                    </h1>
                  </div>
                  <div className="flex justify-center mt-[20px]">
                    <button
                      onClick={() => {
                        HidenOpening();
                        ToglePlay();
                        setIsopen(true);
                      }}
                      className="bg-[#A2803B] tracking-[1px] text-[14px] text-white px-[25px] py-[10px] font-bold uppercase flex items-center gap-[5px]"
                    >
                      <HiOutlineMailOpen className="text-[20px]" />
                      Open Invitation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end opening content */}

          {/* main content */}
          <div className=" relative overflow-hidden scroll-container">
            {/* logo spin */}
            <div className="absolute top-[-75px]  right-[-75px] z-[1]">
              <div>
                <img
                  src="/pattern-logo.png"
                  alt=""
                  className="w-[150px] h-[150px] object-cover object-center animate-spins"
                />
              </div>
            </div>
            {/* logo spin */}

            {/* section1 */}
            <section className="relative overflow-hidden">
              <div className="absolute z-0 bg-[url('/grid.webp')] w-full h-[100vh] bg-cover bg-center inset-0 opacity-15 scale-110 " />
              <div className=" px-[16px]  relative z-[10] ">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
                <div className="relative z-[2] h-[100vh] flex items-center justify-center ">
                  <div className="overflow-hidden">
                    <h1
                      className={`text-[#A2803B]  text-[38px] text-center uppercase font-bold leading-[120%]   `}
                    >
                      <span
                        className={`inline-block opacity-0 ${
                          isOpen && "animate-upIn"
                        }`}
                      >
                        iNiViEnity
                      </span>{" "}
                      <span
                        className={`inline-block opacity-0 ${
                          isOpen && "animate-leftIn"
                        }`}
                      >
                        Night
                      </span>{" "}
                      <span
                        className={`inline-block opacity-0 ${
                          isOpen && "animate-bottomIn"
                        }`}
                      >
                        Gathering
                      </span>{" "}
                    </h1>
                    <p className="mt-[20px] text-white text-center text-[15px] tracking-[1px] leading-[180%]">
                      You are cordially invited to a special iNiViEnity Night
                      Gathering! A night to celebrate, a moment to unwind, share
                      laughter, and strengthen the bonds that make us who we are
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 w-full flex justify-center z-[200]">
                <a href={`/${location.search}#section2`}>
                  <div className="mouse-down" />
                </a>
              </div>
            </section>
            {/*  end section1 */}

            {/* section2 */}
            <section id="section2" className="relative overflow-hidden">
              {/* logo spin */}
              <div className="absolute top-[-70px]  right-[-75px] z-[1]">
                <div>
                  <img
                    src="/pattern-logo.png"
                    alt=""
                    className="w-[150px] h-[150px] object-cover object-center animate-spins"
                  />
                </div>
              </div>
              {/* logo spin */}
              <div className="bg-[url('/gajah-potrait.webp')] w-full inset-0 bg-cover bg-center absolute z-0 opacity-40" />
              <div className="px-[16px] relative z-[11] h-[100vh]">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
                <div className="flex justify-center items-center relative z-[3] h-full ">
                  <div
                    ref={sc1Ref}
                    className={`${
                      sc1View ? "animate-scaleUp" : ""
                    } w-full relative h-[500px]  opacity-0`}
                  >
                    <div className="bg-white bg-opacity-20 blur-sm w-full h-[500px] absolute top-0 z-0 " />
                    <div className="relative z-10 p-[10px] flex items-center justify-center flex-col h-full">
                      <h2 className="text-[#A2803B] font-bold text-[32px] text-center">
                        GATHERING EVENT
                      </h2>
                      <div className="mt-[20px]">
                        <div className="text-white flex items-center gap-4  mb-5">
                          <FaMapLocation className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            Bali Sunset Convention Center
                          </p>
                        </div>
                        <div className="text-white flex items-center gap-4 mb-4">
                          <FaCalendarDays className="text-[24px] text-[#aba7a7]" />
                          <div>
                            <p className="text-[18px] tracking-[1px] font-bold">
                              April 28th & 29th, 2025
                            </p>
                            <p className="text-white text-[14px]  tracking-wider ">
                              Start 05:00 PM
                            </p>
                          </div>
                        </div>

                        <div className="text-white flex items-center gap-4 ">
                          <GiClothes className="text-[24px] text-[#aba7a7]" />
                          <div>
                            <p className="text-[18px] text-white  tracking-[1px] font-bold">
                              Formal Black Dress{" "}
                              <span className="font-normal text-[14px]">
                                (for Women)
                              </span>{" "}
                              &
                            </p>
                            <p className="text-white text-[18px] font-bold  tracking-wider">
                              Black Suit{" "}
                              <span className="font-normal text-[14px]">
                                (Minimum Long Sleeve Shirt for Men)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-[10px] max-w-[380px]">
                        <p className="text-white text-center text-[14px]  tracking-[1px] mt-[20px]  ">
                          Participation is exclusive to iNi ViE Hospitality team
                          members (Staff/DW only, exclude trainee) who became
                          part of our family maximum on
                          <span className="text-[#A2803B] font-bold">
                            {" "}
                            January 31, 2025
                          </span>{" "}
                        </p>
                      </div>

                      <div className="flex justify-center mt-[30px] gap-x-5">
                        {/* <a
                          href="#"
                          target="_blank"
                          className="bg-[#A2803B] tracking-[1px] text-[16px] text-white px-[25px] py-[10px]  font-bold"
                        >
                          Save the date
                        </a> */}
                        <a
                          href="https://maps.app.goo.gl/6imY5jLt5eqKHanH6"
                          target="_blank"
                          className="bg-[#A2803B] tracking-[1px] text-[16px] text-white px-[25px] py-[10px]  font-bold"
                        >
                          Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section2 */}

            {/* section3 */}
            <section id="section3" className="relative overflow-hidden">
              {/* logo spin */}
              <div className="absolute top-[-75px]  right-[-75px] z-[1]">
                <div>
                  <img
                    src="/pattern-logo.png"
                    alt=""
                    className="w-[150px] h-[150px] object-cover object-center animate-spins"
                  />
                </div>
              </div>
              {/* logo spin */}

              <div className="bg-[url('/gajah-potrait.webp')] w-full inset-0 bg-cover bg-center absolute z-0 opacity-40" />
              <div className="px-[16px] relative z-[10] h-[100vh]">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
                <div className="flex justify-center items-center relative z-[3] h-full ">
                  <div
                    ref={sc2Ref}
                    className={`w-full relative h-[650px] ${
                      sc2View ? "animate-scaleUp" : ""
                    }`}
                  >
                    <div className="bg-white bg-opacity-20 blur-sm w-full h-[650px] absolute top-0 z-0 " />
                    <div className="relative z-10 py-[10px] px-5 flex items-center justify-center flex-col h-full ">
                      <h2 className="text-[#A2803B] font-bold text-[32px] text-center uppercase">
                        Grand Door Prizes
                      </h2>
                      <div className="mt-[20px]">
                        <div className="text-white flex items-center gap-2  mb-[15px]">
                          <FaMotorcycle className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            6 Motorcycles
                          </p>
                        </div>
                        <div className="text-white flex items-center gap-2 mb-[15px] ">
                          <CgSmartHomeRefrigerator className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            2 Refrigerators
                          </p>
                        </div>
                        <div className="text-white flex items-center gap-2 mb-[15px] ">
                          <TbAirConditioning className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            2 Air Conditioners
                          </p>
                        </div>
                        <div className="text-white flex items-center gap-2  mb-[15px]">
                          <CiGift className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            70 Mini Doorprizes
                          </p>
                        </div>
                        <div className="text-white flex items-center gap-2  mb-[15px]">
                          <RiShoppingBag3Line className="text-[24px] text-[#aba7a7]" />
                          <p className="text-[18px] tracking-[1px] font-bold">
                            Goodie Bag for All the Guests
                          </p>
                        </div>
                      </div>

                      <div className="mt-[10px] flex flex-col gap-[5px] max-w-[350px]">
                        <p className="text-white  text-left text-[16px]  tracking-[1px]  ">
                          To be eligible for the gifts and doorprizes,{" "}
                          <span className="text-[#A2803B] font-bold">
                            please follow these steps:
                          </span>
                        </p>
                        <ol className="list-decimal text-white pl-[10px]">
                          <li className="mt-2">
                            <p className="text-[15px] text-white tracking-[1px]">
                              Follow the official Instagram accounts
                            </p>
                            <div className="flex justify-start gap-[10px] mt-2">
                              <a
                                href="https://www.instagram.com/inivielife/"
                                className="flex gap-[5px]"
                              >
                                <FaInstagram className="text-[18px] text-[#aba7a7]" />
                                <p className="text-[15px] tracking-[1px] text-[#A2803B] font-bold">
                                  @lifeatinivie
                                </p>
                              </a>

                              <a
                                href="https://www.instagram.com/iniviehospitality/"
                                className="flex gap-[5px]"
                              >
                                <FaInstagram className="text-[18px] text-[#aba7a7]" />
                                <p className="text-[15px] tracking-[1px] text-[#A2803B] font-bold">
                                  @iniviehospitality
                                </p>
                              </a>
                            </div>
                          </li>
                          <li className="mt-2">
                            <span className="text-[15px] text-white tracking-[1px]  mt-5">
                              Join the{" "}
                              <a
                                href="https://booking.inivie.com/register"
                                target="_blank"
                                className="text-[#A2803B] font-bold"
                              >
                                WeiNiViE Reward
                              </a>{" "}
                              membership program.
                            </span>
                          </li>
                          <li className="mt-2">
                            <span className="text-[15px] text-white tracking-[1px]  mt-5">
                              Post Instagram story during iNiVienity Night
                              Gathering, tag{" "}
                              <a
                                href="https://www.instagram.com/iniviehospitality/"
                                target="_blank"
                                className="text-[#A2803B] font-bold"
                              >
                                @iniviehospitality
                              </a>{" "}
                              <a
                                href="https://www.instagram.com/inivielife/"
                                target="_blank"
                                className="text-[#A2803B] font-bold"
                              >
                                @lifeatinivie{" "}
                              </a>{" "}
                            </span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section3 */}

            {/* section4 */}
            <section id="section3" className="relative overflow-hidden">
              {/* logo spin */}
              <div className="absolute top-[-75px]  right-[-75px] z-[1]">
                <div>
                  <img
                    src="/pattern-logo.png"
                    alt=""
                    className="w-[150px] h-[150px] object-cover object-center animate-spins"
                  />
                </div>
              </div>

              {/* logo spin */}
              <div className="bg-[url('/gajah-potrait.webp')] w-full inset-0 bg-cover bg-center absolute z-0 opacity-40" />
              <div className="px-[16px] relative z-[10] h-[100vh]">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
                <div className="flex justify-center items-center relative z-[3] h-full ">
                  <div
                    ref={sc3Ref}
                    className={`w-full relative h-[400px] ${
                      sc3View ? "animate-scaleUp" : ""
                    }`}
                  >
                    <div className="bg-white bg-opacity-20 blur-sm w-full h-[400px] absolute top-0 z-0" />
                    <div className="relative z-10 p-[10px] flex items-center justify-center flex-col h-full">
                      <h2 className="text-[#A2803B] leading-[120%] font-bold text-[32px] text-center uppercase">
                        We look forward to celebrating with you!
                      </h2>
                      <div className="mt-[20px]">
                        <p className="text-[18px] text-center  text-white tracking-[1px] ">
                          Warm regards,
                        </p>
                        <p className="text-[18px]  text-white  text-center  tracking-[1px]">
                          The iNi ViE Hospitality Team
                        </p>
                      </div>
                      <div className="mt-[20px]">
                        <a
                          href={`/${location.search}#section2`}
                          className="rounded-full inline-block p-[8px] border-[#A2803B] border-[1px]"
                        >
                          <FaChevronUp className="text-white text-[12px] animate-bounce1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section4 */}

            {/* mic */}
            <div
              className=" fixed w-full max-w-[560px]  bottom-20 z-50 cursor-pointer"
              onClick={() => ToglePlay()}
            >
              <div className=" flex justify-end pr-[20px]">
                {isPlaying ? (
                  <IoIosMic className="text-white text-[48px]" />
                ) : (
                  <IoIosMicOff className="text-white text-[48px]" />
                )}
              </div>
            </div>

            {/* end mic */}
          </div>
          {/* end main content */}
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
