import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-5 md:px-10 py-[20px] bg-[#451774]">
      <div className="max-w-[1200px] mx-auto">
        <Link
          to={"/"}
          className="px-[20px] py-[5px] rounded-[5px] flex items-center max-w-[200px] mb-[30px] mr-[50px]"
        >
          <img src="/Screenshot_5.png" alt="logo" className="w-full h-auto" />
        </Link>
        <div className="mx-[20px] flex flex-col justify-start md:flex-row gap-[50px]">
          <div className="flex w-full md:w-[300px] justify-between">
            <ul className="flex flex-col gap-5">
              <li className="text-white">
                <a href="#">Bosh sahifa</a>
              </li>
              <li className="text-white">
                <a href="#">O'quv markazlar</a>
              </li>
              <li className="text-white">
                <a href="#">Biz haqimizda</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="text-white">
                <a href="#">Aloqa</a>
              </li>
              <li className="text-white">
                <a href="#">Sharhlar</a>
              </li>
              <li className="text-white">
                <a href="#">Loyihalar</a>
              </li>
            </ul>
          </div>
          <div className="flex w-full md:w-[300px] justify-between">
            <ul className="flex flex-col gap-5">
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  It
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  Matematika
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  Marketing
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  SAT
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  Ingliz tili
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  SMM
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  Dizayn
                </Link>
              </li>
              <li className="text-[#888] ">
                <Link to={"#"} className="text-[16px] font-[400]">
                  Biznes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] text-[#888]">
            © 2025 Findedu. All Rights Reserved. Best Girls
          </p>
          <div className="flex gap-[20px] items-center">
            <Link to={"#"}>
              <SlSocialFacebook className="text-[#888] text-[30px]" />
            </Link>
            <Link to={"#"}>
              <FaInstagram className="text-[#888] text-[30px]" />
            </Link>
            <Link to={"#"}>
              <FaTelegramPlane className="text-[#888] text-[30px]" />
            </Link>
            <Link to={"#"}>
              <FaYoutube className="text-[#888] text-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
