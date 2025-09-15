import { ArrowDown01Icon, ImageUploadIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ButtonApp } from '../../components/ButtonApp'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createProduct } from '../../api/CreateProduct'
import { useMutation } from '@tanstack/react-query'

const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg']

const NovoProdutoForm = z.object({
  title: z.string().nonempty('Título obrigatório'),
  value: z.number().min(0, 'O valor deve ser maior que zero'),
  description: z.string().nonempty('Descrição obrigatória'),
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
  file: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0
    }, 'A imagem do produto é obrigatória')
    .refine((files) => {
      return Array.from(files ?? []).every((file) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type),
      )
    }, 'Tipo de arquivo precisa ser uma imagem PNG ou JPEG.'),
})

type NovoProdutoForm = z.infer<typeof NovoProdutoForm>

export function NovoProduto() {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NovoProdutoForm>({ resolver: zodResolver(NovoProdutoForm) })

  const { mutateAsync: create } = useMutation({
    mutationFn: createProduct,
  })

  async function handleNovoProduto(data: NovoProdutoForm) {
    try {
      await create({
        title: data.title,
        categoryId: data.category,
        description: data.description,
        priceInCents: data.value,
        attachmentsIds: [data.file[0].name],
      })
      console.log(data)
      navigate('/app/produtos')
      toast.success('Produto cadastrado com sucesso!')
    } catch (error) {
      toast.error(
        'Não foi possivel criar o produto, verifique os dados informados',
      )
    }
  }
  return (
    <div className="flex flex-col items-center gap-10">
      <title>Novo produto | Marketplace</title>
      <div className="flex flex-col items-start gap-2 w-[1030px]">
        <h1 className="title-md text-gray-500">Novo produto</h1>
        <p className="body-sm text-gray-300">
          Cadastre um produto para venda no marketplace
        </p>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="upload"
            className="flex flex-col h-[340px] w-[415px] bg-shape rounded-[20px] hover:cursor-pointer justify-center items-center gap-4"
          >
            <HugeiconsIcon
              icon={ImageUploadIcon}
              size={40}
              className="text-orange-base"
            />
            <span className="text-center body-sm text-gray-300">
              Selecione a imagem
              <br /> do produto
            </span>
          </label>
          <input
            id="upload"
            type="file"
            className="hidden"
            {...register('file')}
          />
          {errors.file?.message && (
            <span className="text-danger body-xs text-center m-3">
              {errors.file.message}
            </span>
          )}
        </div>

        <div className="flex flex-col bg-white rounded-[20px] p-8 w-[591px] gap-8">
          <h2 className="title-sm text-gray-300">Dados do produto</h2>

          <form
            onSubmit={handleSubmit(handleNovoProduto)}
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
                  placeholder="Nome do produto"
                  {...register('title')}
                  className="body-md text-gray-200 w-full h-5 my-3.5"
                />
              </label>

              <label
                htmlFor="value"
                className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2"
              >
                VALOR
                <input
                  id="value"
                  type="number"
                  placeholder="0,00"
                  {...register('value', { valueAsNumber: true })}
                  className="body-md text-gray-200 w-full h-5 my-3.5"
                />
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
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
                {...register('description')}
                className="body-md text-gray-200 w-full my-3.5 resize-none"
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
                className="flex body-md text-gray-200 items-center h-5 appearance-none z-1 my-3.5"
              >
                <option value="">Selecione</option>
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
              {errors.category && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.category.message || 'Selecione uma categoria'}
                </span>
              )}
            </label>

            <div className="flex gap-3 mt-5">
              <Link to="/app/produtos">
                <ButtonApp variant="white">Cancelar</ButtonApp>
              </Link>
              <ButtonApp variant="orange" type="submit">
                Salvar e publicar
              </ButtonApp>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
