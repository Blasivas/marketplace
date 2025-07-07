import { HugeiconsIcon } from "@hugeicons/react"
import { AccessIcon, ArrowRight02Icon, Mail02Icon, ViewIcon } from "@hugeicons/core-free-icons"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function SignIn(){
  return (
    <div>
      <h1 className="title-md text-gray-500 mb-2">Acesse sua conta</h1>
      <span className="body-sm text-gray-300">Informe seu e-mail e senha para entrar</span>
      <form action="" className="flex flex-col mt-12">
        <Input label="E-MAIL" variant="mail" />
        <Input label="SENHA" variant="password"/>
        <span  className="mb-12"></span>
        <Button variant="orange">Acessar</Button>
      </form>
      <div className="flex flex-col">
        <span className="mb-5 mt-32">Ainda não tem uma conta?</span>
        <Button variant="white">Cadastrar</Button>
      </div>
    </div>
  )
}