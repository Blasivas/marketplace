import ProductImage from '../../assets/New folder/Rectangle4835.png'

enum ProductStatus {
  sold = 'Vendido',
  cancelled = 'Cancelado',
  available = 'Disponível',
}

type ProductProps = {
  title: string
  description: string
  priceInCents: number
  status: string
  category: { title: string }
}

export function Product({ title, description, priceInCents, status, category }: ProductProps) {


  return (
    <div className="flex flex-col w-xs max-h-62 bg-white rounded-xl p-1 relative gap-1">
      <img src={ProductImage} />
      <div className="flex absolute right-3 top-3 gap-1">
      <span className='bg-blue-dark text-white rounded-2xl px-2 py-1 label-sm'>{ProductStatus[status as keyof typeof ProductStatus]}</span>
      <span className='bg-gray-400 text-white rounded-2xl px-2 py-1 label-sm'>{category.title}</span>
      </div>
      <div className='flex flex-col gap-2 p-3'>
        <div className='flex justify-between'>
          <b className='subtitle text-gray-400'>{title}</b>
          <b className='subtitle text-gray-400'><span className='label-md'>R$</span>{(priceInCents / 100).toFixed(2).replace('.', ',')}</b>
        </div>
        <p className='body-sm text-gray-300 text-start h-9 line-clamp-2'>{description}</p>
      </div>
    </div>
  )
}