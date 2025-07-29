import { Outlet } from "react-router";
import icone from '../../../assets/Icone.svg'
import user from '../../../assets/User.png'
import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useLocation } from "react-router";


export function AppLayout() {

  const { pathname } = useLocation()

  return(
    <>
      <header className="h-20 p-5 flex justify-between border-b-1 border-b-shape">
        <img src={icone} alt="Logotipo do marketplace" className="h-10"/>
        
        <nav className="flex gap-2">
          <Link to={'/app/dashboard'} data-current={pathname === '/app/dashboard'} 
          className="flex gap-2 h-10 w-[140px] justify-center items-center rounded-xl action-sm group 
          hover:text-orange-dark hover:cursor-pointer text-gray-300
          data-[current=true]:bg-shape data-[current=true]:text-orange-base data-[current=true]:cursor-default">
              <HugeiconsIcon icon={ChartHistogramIcon} size={20} 
              className="data-[current=false]:text-gray-300 data-[current=true]:group-hover:text-orange-dark data-[current=true]:text-orange-base" />Dashboard
          </Link>

          <Link to={'/app/produtos'} data-current={pathname === '/app/produtos'} 
          className="flex gap-2 h-10 w-[140px] justify-center items-center rounded-xl action-sm group 
          hover:text-orange-dark hover:cursor-pointer text-gray-300
          data-[current=true]:bg-shape data-[current=true]:text-orange-base data-[current=true]:cursor-default">
            <HugeiconsIcon icon={PackageIcon} size={20} 
            className="data-[current=false]:text-gray-300 data-[current=true]:group-hover:text-orange-dark data-[current=true]:text-orange-base" />Produtos
          </Link>
        </nav>

        <div className="flex gap-4">
          <Link to={'/app/novo-produto'} data-current={pathname === '/app/novo-produto'}>
            <button className="flex rounded-xl w-[157px] h-10 px-4 py-2.5 action-sm items-center hover:cursor-pointer text-white bg-orange-base gap-2">
              <HugeiconsIcon icon={PlusSignIcon} size={20} className="text-white" /> Novo produto
            </button>
          </Link>
          <img src={user} alt="" />
        </div>
      </header>
      <div className="flex flex-col w-8/10 mx-auto mt-12 gap-10"><Outlet /></div>
    </>
  )
}