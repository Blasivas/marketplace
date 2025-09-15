import { classMerge } from '../utils/classMerge'

type ButtonAppProps = React.ComponentProps<'button'> & {
  children: string
  variant: 'white' | 'orange'
}

const variants = {
  buttonApp: {
    white:
      'text-orange-base border-orange-base border-1 hover:text-orange-dark hover:border-orange-dark',
    orange: 'bg-orange-base text-white hover:bg-orange-dark',
  },
}

export function ButtonApp({ children, variant }: ButtonAppProps) {
  return (
    <>
      <button
        className={classMerge([
          'flex rounded-xl w-68 h-[52px] action-md items-center justify-center place-content-between hover:cursor-pointer',
          variants.buttonApp[variant],
        ])}
      >
        {children}
      </button>
    </>
  )
}
