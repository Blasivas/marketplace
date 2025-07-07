import { Outlet } from 'react-router'
import logo from '../../../assets/Logo.png'
import background from '../../../assets/Background.png'

export function AuthLayout() {
  return(
    <div className='flex'>
      <aside className='flex-col mt-10 ml-10 min-w-[755px] max-h-[768px]'>
        <img src={logo} alt="" className='mb-5'/>
        <img src={background} alt="" className='h-496px w-3xl'/>
      </aside>
      <div className='flex w-full'>
        <div className='bg-white py-18 px-20 mx-auto rounded-4xl m-6'><Outlet /></div>
      </div>
    </div>
  )
}