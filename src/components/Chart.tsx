import { Calendar04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { date: '01', views: 808 },
  { date: '02', views: 103 },
  { date: '03', views: 315 },
  { date: '04', views: 344 },
  { date: '05', views: 887 },
  { date: '06', views: 719 },
  { date: '07', views: 970 },
  { date: '08', views: 913 },
  { date: '09', views: 386 },
  { date: '10', views: 422 },
  { date: '11', views: 372 },
  { date: '12', views: 596 },
  { date: '13', views: 683 },
  { date: '14', views: 374 },
  { date: '15', views: 113 },
  { date: '16', views: 689 },
  { date: '17', views: 980 },
  { date: '18', views: 760 },
  { date: '19', views: 414 },
  { date: '20', views: 952 },
  { date: '21', views: 464 },
  { date: '22', views: 210 },
  { date: '23', views: 486 },
  { date: '24', views: 108 },
  { date: '25', views: 676 },
  { date: '26', views: 564 },
  { date: '27', views: 341 },
  { date: '28', views: 644 },
  { date: '29', views: 340 },
  { date: '30', views: 944 },
]

export function Chart() {
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
        <LineChart data={data}>
          <CartesianGrid stroke="#EAEAEA" vertical={false} strokeDasharray="10 10" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} stroke="#949494" height={15}/>
          <YAxis dataKey="views" axisLine={false} tickLine={false} stroke="#949494" width={40}/>
          <Line stroke="#009CF0" type="monotone" strokeWidth={2} dataKey="views" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}