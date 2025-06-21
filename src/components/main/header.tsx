import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import axios from "axios";
import { FaPowerOff } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [lang, setLang] = useState<"uz" | "ru" | "en">(
    (localStorage.getItem("selectedLang") as "uz" | "ru" | "en") || "uz"
  );

  useEffect(() => {
    localStorage.setItem("selectedLang", lang);
  }, [lang]);

  const fetchMydata = async () => {
    const res = await axios.get(`https://findcourse.net.uz/api/users/mydata`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const { data: myData } = useQuery({
    queryKey: ["mydata"],
    queryFn: fetchMydata,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  console.log(myData);
  return (
    <header className="fixed top-0 left-0 py-4 px-[2%] flex flex-col gap-7 w-full z-40 bg-white shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul className="hidden lg:flex gap-[20px] items-center py-[14] px-[24]">
          <li>
            <Link to={"/"} className="text-[#4B5563] text-[16px] font-[500]">
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-[#4B5563] text-[16px] font-[500]"
            >
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link
              to={"/resources"}
              className="text-[#4B5563] text-[16px] font-[500]"
            >
              Resurslar
            </Link>
          </li>
          <li>
            <Link to={"/"} className="text-[#4B5563] text-[16px] font-[500]">
              <span className="flex items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-5 w-5 transition-colors duration-300 group-hover:fill-[#461773] group-hover:stroke-[#461773]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  ></path>
                </svg>
                Sevimlilar
              </span>
            </Link>
          </li>
          {token && (
            <li>
              <Link
                to={"/appointment"}
                className="text-[#5d556a] text-[16px] font-[500]"
              >
                Navbatlar
              </Link>
            </li>
          )}
          {myData?.data?.role == "CEO" && (
            <li>
              <div className="group relative">
                <div className="cursor-pointer">
                  <h2 className="text-[#5d556a]">CEO boshqaruv paneli</h2>
                </div>

                <div className="group-hover:flex hidden absolute w-[200px]  p-[10px] bg-[#fff] rounded-[5px] flex-col">
                  <button
                    onClick={() => navigate("/create-centers")}
                    className="rounded-[7px] p-[5px] cursor-pointer hover:bg-[#de9a7a] flex items-center gap-[7px]"
                  >
                    <IoMdAddCircle />
                    <p>Markaz yaratish</p>
                  </button>
                  <button
                    onClick={() => navigate("/my-centers")}
                    className="rounded-[7px] p-[5px] cursor-pointer hover:bg-[#de9a7a] flex items-center gap-[7px]"
                  >
                    <HiMiniBuildingOffice2 />
                    <p>Mening markazlarim</p>
                  </button>
                </div>
              </div>
            </li>
          )}
        </ul>
        <div className="flex gap-[20px] items-center">
          <div className="relative flex items-center gap-[10px]">
            <img
              src={
                {
                  uz: "/uz.svg",
                  ru: "/ru.svg",
                  en: "/en.svg",
                }[lang]
              }
              alt="Current language"
              className="w-5 h-3.5 object-cover"
            />
            <Select
              value={lang}
              dropdownStyle={{
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "4px",
              }}
              style={{ width: 100 }}
              suffixIcon={<IoChevronDown />}
              onChange={(value) => {
                setLang(value);
                window.location.reload();
              }}
              options={[
                {
                  value: "uz",
                  label: <span>O'zbekcha</span>,
                },
                {
                  value: "ru",
                  label: <span>Русский</span>,
                },
                {
                  value: "en",
                  label: <span>English</span>,
                },
              ]}
              className="language-select border border-gray-200 rounded-lg pl-2"
            />
          </div>
          {!token && (
            <div className="hidden md:flex gap-[7px] items-center">
              <Link
                to={"/login"}
                className="border-[1.5px] border-[#461773] text-[#461773] rounded-[50px] cursor-pointer px-[20px] py-[7px] text-[#4B5563] text-[16px] font-[500]"
              >
                Kirish
              </Link>
              <Link
                to={"/register"}
                className=" bg-[#461773] text-[#fff] rounded-[50px] cursor-pointer px-[20px] py-[7px]"
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          )}
          {token && (
            <div className="group relative">
              <div className="flex rounded-[50px] cursor-pointer group-hover:bg-[#de9a7a] p-[3px] pr-[10px] items-center gap-[10px]">
                <div className="rounded-full bg-[#999] h-[30px] w-[30px] border-[1px] border-[#888]">
                  <img
                    src="https://openclipart.org/image/2000px/247319"
                    alt=""
                  />
                </div>
                <div>
                  <h2>
                    {myData?.data?.firstName} {myData?.data?.lastName}
                  </h2>
                </div>
              </div>

              <div className="group-hover:flex right-[0px] hidden w-[200px] absolute  p-[10px] bg-[#fff] rounded-[5px] flex-col">
                <h2 className="text-[14px] font-[600] leading-[60%] mt-[10px]">
                  {myData?.data?.firstName} {myData?.data?.lastName}
                </h2>
                <p className="text-[14px] font-[300]">{myData?.data?.email}</p>
                <button
                  onClick={() => navigate("/profile")}
                  className="rounded-[7px] p-[5px] cursor-pointer hover:bg-[#de9a7a] flex items-center gap-[7px]"
                >
                  <MdEdit />
                  <p>Profilni tahrirlash</p>
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-[7px] p-[5px] cursor-pointer hover:bg-[#de9a7a] flex items-center gap-[7px]"
                >
                  <FaPowerOff className="text-[red]" />
                  <p className="text-[red]">Chiqish</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
