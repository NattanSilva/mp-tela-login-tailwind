import { FormImage } from '../../components/FormImage';
import { RegistForm } from '../../components/RegistForm';

export const Regist = () => {
  return (
    <main
      className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#0E0D10]
via-[#0E0D10] to-[#121216]"
    >
      <section className="w-4/5 lg:w-3/4 lg:h-[30rem] xl:h-[34rem] flex animation-pop">
        <RegistForm />
        <FormImage />
      </section>
    </main>
  );
};
