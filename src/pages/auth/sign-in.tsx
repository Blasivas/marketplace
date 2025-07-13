import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "../../components/Button"
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import z from 'zod'
import { AccessIcon, Mail02Icon } from "@hugeicons/core-free-icons"
import { toast } from "sonner"
import { zodResolver } from '@hookform/resolvers/zod'

const signInForm = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn(){

  const { handleSubmit, register, formState: { errors } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  })

  function handleSignIn(data: SignInForm){
    try {
      console.log(data)      
    } catch (error) {
      toast.error('E-mail ou senha inválidos')
    }
  }
  
  return (
    <div>
      <h1 className="title-md text-gray-500 mb-2">Acesse sua conta</h1>
      <span className="body-sm text-gray-300">Informe seu e-mail e senha para entrar</span>

      <form onSubmit={handleSubmit(handleSignIn)} action="" className="flex flex-col mt-12">
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

        <span  className="mb-12"></span>
        <Button  variant="orange">Acessar</Button>
      </form>

      <div className="flex flex-col">
        <h2 className="mb-5 mt-32 body-md text-gray-300">Ainda não tem uma conta?</h2>
        <Link to='/sign-up'>
          <Button variant="white">Cadastrar</Button>
        </Link>
      </div>
    </div>
  )
}