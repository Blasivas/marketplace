import { AccessIcon, CallIcon, ImageUploadIcon, Mail02Icon, User03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "../../components/Button"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import z from 'zod'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'


const signUpForm = z.object({
  name: z.string().nonempty(),
  phone: z.string().nonempty(),
  email: z.email().nonempty(),
  password: z.string().nonempty(),
  confirmation: z.string().nonempty(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
  const navigate = useNavigate()

  const { handleSubmit, register, formState: { errors } } = useForm<SignUpForm>({resolver: zodResolver(signUpForm)})

  function handleSignUp(data: SignUpForm){
    try {
      console.log(data)
      navigate('/sign-in')
    } catch (error) {
      toast.error('Não foi possivel realizar o cadastro, verifique os dados informados')
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="gap-2">
        <h1 className="title-md text-gray-500">Crie sua conta</h1>
        <span className="body-sm text-gray-300">Informe os seus dados pessoais e de acesso</span>
      </div>

      <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="title-sm text-gray-500">Perfil</h2>
          <label htmlFor="upload" className="flex h-[120px] w-[120px] bg-shape rounded-xl hover:cursor-pointer">
            <HugeiconsIcon icon={ImageUploadIcon} size={32} className="text-orange-base m-auto"/></label>

          <input id="upload" type="file" className="hidden"/>
          <label htmlFor='name' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">NOME
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={User03Icon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='name' type='text' placeholder='Seu nome completo' {...register('name')} className="body-md label-md text-gray-200 w-full" />
          </div>
        </label>

        <label htmlFor='phone' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">TELEFONE
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={CallIcon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='phone' type='tel' placeholder='(00) 00000-0000' {...register('phone')} className="body-md label-md text-gray-200 w-full" />
          </div>
        </label>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="title-sm text-gray-500">Acesso</h2>
          <label htmlFor='email' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">E-MAIL
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={Mail02Icon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='email' type='email' placeholder='Seu e-mail cadastrado' {...register('email')} className="body-md label-md text-gray-200 w-full" />
          </div>
        </label>

        <label htmlFor='password' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">SENHA
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={AccessIcon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='password' type='password' placeholder='Sua senha de acesso' {...register('password')} className="body-md label-md text-gray-200 w-full" />
          </div>
        </label>

        <label htmlFor='password' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">SENHA
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={AccessIcon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='confirmation' type='password' placeholder='Confirme sua senha de acesso' {...register('confirmation')} className="body-md label-md text-gray-200 w-full" />
          </div>
        </label>
          
        </div>

        <Button variant="orange">Cadastrar</Button>
      </form>

      <div className="gap-5 flex flex-col">
        <h2 className="body-md text-gray-300">Ja tem uma conta?</h2>
        <Link to='/sign-in'>
          <Button variant="white">Acessar</Button>
        </Link>
      </div>
    </div>
  )
}