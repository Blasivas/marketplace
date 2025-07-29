import { classMerge } from "../utils/classMerge"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

type ButtonAuthProps = React.ComponentProps<'button'> & {
  children: string
  variant: 'white' | 'orange'
}

const variants = {
  buttonAuth: {
    white: 'text-orange-base border-orange-base border-1 hover:text-orange-dark hover:border-orange-dark',
    orange:'bg-orange-base text-white hover:bg-orange-dark',
  }
}

export function ButtonAuth({ children, variant }: ButtonAuthProps) {
  return <>
    <button className={classMerge(['flex rounded-xl w-[403px] h-[56px] px-5 action-md items-center place-content-between hover:cursor-pointer', variants.buttonAuth[variant]])}>{children}<HugeiconsIcon icon={ArrowRight02Icon} size={24}/></button>
  </>
}