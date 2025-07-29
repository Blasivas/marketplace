import { ArrowDown01Icon, SaleTag02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonApp } from "./ButtonApp";

export function ProductFilter() {
  return (
    <form className="flex flex-col p-6 gap-5 bg-white rounded-xl max-h-75 w-80 items-start">
          <b className="title-sm text-gray-300 mb-1">Filtrar</b>
          <div className="flex gap-2 h-12 w-full items-center border-b-gray-200 border-b-2">
            <HugeiconsIcon icon={Search01Icon} size={24} className="text-gray-200"/>
            <input type="search" placeholder="Pesquisar" className="body-md w-full h-8 text-gray-200 placeholder:text-gray-200 appearance-none"/>
          </div>
          
          <div className="flex gap-2 mb-5 h-12 w-full items-center border-b-gray-200 border-b-2 relative">
            <HugeiconsIcon icon={SaleTag02Icon} size={24} className="text-gray-200"/>
            <select name="status" id="status" className="body-md items-center w-full h-8 text-gray-200 appearance-none z-1" >
              <option value="">Status</option>
              <option value="announced">Anunciado</option>
              <option value="sold">Vendido</option>
              <option value="canceled">Cancelado</option>
            </select>
              <HugeiconsIcon icon={ArrowDown01Icon} size={24} className="text-gray-300 absolute right-2 bottom-3" />
          </div>
          
          <ButtonApp variant="orange">Aplicar filtro</ButtonApp>
        </form>
  )
}