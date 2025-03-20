"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosMic, IoIosMicOff } from "react-icons/io";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const MainContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nama = queryParams.get("nama");

  const openingRef = useRef(null);

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
  // useEffect(() => {
  //   if (isPlaying) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }

  //   return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };
  // }, [isPlaying]);

  return (
    <>
      <section className="relative bg-black ">
        <div className="max-w-[560px] mx-auto relative  ">
          {/* opening content */}
          <div
            ref={openingRef}
            className="absolute inset-0 w-full bg-black  h-[100vh] z-50 "
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
                    <h1 className="text-[#A2803B] text-[28px] tracking-[1px] capitalize leading-[120%]">
                      {nama}
                    </h1>
                  </div>
                  <div className="flex justify-center mt-[20px]">
                    <button
                      onClick={() => {
                        HidenOpening();
                        ToglePlay();
                      }}
                      className="bg-[#A2803B] tracking-[1px] text-[13px] text-white px-[20px] py-[5px] rounded-full flex items-center gap-[5px]"
                    >
                      <HiOutlineMailOpen className="text-[16px]" />
                      Open Invitation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end opening content */}

          {/* main content */}
          <div className=" relative overflow-hidden">
            {/* logo spin */}
            <div className="fixed top-[-75px] right-[-75px] z-[1]">
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
            <div className="relative overflow-hidden">
              <div className="absolute z-0 bg-[url('/grid.webp')] w-full h-[100vh] bg-cover bg-center inset-0 opacity-50 scale-110 " />
              <div className=" px-[16px]  relative z-[10] ">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
                <div className="relative z-[2] h-[100vh] flex items-center justify-center ">
                  <div>
                    <h1 className="text-[#A2803B] text-[38px] text-center uppercase font-bold leading-[120%]">
                      iNiViEnity Night Gathering
                    </h1>
                    <p className="mt-[20px] text-white text-center text-[15px] tracking-[1px] leading-[180%]">
                      We are thrilled to invite you to a special iNiViEnity
                      Night Gathering! This gathering is a thank you for your
                      dedication and a chance to connect with your colleague
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 w-full flex justify-center z-[20]">
                <a href="#">
                  <div className="mouse-down" />
                </a>
              </div>
            </div>
            {/*  end section1 */}

            {/* section2 */}
            <div id="section2" className="relative ">
              <div className="bg-[url('/gajah-potrait.webp')] w-full inset-0 bg-cover bg-center absolute z-0 opacity-50" />
              <div className="px-[16px] relative z-[10] h-[100vh]">
                <div className="bg-black  opacity-40 absolute inset-0 w-full" />
              </div>
            </div>
            {/* end section2 */}

            {/* mic */}
            <div className="fixed bottom-10 right-5 z-50">
              <IoIosMic className="text-white text-[48px]" />
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
