import { Link } from "react-router";


export function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col items-center rounded-[20px] bg-white p-7">
        <title>Página não encontrada</title>
        <h1 className="title-lg text-danger m-2">Página não encontrada</h1>
        <p className="title-md text-gray-400 m-2">Retornar para a <Link to="/" className="text-blue-dark">pagina inicial</Link> </p>
      </div>
    </div>
  )
}