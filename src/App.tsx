import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3 flex items-center justify-center">
          <p className="text-white font-bold text-4xl">NS</p>
        </div>
        <h4 className="text-white font-semibold text-xl lg:text-4xl">
          Seja bem vindo Nattan Silva!
        </h4>
        <button
          onClick={handleLogout}
          className="text-white text-2xl font-semibold bg-violet-500 px-8 py-2 rounded-lg"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default App;
