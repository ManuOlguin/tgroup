import React from "react";

function TareasTable() {
  return (
    
    <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-200 dark:text-black dark:border-gray-200 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                Ultimos 30 días
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 tablaVar" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" >
                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar tareas"/>
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-200 dark:text-gray-800">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-100">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3">
                    Empresa
                </th>
                <th scope="col" class="px-6 py-3">
                    Responsable
                </th>
                <th scope="col" class="px-6 py-3">
                    Estado
                </th>
                <th scope="col" class="px-6 py-3">
                    Prioridad
                </th>
                <th scope="col" class="px-6 py-3">
                    Número
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Tareas - carga desde el celular (frontend) 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Tareas - carga desde el celular (frontend) 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Tareas - carga desde el celular (frontend) 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Tareas - carga desde el celular (frontend) 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Tareas - carga desde el celular (frontend) 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
        </tbody>
    </table>
    

</div>
<nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Mostrando <span class="font-bold">1-5</span> de <span class="font-bold ">30</span></span>
        <ul class="inline-flex -space-x-px text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">Anterior</a>
            </li>
            <li>
                <a href="#"  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-600 dark:text-white">1</a>
            </li>
            <li>
                <a href="#"  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
            </li>
            <li>
                <a href="#"  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#"  class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</a>
            </li>
        </ul>
    </nav>
    </div>

  );
}

export default TareasTable;

//* Empresa (req) * Responsable (req - responsable asignado al usuario logueado) * Hs. invertidas (opc) * Descripción (req) * Notificar a (opc) * Detalle de tarea (opc) * Estado (req. Defecto: 'P') Opciones: P|1.Pendiente|E|2.En proceso|S|3.Stand by|C|4.Cumplida|X|5.Cancelada|L|6.Pend. cliente|I|7.Pend. Itris
//rad rad text area rad area rad


