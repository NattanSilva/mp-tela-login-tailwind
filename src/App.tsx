import { useState } from 'react';
import { Login } from './routes/Login';
import { Regist } from './routes/Regist';

function App() {
  const [registred, setRegistred] = useState(true);

  return (
    <div className="w-screen h-screen">
      {registred ? (
        <Login setResgistred={setRegistred} />
      ) : (
        <Regist setResgistred={setRegistred} />
      )}
    </div>
  );
}

export default App;
