import { Product } from "../../components/Product";
import { Link } from "react-router";
import { ProductFilter } from "../../components/ProductFilter";
import { getProducts } from "../../api/GetProducts";
import { useQuery } from "@tanstack/react-query";


export function Produtos() {

  const {data: result = {}} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const data = result.products
  console.log(data)

  

  return (
    <>
      <title>Produtos | Marketplace</title>
      <div className="flex flex-col items-start gap-2">
        <h1 className="title-md text-gray-500">Seus produtos</h1>
        <p className="body-sm text-gray-300">Acesse e gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="flex gap-6">
        <ProductFilter />
        
        <div className="flex flex-wrap justify-center gap-4 pr-0.5 overflow-x-hidden overflow-y-auto max-h-[70vh] w-fit [&::-webkit-scrollbar-thumb]:bg-orange-base">
          {data?.map(item => {
            return (
            <Link to={'/app/editar-produto'} key={item.id}>
              <Product
                title={item.title}
                description={item.description}
                priceInCents={item.priceInCents}
                status={item.status}
                category={item.category}
              />
            </Link>
          )})}
          
        </div>
      </div>
    </>
  )
}