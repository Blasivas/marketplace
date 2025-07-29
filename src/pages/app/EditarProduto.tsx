import { ArrowDown01Icon, Tick02Icon, UnavailableIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonApp } from "../../components/ButtonApp";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import productImage from '../../../assets/New folder/Image.png'

const EditarProdutoForm = z.object({
  title: z.string().nonempty(),
  value: z.number(),
  description: z.string(),
  category: z.enum([
    'toy',
    'furniture',
    'stationery',
    'health_beauty',
    'utensil',
    'clothing'
  ]),
})

type EditarProdutoForm = z.infer<typeof EditarProdutoForm>

export function EditarProduto() {
  const navigate = useNavigate()

  const { handleSubmit, register, formState } = useForm<EditarProdutoForm>({resolver: zodResolver(EditarProdutoForm)})

  function handleNovoProduto(data: EditarProdutoForm){
    try {
      console.log(data)
      navigate('/app/produtos')
      toast.success('Produto editado com sucesso!')
    } catch (error) {
      toast.error('Não foi possivel editar o produto, verifique os dados informados')
    }
  }
  return (
    <div className="flex flex-col items-center gap-10">
    <title>Editar produto | Marketplace</title>
      <div className="flex flex-col items-start gap-2 w-[1030px]">
        <h1 className="title-md text-gray-500">Editar produto</h1>
        <div className="flex justify-between w-full">
          <p className="body-sm text-gray-300">Gerencie as informações do produto cadastrado</p>
          <div className="flex gap-4">
            <button className="flex gap-2 text-orange-base action-sm">
              <HugeiconsIcon icon={Tick02Icon} size={20} className=""/>Marcar como vendido
            </button>
            <button className="flex gap-2 text-orange-base action-sm">
              <HugeiconsIcon icon={UnavailableIcon} size={20} className=""/>Desativar anúncio
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">

        <img src={productImage} className="h-fit" />

        <div className="flex flex-col bg-white rounded-[20px] p-8 w-[591px] gap-8">
          <div className="flex justify-between">
            <h2 className="title-sm text-gray-300">Dados do produto</h2>        
            <span className="flex label-sm text-white bg-blue-dark rounded-2xl justify-center items-center px-2 py-1">ANUNCIADO</span>
          </div>

          <form onSubmit={handleSubmit(handleNovoProduto)} className="flex flex-col gap-5 ">
            <div className="flex gap-5">
              <label htmlFor='title' 
              className="flex flex-col label-md text-gray-300 focus-within:text-orange-base w-7/10 border-b-gray-200 border-b-2 ">TÍTULO      
                  <input id='title' type='text' placeholder='Nome do produto' {...register('title')} className="body-md text-gray-200 w-full h-5 my-3.5" />                
              </label>

              <label htmlFor='value' className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2">VALOR            
                  <input id='value' type='number' placeholder='0,00' {...register('value', { valueAsNumber: true })} className="body-md text-gray-200 w-full h-5 my-3.5" />                
              </label>
            </div>

            <label htmlFor='description' className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2">DESCRIÇÃO              
                <textarea id='description' rows={5} placeholder='Escreva detalhes sobre o produto, tamanho, características' {...register('description')} className="body-md text-gray-200 w-full my-3.5 resize-none" />              
            </label>

            <label htmlFor="category" className="flex flex-col label-md text-gray-300 focus-within:text-orange-base border-b-gray-200 border-b-2 relative">CATEGORIA
              <select id="category" 
              {...register('category')} required
              className="flex body-md text-gray-200 items-center h-5 appearance-none z-1 my-3.5" >
                <option value="">Selecione</option>
                <option value="toy">Brinquedo</option>
                <option value="furniture">Móvel</option>
                <option value="stationery">Papelaria</option>
                <option value="health_beauty">Saúde & Beleza</option>
                <option value="utensil">Utensílio</option>
                <option value="clothing">Vestuário</option>
              </select>
              <HugeiconsIcon icon={ArrowDown01Icon} size={24} className="text-gray-300 absolute right-2 top-6" />
              {formState.errors.category && (
              <span className="text-red-500 text-xs mt-1">{formState.errors.category.message || "Selecione uma categoria"}</span>
            )}
            </label>

            <div className="flex gap-3 mt-5">
              <Link to="/app/produtos"><ButtonApp variant="white">Cancelar</ButtonApp></Link>
              <ButtonApp variant="orange" type="submit">Salvar e atualizar</ButtonApp>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
 }