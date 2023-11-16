import React from "react";
import Link from "next/link";
const SelectorFuncion = () => {
  return (
    <section class="text-gray-600 bg-white body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h4 class=" text-indigo-500 tracking-widest font-medium title-font mb-1">¡Bienvenido!</h4>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-semibold">Nombre de empresa</h1>
    </div>
    <h3 class="pl-4 text-left mb-5 font-bold">Modulos</h3>
    <div class="flex flex-wrap -m-4 ">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Pedidos</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Agregá nuevos pedidos al sistema y encontrá los pedidos previamente registrados.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Entrar
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div> 
             <Link href={'/tareas'}>

      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">

          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Tareas</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Encontrá tu lista de tareas y registrá nuevas.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Entrar
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
                </Link> 

    </div>
  </div>
</section>
  );
};

export default SelectorFuncion;
