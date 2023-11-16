import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '@/contexts/AppContext';




export default function Login({  }) {
  const { loginUser } = useAppContext();

  const [username, setUserName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username, // Make sure to use the state variables here
      empresa,
      password
    });
  }

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-14 w-auto" src="/assets/logo.png" alt="Your Company"/>
      <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accedé a tu cuenta</h2>
    </div>
  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Empresa</label>
          <div class="mt-2">
            <input id="email" name="empresa" type="text" onChange={e => setEmpresa(e.target.value)}   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
          <div class="mt-2">
            <input id="email" name="name" type="text" onChange={e => setUserName(e.target.value)}   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" onChange={e => setPassword(e.target.value)}  type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Acceder</button>
        </div>
      </form>
  
    </div>
  </div>

  )}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
