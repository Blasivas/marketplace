import { Outlet } from "react-router";
import icone from '../../../assets/Icone.svg'
import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export function AppLayout() {
  return(
    <>
      <header className="h-20 p-5 flex justify-between">
        <img src={icone} alt="Logotipo do marketplace" className="h-10"/>
        <nav className="flex gap-2">
          <button className="bg-shape flex gap-2 h-10 w-[140px] justify-center items-center rounded-xl text-orange-base action-sm">
            <HugeiconsIcon icon={ChartHistogramIcon} size={20} className="text-orange-base" />Dashboard
          </button>
          <button className="bg-shape flex gap-2 h-10 w-[140px] justify-center items-center rounded-xl text-orange-base action-sm">
            <HugeiconsIcon icon={PackageIcon} size={20} className="text-orange-base" />Produtos
          </button>
        </nav>

        <div>
          <button className="flex rounded-xl w-[157px] h-10 px-4 py-2.5 action-sm items-center hover:cursor-pointer text-white bg-orange-base gap-2"><HugeiconsIcon icon={PlusSignIcon} size={20} className="text-white" /> Novo produto</button>
          <img src="" />
        </div>
      </header>
      <Outlet />
    </>
  )
}