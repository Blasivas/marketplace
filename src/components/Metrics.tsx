import { SaleTag02Icon, Store04Icon, UserMultipleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Metrics() {
  return (
    <div className="flex flex-col gap-4">
          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={SaleTag02Icon} size={40} className="text-blue-dark" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">24</strong>
              <p className="flex text-start body-xs text-gray-300">Produtos<br />vendidos</p>
            </div>
          </div>

          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={Store04Icon} size={40} className="text-blue-dark" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">56</strong>
              <p className="flex text-start body-xs text-gray-300">Produtos<br />anunciados</p>
            </div>
          </div>

          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={UserMultipleIcon} size={40} className="text-gray-300" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">1.238</strong>
              <p className="flex text-start body-xs text-gray-300">Pessoas<br />visitantes</p>
            </div>
          </div>
        </div>
  )
}