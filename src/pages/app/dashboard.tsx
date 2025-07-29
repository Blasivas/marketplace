import { Chart } from "../../components/Chart";
import { Metrics } from "../../components/Metrics";

export function Dashboard(){
  return (
    <>
      <title>Dashboard | Marketplace</title>
      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="title-md text-gray-500">Últimos 30 dias</h1>
        <p className="body-sm text-gray-300">Confira as estatísticas da sua loja no último mês</p>
      </div>

      <div className="flex gap-6 w-full">
        <Metrics />

        <Chart />
      </div>
    </>
  )
}