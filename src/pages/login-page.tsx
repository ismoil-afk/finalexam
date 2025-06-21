import { LoginForm } from "@/components";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className='absolute inset-0 bg-[url("/navbatlar/navbatlar_hero.png")] bg-cover bg-center'></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0e4e]/80 to-[#34115a]/90"></div>
        <div className="relative z-10 w-full flex flex-col justify-center items-center text-white p-12">
          <h1 className="text-5xl font-bold mb-6">Xush kelibsiz</h1>
          <p className="text-xl text-center text-gray-200 max-w-md">
            Sizning mukammal ta'lim imkoniyatlarini topish sari sayohatingiz shu
            yerda davom etadi
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
