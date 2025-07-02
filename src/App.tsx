import { HugeiconsIcon } from '@hugeicons/react'
import { SearchIcon } from '@hugeicons/core-free-icons'

export function App(){
  return (
    <div className='bg-background'>
      <HugeiconsIcon 
      icon={SearchIcon} 
      className='bg-background'/>
      <h1 className='title-sm'>DM Sans</h1>
      <h1 className='title-md'>teste</h1>
      <h1 className='title-lg'>teste</h1>
      <h1 className='label-md'>teste</h1>
    </div>
  )

}