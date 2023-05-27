import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div class="container my-24 md:my-56 px-6 md:ml-10 mx-auto ">
    <section class= "text-gray-800 text-center lg:text-left">
      <div class="flex-col gap-6 xl:gap-1=9 items-center max-w-md">
        <div class=" lg:mb-0">
          <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
            MAGE 9 
            <span class="text-blue-600"> ITS 2023</span>
          </h2>
        </div>
        <div class="lg:mb-0">
          <p class="uppercase text-blue-600 text-2xl font-bold mt-8">MULTIMEDIA AND GAME EVENT</p>
          <h6 class="text-black text-xl mb-3">
             Build a Better Society with Smart City</h6>
        </div>
        <Button 
        name="Daftar Sekarang"
        link="#"
        />
      </div>
    </section>
    
  </div>
  )
}
