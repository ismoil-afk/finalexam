import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import * as AOS from "aos";
import "aos/dist/aos.css";

function AboutPartners() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="abot_mainsection" className="pb-[80px]">
      <div className="">
        <h2 className="text-[50px] text-center font-[600] text-[#461773] mb-[30px] ">
          Ta'lim markazlaringiz uchun qo'llanma
        </h2>
        <Marquee>
          <div className="flex gap-[50px] justify-between items-center">
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/cambridge-CL0dx1rA.png"
                alt="partners"
              />
            </div>
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/everest-BDjkPxur.png"
                alt="partners"
              />
            </div>
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/najot-Br0TICmX.png"
                alt="partners"
              />
            </div>
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/result-DkRAxn7d.png"
                alt="partners"
              />
            </div>
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/thompson-DGZQXSm-.png"
                alt="partners"
              />
            </div>
            <div className="w-[200px]">
              <img
                className="cursor-pointer transition-all duration-200"
                src="/about/ielts-zone-english.png"
                alt="partners"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default AboutPartners;
