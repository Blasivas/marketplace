import { HugeiconsIcon } from '@hugeicons/react'
import { ButtonAuth } from '../../components/ButtonAuth'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import z from 'zod'
import {
  AccessIcon,
  Mail02Icon,
  ViewIcon,
  ViewOffIcon,
} from '@hugeicons/core-free-icons'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { login } from '../../api/Login'

const LoginForm = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty(),
})

type LoginForm = z.infer<typeof LoginForm>

export function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const { handleSubmit, register } = useForm<LoginForm>({
    resolver: zodResolver(LoginForm),
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: login,
  })

  async function handleLogin(data: LoginForm) {
    try {
      await authenticate({
        email: data.email,
        password: data.password,
      })

      navigate('/app/dashboard')
    } catch (error) {
      console.error(error)
      toast.error('E-mail ou senha inválidos')
    }
  }

  return (
    <div>
      <title>Login | Marketplace</title>
      <h1 className="title-md text-gray-500 mb-2">Acesse sua conta</h1>
      <span className="body-sm text-gray-300">
        Informe seu e-mail e senha para entrar
      </span>

      <form
        onSubmit={handleSubmit(handleLogin)}
        action=""
        className="flex flex-col mt-12"
      >
        <label
          htmlFor="email"
          className="label-md text-gray-300 mt-5 focus-within:text-orange-base"
        >
          E-MAIL
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon
              icon={Mail02Icon}
              size={24}
              className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"
            />
            <input
              id="email"
              type="email"
              placeholder="Seu e-mail cadastrado"
              {...register('email')}
              className="body-md label-md text-gray-200 w-full"
            />
          </div>
        </label>

        <label
          htmlFor="password"
          className="label-md text-gray-300 mt-5 focus-within:text-orange-base"
        >
          SENHA
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon
              icon={AccessIcon}
              size={24}
              className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"
            />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Sua senha de acesso"
              {...register('password')}
              className="body-md label-md text-gray-200 w-full"
            />
            <button type="button" onClick={toggleShowPassword}>
              <HugeiconsIcon
                icon={showPassword ? ViewOffIcon : ViewIcon}
                size={24}
              />
            </button>
          </div>
        </label>

        <span className="mb-12"></span>
        <ButtonAuth variant="orange">Acessar</ButtonAuth>
      </form>

      <div className="flex flex-col">
        <h2 className="mb-5 mt-32 body-md text-gray-300">
          Ainda não tem uma conta?
        </h2>
        <Link to="/sign-up">
          <ButtonAuth variant="white">Cadastrar</ButtonAuth>
        </Link>
      </div>
    </div>
  )
}
