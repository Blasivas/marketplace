import { Calendar04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getViewsPerDay } from "../api/GetViewsPerDay";
import { useQuery } from "@tanstack/react-query";

export function Chart() {

  const {data: result = {}} = useQuery({
    queryKey: ['views-per-day'],
    queryFn: getViewsPerDay,
  })

  const data = result.viewsPerDay
  console.log(data)
  
  const transformedData = (data) => {
    return data?.map(item =>{
      const day = new Date(item.date).getUTCDate().toString().padStart(2, '0')
      return {
        date: day,
        views: item.amount
      }
    })
  }

  console.log(transformedData(data))

  return(
    <div className="flex flex-col bg-white rounded-xl p-6 w-full gap-7">
      <div className="flex justify-between items-center">
        <h2 className="title-sm text-gray-500 text-start">Visitantes</h2>
        <div className="flex gap-2 items-center">
          <HugeiconsIcon icon={Calendar04Icon} size={16} className="text-blue-dark"/>
          <span className="label-sm text-gray-300">01 de junho - 30 de junho</span>
        </div>
      </div>
      <ResponsiveContainer width='100%' >
        <LineChart data={transformedData(data)}>
          <CartesianGrid stroke="#EAEAEA" vertical={false} strokeDasharray="10 10" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} stroke="#949494" height={15}/>
          <YAxis dataKey="views" axisLine={false} tickLine={false} stroke="#949494" width={40}/>
          <Line stroke="#009CF0" type="monotone" strokeWidth={2} dataKey="views" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}