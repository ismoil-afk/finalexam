import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import toast from "react-hot-toast";
import { Modal } from "antd";

const API = import.meta.env.VITE_API;

function Profile() {
  const [editPage, setEditPage] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchMydata = async () => {
    const res = await axios.get(`${API}/api/users/mydata`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFname(res?.data?.data?.firstName);
    setLname(res?.data?.data?.lastName);
    setTelephone(res?.data?.data?.phone);
    return res.data;
  };

  const { data: myData } = useQuery({
    queryKey: ["mydata", editPage],
    queryFn: fetchMydata,
  });

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `${API}/api/users/${myData?.data?.id}`,
        { firstName: fname, lastName: lname, phone: telephone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditPage(false);
      toast.success("The profile edited successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const handleOk = async () => {
    try {
      await axios.delete(`${API}/api/users/${myData?.data?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("The profile edited successfully");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full"></div>
      <div className="flex flex-col md:flex-row gap-[100px] items-start">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <div className="w-[150px] h-[150px] rounded-full border-[2px] border-[#888] overflow-hidden mb-[20px]">
            <img
              src="https://openclipart.org/image/2000px/247319"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3 space-y-5">
          <div>
            <h2 className="text-[20px] font-[700] mb-[5px]">Ism</h2>
            {!editPage && (
              <p className="text-[17px] font-[400]">
                {myData?.data?.firstName}
              </p>
            )}
            {editPage && (
              <input
                onChange={(e) => setFname(e.target.value)}
                className="border-[1px] border-[#888] w-full p-[7px] rounded-[7px] outline-none"
                type="text"
                value={fname}
              />
            )}
          </div>
          <div>
            <h2 className="text-[20px] font-[700] mb-[5px]">Familiya</h2>
            {!editPage && (
              <p className="text-[17px] font-[400]">{myData?.data?.lastName}</p>
            )}
            {editPage && (
              <input
                onChange={(e) => setLname(e.target.value)}
                className="border-[1px] border-[#888] w-full p-[7px] rounded-[7px] outline-none"
                type="text"
                value={lname}
              />
            )}
          </div>
          <div>
            <h2 className="text-[20px] font-[700] mb-[5px]">Elektron pochta</h2>
            <p className="text-[17px] font-[400]">{myData?.data?.email}</p>
          </div>
          <div>
            <h2 className="text-[20px] font-[700] mb-[5px]">Telefon</h2>
            {!editPage && (
              <p className="text-[17px] font-[400]">{myData?.data?.phone}</p>
            )}
            {editPage && (
              <input
                onChange={(e) => setTelephone(e.target.value)}
                className="border-[1px] border-[#888] w-full p-[7px] rounded-[7px] outline-none"
                type="text"
                value={telephone}
              />
            )}
          </div>
          <div>
            <h2 className="text-[20px] font-[700] mb-[5px]">Kasbi</h2>
            <p className="text-[17px] font-[400]">{myData?.data?.role}</p>
          </div>
          {editPage && (
            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => handleSubmit()}
                className="rounded-[7px] p-[10px] cursor-pointer bg-[#22c55e] flex items-center gap-[10px] text-white"
              >
                <FaCheck className="text-[#fff]" />
                <p className="text-[#fff]">O'zgarishlarni saqlash</p>
              </button>
              <button
                onClick={() => setEditPage(false)}
                className="rounded-[7px] border-[#ef4444] border-[1px]  p-[10px] cursor-pointer bg-[#fff] flex items-center gap-[10px] text-[#ef4444]"
              >
                <FiDelete className="text-[#ef4444]" />
                <p className="text-[#ef4444]">Bekor qilish</p>
              </button>
            </div>
          )}
        </div>
      </div>
      {!editPage && (
        <div className="flex pt-[20px] gap-[65px]">
          <button
            onClick={() => showModal()}
            className="rounded-[7px] border-[#ef4444] border-[1px]  p-[10px] cursor-pointer bg-[#fff] flex items-center gap-[7px] text-[#ef4444]"
          >
            <FaTrashAlt className="text-[#ef4444]" />
            <p className="text-[#ef4444]">Accountni O'chirish</p>
          </button>
          {!editPage && (
            <button
              onClick={() => setEditPage(true)}
              className="rounded-[7px] p-[10px] cursor-pointer bg-[#451774] flex items-center gap-[7px] text-white"
            >
              <MdEdit className="text-[#fff]" />
              <p className="text-[#fff]">Profilni tahrirlash</p>
            </button>
          )}
        </div>
      )}
      <Modal
        title="❗Akkauntni o'chirishni tasdiqlash"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="text-[15px] font-[500]">
          Akkauntingizni o'chirishni istaysizmi? Bu amalni bekor qilib bo'lmaydi
          va barcha ma'lumotlaringiz butunlay o'chiriladi.
        </p>
      </Modal>
    </div>
  );
}

export default Profile;
