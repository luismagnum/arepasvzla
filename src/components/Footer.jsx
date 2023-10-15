import React from 'react'

const Footer = () => {
  return (
    <footer className='relative'>
    <div className='absolute top-0 left-0 w-full overflow-hidden bg-zinc-900'>
    <div className='grid lg:grid-cols-4 ml-1 md:grid-cols-2 grip-col-1 p-20 m-4'>
        <div className='flex flex-col gap-5'>
         <h2 className='text-[22px] text-yellow-600 gap-5 font-semibold py-2 uppercase'>Empanadas</h2>
         <ul>
          <li>Carne c/queso</li>
          <li>Pollo c/ queso</li>
         </ul>
        </div>
        <div className='flex flex-col gap-5'>
         <h2 className='text-[22px] text-yellow-600 gap-5 font-semibold py-2 uppercase'>Tequeños</h2>
         <ul>
          <li>Queso</li>
          <li>Queso y jamon</li>
         </ul>
        </div>
        <div className='flex flex-col gap-5'>
         <h2 className='text-[22px] text-yellow-600 gap-5 font-semibold py-2 uppercase'>Torta 3leches</h2>
         <ul>
          <li>Rico postre</li>
          <li>Venezolano</li>
         </ul>
        </div>
        <div className='flex flex-col gap-5'>
         <h2 className='text-[22px] text-yellow-600 gap-5 font-semibold py-2 uppercase'>Arepas</h2>
         <ul>
          <li>Carne esmechada</li>
          <li>Pollo c/queso</li>
         </ul>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
