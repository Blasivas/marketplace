import { AccessIcon, CallIcon, ImageUploadIcon, Mail02Icon, User03Icon, ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ButtonAuth } from "../../components/ButtonAuth"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import z from 'zod'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { createSeller } from "../../api/CreateSeller"
import { useMutation } from "@tanstack/react-query"
import { attachment } from "../../api/Attachment"


const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg']

const FileUploadForm = z.object({
  file: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0;
    }, "A imagem de perfil é obrigatória")
    .refine((files) => {
      return Array.from(files ?? []).every((file) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type)
      );
    }, "Tipo de arquivo precisa ser uma imagem PNG ou JPEG.")
})

type FileUploadForm = z.infer<typeof FileUploadForm>

const CadastroForm = z.object({
  name: z.string().nonempty(),
  phone: z.string().nonempty(),
  email: z.email().nonempty(),
  password: z.string().nonempty(),
  confirmation: z.string().nonempty(),
})

type CadastroForm = z.infer<typeof CadastroForm>

export function Cadastro(){
  const navigate = useNavigate()
  
  const [showPassword, setShowPassword] = useState(false)
  
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }
  
  const { handleSubmit, register, formState: { errors } } = useForm<CadastroForm>({resolver: zodResolver(CadastroForm)})

  const { mutateAsync: create } = useMutation({
    mutationFn: createSeller,
  })
  
  async function handleCadastro(data: CadastroForm){
    try {
      await create({
        name: data.name,
        phone: data.phone,
        email: data.email,
        avatarId: '' ,
        password: data.password,
        passwordConfirmation: data.confirmation
       })
      navigate('/sign-in')
      toast.success('Usuário cadastrado com sucesso!')
    } catch (error) {
      toast.error('Não foi possivel realizar o cadastro, verifique os dados informados')
    }
  }
  
  return (
    <div className="flex flex-col gap-10 ">
      <title>Cadastrar | Marketplace</title>
      <div className="gap-2">
        <h1 className="title-md text-gray-500">Crie sua conta</h1>
        <span className="body-sm text-gray-300">Informe os seus dados pessoais e de acesso</span>
      </div>

      <form onSubmit={handleSubmit(handleCadastro)} 
      className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">

          <h2 className="title-sm text-gray-500">Perfil</h2>

          <label htmlFor="upload" className="flex h-[120px] w-[120px] bg-shape rounded-xl hover:cursor-pointer">
            <HugeiconsIcon icon={ImageUploadIcon} size={32} className="text-orange-base m-auto"/>
          </label>
          <input id="upload" type="file" {...register("file")} className="hidden"/>
          {errors.avatarId?.message && (
              <span className="text-danger body-xs text-center m-3">{errors.avatarId.message}</span>
            )}

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
            <input id='password' type={showPassword ? "text" : "password"} placeholder='Senha de acesso' {...register('password')} className="body-md label-md text-gray-200 w-full" />
            <button type='button' onClick={toggleShowPassword}>
              <HugeiconsIcon icon={showPassword ? ViewOffIcon : ViewIcon} size={24} />
            </button>
          </div>
        </label>

        <label htmlFor='password' className="label-md text-gray-300 mt-5 focus-within:text-orange-base">CONFIRMAR SENHA
          <div className="flex border-b-gray-200 border-b-2 p-3 ">
            <HugeiconsIcon icon={AccessIcon} size={24} 
            className="text-gray-200 mr-2 focus:text-orange-base invalid:text-danger"/>
            <input id='confirmation' type={showPassword ? "text" : "password"} placeholder='Confirme sua senha' {...register('confirmation')} className="body-md label-md text-gray-200 w-full" />
            <button type='button' onClick={toggleShowPassword}>
              <HugeiconsIcon icon={showPassword ? ViewOffIcon : ViewIcon} size={24} />
            </button>
          </div>
        </label>
          
        </div>

        <ButtonAuth variant="orange">Cadastrar</ButtonAuth>
      </form>

      <div className="gap-5 flex flex-col">
        <h2 className="body-md text-gray-300">Ja tem uma conta?</h2>
        <Link to='/sign-in'>
          <ButtonAuth variant="white">Acessar</ButtonAuth>
        </Link>
      </div>
    </div>
  )
}