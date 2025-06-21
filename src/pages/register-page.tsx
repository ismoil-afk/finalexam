import { RegisterForm } from "@/components";

function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className='absolute inset-0 bg-[url("/navbatlar/navbatlar_hero.png")] bg-cover bg-center'></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0e4e]/80 to-[#34115a]/90"></div>
        <div className="relative z-10 w-full flex flex-col justify-center items-center text-white p-12">
          <h1 className="text-5xl font-bold mb-6">Hisob yaratish</h1>
          <p className="text-xl text-center text-gray-200 max-w-md">
            Eng yaxshi ta'limni kashf qilish va bog'lanish uchun bizga
            qo'shiling imkoniyatlar
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
