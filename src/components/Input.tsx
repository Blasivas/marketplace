import { classMerge } from "../utils/classMerge"
import { Mail02Icon, AccessIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type InputProps = React.ComponentProps<'input'> & {
  label: string
  variant: 'mail' | 'password'
  password?: boolean
}

const variants = {
  input: {
    mail: Mail02Icon,
    password:AccessIcon,
  }
}

export function Input({ label, variant, password }: InputProps){
  return <>
    <label htmlFor="" className="label-md text-gray-300 mt-5">{label}</label>
    <div className="flex border-b-gray-200 border-b-2 py-3 ">
      <HugeiconsIcon icon={variants.input[variant]} size={24} className="text-gray-200 mr-2"/>
      <input type={variants.input[variant]} placeholder="Seu e-mail cadastrado" className="body-md"/>
    </div>
    </>
}