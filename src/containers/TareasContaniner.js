import React, { useState } from 'react';
import TareasForm from "@/components/TareasForm";
import TareasTable from '@/components/TareasTable';
function TareasContaniner() {
  const [isChecked, setIsChecked] = useState(false);

  // Step 5: Event handler to update the state variable when the checkbox changes
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <section class="text-gray-600 bg-white body-font relative">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-3">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Tareas
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Encontrá tu lista de tareas y registrá nuevas.
          </p>
        </div>
        <div class="flex justify-center mb-2 borde">
          <label
            for="Toggle3"
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
            <input id="Toggle3" type="checkbox" className="hidden peer"  checked={isChecked} onChange={handleCheckboxChange} />
            <span className="py-2 rounded-l-md px-16 verdetgbg text-white peer-checked:dark:bg-gray-300  peer-checked:text-black">
              Crear Tarea
            </span>
            <span className=" py-2 rounded-r-md px-16  dark:bg-gray-300 text-black peer-checked:dark:bg-gray-500 peer-checked:text-white">
              Ver tareas
            </span>
          </label>
        </div>
        {isChecked ? <TareasTable></TareasTable> : <TareasForm></TareasForm>}
      </div>
    </section>
  );
}

export default TareasContaniner;

//* Empresa (req) * Responsable (req - responsable asignado al usuario logueado) * Hs. invertidas (opc) * Descripción (req) * Notificar a (opc) * Detalle de tarea (opc) * Estado (req. Defecto: 'P') Opciones: P|1.Pendiente|E|2.En proceso|S|3.Stand by|C|4.Cumplida|X|5.Cancelada|L|6.Pend. cliente|I|7.Pend. Itris
//rad rad text area rad area rad