import ProductImage from '../../assets/New folder/Rectangle4835.png'
export function Product() {
  return (
    <div className="flex flex-col w-xs max-h-62 bg-white rounded-xl p-1 relative gap-1">
      <img src={ProductImage} />
      <div className="flex absolute right-3 top-3 gap-1">
      <span className='bg-blue-dark text-white rounded-2xl px-2 py-1 label-sm'>ANUNCIADO</span>
      <span className='bg-gray-400 text-white rounded-2xl px-2 py-1 label-sm'>Móvel</span>
      </div>
      <div className='flex flex-col gap-2 p-3'>
        <div className='flex justify-between'>
          <b className='subtitle text-gray-400'>Sofá</b>
          <b className='subtitle text-gray-400'><span className='label-md'>R$</span>1.200,90</b>
        </div>
        <p className='body-sm text-gray-300 text-start h-9 line-clamp-2'>Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam incidunt distinctio delectus, provident facilis maiores iure voluptatibus ea illum eum beatae. Ipsa assumenda commodi iste deserunt dolore sequi totam?</p>
      </div>
    </div>
  )
}