import { Product } from "../../components/Product";
import { Link } from "react-router";
import { ProductFilter } from "../../components/ProductFilter";

export function Produtos() {
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
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          <Link to={'/app/editar-produto'}><Product /></Link>
          
        </div>
      </div>
    </>
  )
}