import { ICategory, IResources } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";

const API = import.meta.env.VITE_API;

function ResourcesCards() {
  const fetchFilterCategory = async () => {
    const res = await axios.get(`${API}/api/categories`);
    return res.data;
  };

  const { data: courseCAtegory } = useQuery({
    queryKey: ["category"],
    queryFn: fetchFilterCategory,
  });

  const fetchResources = async () => {
    const res = await axios.get(`${API}/api/resources`);
    return res.data;
  };

  const { data: resources } = useQuery({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });
  console.log(courseCAtegory);
  return (
    <section id="resources_mainsection" className="py-[80px] px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto ">
        <form className="p-[10px] flex items-center gap-[15px] rounded-[6px] border-[1px] border-[#999]">
          <button type="submit" className="cursor-pointer">
            <IoSearchOutline className="text-[20px]" />
          </button>
          <input
            type="text"
            placeholder="Resurslar qidirish"
            className="w-[400px] lg:w-[600px] outline-none"
          />
        </form>
        <h2 className="text-[22px] py-[20px]">Kategoriya bo‘yicha filtrlash</h2>
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-[200px] rounded-[10px] overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-200">
            <div className="h-[130px] flex items-center justify-center">
              <IoSearchSharp className="text-[40px]" />
            </div>
            <h2 className="py-[20px] text-center">Barcha Resurslar</h2>
          </div>
          <div className="w-[200px] rounded-[10px] overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-200">
            <div className="h-[130px] flex items-center justify-center">
              <FaStar className="text-[40px] text-[gold]" />
            </div>
            <h2 className="py-[20px] text-center">Barcha Resurslar</h2>
          </div>
          {courseCAtegory?.data?.map((item: ICategory) => (
            <div className="w-[200px] rounded-[10px] overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-200">
              <div className="h-[130px]">
                <img src={item.image} alt="" className="object-cover h-full " />
              </div>
              <h2 className="py-[20px] text-center">{item.name}</h2>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {resources?.data?.map((item: IResources) => (
            <div
              key={item.id}
              className="rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="h-[200px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  by {item.user.firstName}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed tracking-wide mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span></span>
                  <span>6/10/2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5B21B6] font-medium hover:underline cursor-pointer">
                    Oldindan Ko'rish
                  </span>
                  <button className="py-2 px-4 rounded-full bg-[#5B21B6] text-white hover:bg-opacity-90 transition">
                    Yuklab olish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesCards;
