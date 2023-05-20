"use client"

import React, { useReducer } from "react";

import { useCharacter } from '../../hooks';
import { Loader } from '../../components';

import type { Character } from '../../type';

export default function Character({ params: { id } }: {
  params: {
    id: string;
  }
}) {
  const {
    character, setCharacter, loading
  } = useCharacter(id);

  const handleChange = (param: keyof Character, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCharacter({
      ...character,
      [param]: event.target.value,
    } as Character)
  }

  return loading ? (
    <div className='w-2xl'>
      <Loader wrapperClassName='mx-auto w-8 py-8' />
    </div>
  ) : (
    <>
      <h2 className="text-3xl w-full font-bold tracking-tight text-gray-900 sm:text-4xl">
        {character?.name}
      </h2>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
        <div className="mt-2.5">
          <input
            value={character?.name}
            onChange={(e) => handleChange('name', e)}
            type="text" name="name" id="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="year" className="block text-sm font-semibold leading-6 text-gray-900">Birth year</label>
        <div className="mt-2.5">
          <input
            onChange={(e) => handleChange('birth_year', e)}
            value={character?.birth_year}
            type="text" name="year" id="year" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Eye color</label>
        <div className="mt-2.5">
          <input
            onChange={(e) => handleChange('eye_color', e)}
            value={character?.eye_color} type="text" name="company" id="company" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Hair color</label>
        <div className="mt-2.5">
          <input 
            onChange={(e) => handleChange('hair_color', e)}
            value={character?.hair_color} name="email" id="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Gender</label>
        <div className="mt-2.5">
          <textarea 
            onChange={(e) => handleChange('gender', e)}
            value={character?.gender} name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
    </>
  )
};
