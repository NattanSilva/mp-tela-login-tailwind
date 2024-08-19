import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type EmailRecuperation = z.infer<typeof ModalSchema>
type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalSchema = z.object({
  email: z.string().email('O e-mail deve ser válido'),
})

export function ModalContainer({ setModal }: ModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EmailRecuperation>({
    resolver: zodResolver(ModalSchema),
  })

  const handleSendRecuperationEmail = (data: EmailRecuperation) => {
    console.log(data)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center z-50 bg-black bg-opacity-5'>
      <div className='w-4/5 md:w-2/5 lg:w-1/4 p-4 relative border-2 border-white bg-[#070709] rounded-lg animation-pop'>
        <button
          onClick={() => setModal(false)}
          className='absolute -top-4 -right-4 w-10 h-10 lg:w-12 lg:h-12 text-2xl lg:text-3xl bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3 rounded-full font-bold text-white cursor-pointer'
        >
          X
        </button>
        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit(handleSendRecuperationEmail)}
        >
          <h3 className='flex gap-1 items-end font-bold text-white text-xl lg:text-3xl'>
            Recuperação de senha
          </h3>
          <span className='w-full text-zinc-400 text-sm lg:text-lg'>
            Preencha o campo abaixo com o seu e-mail cadastrado para receber o
            link de redefinição de senha.
          </span>
          <div className='w-full p-[1px] rounded-lg bg-transparent focus-within:bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3'>
            <input
              type='email'
              placeholder='johnDoe@mail.com'
              className='w-full h-12 px-2 rounded-lg bg-zinc-800 text-white outline-none appearance-none'
              {...register('email')}
            />
          </div>
          {errors?.email && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
          <button
            type='submit'
            className='w-full h-12 text-2xl font-semibold rounded-lg text-white bg-gradient-to-tr from-rainbow-1 via-rainbow-2 via-[46%] to-rainbow-3 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
