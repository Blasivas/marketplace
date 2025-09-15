import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ButtonApp } from '../../components/ButtonApp'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import productImage from '../../../assets/New folder/Image.png'
import { getProductByID } from '../../api/GetProductByID'
import { useEffect } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import { editProduct, type EditProductBody } from '../../api/EditProduct'
import { ButtonSold } from '../../components/ButtonSold'
import { ButtonCancelled } from '../../components/ButtonCancelled'

const ProductStatus = {
  sold: 'VENDIDO',
  cancelled: 'CANCELADO',
  available: 'DISPONIVEL',
}

const EditarProdutoForm = z.object({
  title: z.string().nonempty(),
  value: z.number(),
  description: z.string(),
  category: z.enum([
    'informatica',
    'moveis',
    'livros',
    'esportes',
    'brinquedos',
    'alimentos',
    'moda',
    'eletronicos',
    'eletrodomesticos',
    'decoracao',
  ]),
})

type EditarProdutoForm = z.infer<typeof EditarProdutoForm>

export function EditarProduto() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductByID(id!),
  })

  const navigate = useNavigate()

  const { handleSubmit, register, formState, setValue } =
    useForm<EditarProdutoForm>({ resolver: zodResolver(EditarProdutoForm) })

  useEffect(() => {
    if (data?.product) {
      setValue('title', data.product.title)
      setValue('value', data.product.priceInCents / 100)
      setValue('description', data.product.description)
      setValue('category', data.product.category.slug as any)
    }
  }, [data, setValue])

  const { mutateAsync: edit } = useMutation({
    mutationFn: ({ id, body }: { id: string; body: EditProductBody }) =>
      editProduct(id, body),
  })

  async function handleEditarProduto(data: EditarProdutoForm) {
    try {
      const dataToSend = {
        ...data,
        value: data.value * 100,
      }

      await edit({
        id: id!,
        body: {
          title: data.title,
          categoryId: data.category,
          description: data.description,
          priceInCents: dataToSend.value,
          attachmentsIds: [],
        },
      })
      toast.success('Produto editado com sucesso!')
      navigate(0)
    } catch (error) {
      toast.error(
        'Não foi possivel editar o produto, verifique os dados informados',
      )
    }
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <title>Editar produto | Marketplace</title>
      <div className="flex flex-col items-start gap-2 w-[1030px]">
        <h1 className="title-md text-gray-500">Editar produto</h1>
        <div className="flex justify-between w-full">
          <p className="body-sm text-gray-300">
            Gerencie as informações do produto cadastrado
          </p>
          <div className="flex gap-4">
            <ButtonSold />
            <ButtonCancelled />
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <img src={productImage} alt="Produto a venda" className="h-fit" />

        <div className="flex flex-col bg-white rounded-[20px] p-8 w-[591px] gap-8">
          <div className="flex justify-between">
            <h2 className="title-sm text-gray-300">Dados do produto</h2>
            <span className="flex label-sm text-white bg-blue-dark rounded-2xl justify-center items-center px-2 py-1">
              {data?.product?.status
                ? ProductStatus[
                    data.product.status as keyof typeof ProductStatus
                  ]
                : ''}
            </span>
          </div>

          <form
            onSubmit={handleSubmit(handleEditarProduto)}
            className="flex flex-col gap-5 "
          >
            <div className="flex gap-5">
              <label
                htmlFor="title"
                className="flex flex-col label-md text-gray-300 focus-within:text-orange-base w-7/10 border-b-gray-200 border-b-2 "
              >
                TÍTULO
                <input
                  id="title"
                  type="text"
                  {...register('title')}
                  className="body-md text-gray-400 w-full h-5 my-3.5"
                />
              </label>

              <label
                htmlFor="value"
                className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2"
              >
                VALOR
                <div className="flex items-center gap-1">
                  <span className="text-orange-base body-md">R$</span>
                  <input
                    id="value"
                    type="number"
                    step="0.01"
                    {...register('value', { valueAsNumber: true })}
                    className="body-md text-gray-400 w-full h-5 my-3.5"
                  />
                </div>
              </label>
            </div>

            <label
              htmlFor="description"
              className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2"
            >
              DESCRIÇÃO
              <textarea
                id="description"
                rows={5}
                {...register('description')}
                className="body-md text-gray-400 w-full my-3.5 resize-none"
              />
            </label>

            <label
              htmlFor="category"
              className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2 relative"
            >
              CATEGORIA
              <select
                id="category"
                {...register('category')}
                required
                className="flex body-md text-gray-400 items-center h-5 appearance-none z-1 my-3.5"
              >
                <option value="brinquedos">Brinquedos</option>
                <option value="moveis">Móveis</option>
                <option value="informatica">Informática</option>
                <option value="livros">Livros</option>
                <option value="esportes">Esportes</option>
                <option value="alimentos">Alimentos</option>
                <option value="moda">Moda</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="eletrodomesticos">Eletrodomésticos</option>
                <option value="decoracao">Decoração</option>
              </select>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                size={24}
                className="text-gray-300 absolute right-2 top-6"
              />
              {formState.errors.category && (
                <span className="text-red-500 text-xs mt-1">
                  {formState.errors.category.message ||
                    'Selecione uma categoria'}
                </span>
              )}
            </label>

            <div className="flex gap-3 mt-5">
              <Link to="/app/produtos">
                <ButtonApp variant="white">Cancelar</ButtonApp>
              </Link>
              <ButtonApp variant="orange" type="submit">
                Salvar e atualizar
              </ButtonApp>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
