import { SaleTag02Icon, Store04Icon, UserMultipleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { getProductsSold } from "../api/GetProductsSold";
import { getAvailableProducts } from "../api/GetAvailableProducts";
import { useQuery } from "@tanstack/react-query";
import { getViewsReceived } from "../api/GetViewsReceived";

export function Metrics() {

  const {data: productsSold} = useQuery({
    queryKey: ['products-sold'],
    queryFn: getProductsSold,
  })
  const {data: availableProducts} = useQuery({
    queryKey: ['products-available'],
    queryFn: getAvailableProducts,
  })
  const {data: viewsReceived} = useQuery({
    queryKey: ['views-received'],
    queryFn: getViewsReceived,
  })


  return (
    <div className="flex flex-col gap-4">
          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={SaleTag02Icon} size={40} className="text-blue-dark" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">{productsSold?.amount}</strong>
              <p className="flex text-start body-xs text-gray-300">Produtos<br />vendidos</p>
            </div>
          </div>

          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={Store04Icon} size={40} className="text-blue-dark" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">{availableProducts?.amount}</strong>
              <p className="flex text-start body-xs text-gray-300">Produtos<br />anunciados</p>
            </div>
          </div>

          <div className="flex p-3 gap-4 bg-white pr-7 rounded-xl ">
            <div className="w-20 h-[86px] bg-blue-light rounded-xl flex justify-center items-center">
              <HugeiconsIcon icon={UserMultipleIcon} size={40} className="text-gray-300" />
            </div>
            <div className="flex flex-col gap-2 w-[103px]">
              <strong className="flex title-lg text-gray-400">{viewsReceived?.amount}</strong>
              <p className="flex text-start body-xs text-gray-300">Pessoas<br />visitantes</p>
            </div>
          </div>
        </div>
  )
}