import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#0E0D10]
    via-[#0E0D10] to-[#121216]"
    >
      <div className="w-[90%] flex flex-col gap-5 p-8 bg-[#070709] rounded-lg">
        <h3 className="w-full h-full flex items-end gap-1 text-2xl text-white font-bold">
          Faça seu Login
          <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] mb-2"></div>
        </h3>
        <form className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm text-[#9CA3AF]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="JohnDoe@mail.com"
              className="w-full h-10 px-2 bg-[#111112] rounded-lg text-white text-xs border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-[#9CA3AF]">
              Senha
            </label>
            <div className="w-full h-10 flex bg-[#111112] rounded-lg">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="JohnD0e@1!"
                className="w-[85%] h-full px-2 bg-transparent text-white text-xs border-transparent focus:border-transparent focus:ring-0 focus:outline-none rounded-s-lg"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="w-[15%] h-full flex justify-center items-center"
              >
                {!showPassword ? (
                  <FaEye className="text-[#9CA3AF] text-xs" />
                ) : (
                  <FaEyeSlash className="text-[#9CA3AF] text-xs" />
                )}
              </button>
            </div>
          </div>
          <a
            href="#"
            className="w-full flex justify-end underline mb-3 text-[#9CA3AF] text-xs"
          >
            Esqueci minha senha
          </a>
          <button
            type="submit"
            disabled
            className="w-full h-10 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] text-white text-xl font-semibold rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            Entrar
          </button>
          <a
            href="#"
            className="w-full flex justify-center underline mt-3 text-[#9CA3AF] text-xs"
          >
            Ainda não tenho conta
          </a>
        </form>
      </div>
    </main>
  );
};
