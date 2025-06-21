import { useEffect } from "react";
import * as AOS from "aos";
import "aos/dist/aos.css";

function HeroApointment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="relative px-5 md:px-10 pt-[180px] h-[80vh] md:h-[75vh]">
      <div className="absolute inset-0 bg-[url('/navbatlar/navbatlar_hero.png')] bg-cover bg-no-repeat opacity-70 -z-10"></div>
      <div className="">
        <h1 className="text-[#2d0e4e] text-[47px] font-bold max-w-[500px] mt-2 leading-[100%] mb-[10px]">
          Bir qidiruv - cheksiz imkoniyatlar
        </h1>
        <p className="mt-7 text-[#34115a]">
          Biz talabalarga dunyo bo'ylab eng yaxshi kurslar, markazlar va ta'lim
          imkoniyatlarini topishda yordam <br /> beramiz. Mutaxassislarning
          tavsiyalari va talabalarning haqiqiy sharhlari bilan ta'lim
          safaringizni <br /> osonlashtiramiz.
        </p>
      </div>
    </section>
  );
}

export default HeroApointment;
