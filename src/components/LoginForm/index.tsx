import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type LoginFormProps = {
  setResgistred: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginForm = ({ setResgistred }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full md:w-2/5 flex flex-col justify-center gap-5 xl:gap-6 p-8  bg-[#070709] rounded-2xl md:rounded-e-none md:rounded-s-3xl">
      <h3 className="w-full flex items-end gap-1 text-2xl md:text-xl lg:text-3xl xl:text-4xl text-white font-bold">
        Faça seu Login
        <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] mb-2"></div>
      </h3>
      <form className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-1 lg:gap-2">
          <label
            htmlFor="email"
            className="text-sm md:text-xs lg:text-base xl:text-lg text-[#9CA3AF]"
          >
            Email
          </label>
          <div className="w-full p-[1px] bg-none focus-within:bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3 rounded-lg">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="JohnDoe@mail.com"
              className="w-full h-10 xl:h-14 px-2 lg:px-3 bg-[#111112] rounded-lg text-white text-xs xl:text-lg border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 lg:gap-2">
          <label
            htmlFor="password"
            className="text-sm md:text-xs lg:text-base xl:text-lg text-[#9CA3AF]"
          >
            Senha
          </label>
          <div className="w-full h-10 xl:h-14 flex p-[1px] bg-none focus-within:bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3 rounded-lg">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="JohnD0e@1!"
              className="w-[85%] h-full px-2 lg:px-3 bg-[#111112] text-white text-xs xl:text-lg text border-transparent focus:border-transparent focus:ring-0 focus:outline-none rounded-s-lg"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
              className="w-[15%] h-full flex justify-center items-center bg-[#111112] rounded-e-lg"
            >
              {!showPassword ? (
                <FaEye className="text-[#9CA3AF] text-xs xl:text-sm" />
              ) : (
                <FaEyeSlash className="text-[#9CA3AF] text-xs xl:text-sm" />
              )}
            </button>
          </div>
        </div>
        <span className="w-full flex justify-end underline mb-3 text-[#9CA3AF] text-xs lg:text-sm xl:text-lg cursor-pointer">
          Esqueci minha senha
        </span>
        <button
          type="submit"
          disabled={email === '' || password === ''}
          className="w-full h-10 xl:h-14 lg:mt-2 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] text-white text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          Entrar
        </button>
        <span
          onClick={() => setResgistred(false)}
          className="w-full flex justify-center underline mt-3 text-[#9CA3AF] text-xs lg:text-sm xl:text-lg cursor-pointer"
        >
          Ainda não tenho conta
        </span>
      </form>
    </div>
  );
};
