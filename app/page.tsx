"use client"

import React from 'react';

import { useCharacters } from './hooks';
import { Loader, Row } from './components';

export default function Home() {
  const {
    page, setPage,
    search, setSearch,
    loading, characters
  } = useCharacters();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  return (
    <>
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl w-full font-bold tracking-tight text-gray-900 sm:text-4xl">Star wars characters</h2>
        <div className="mt-6 flex gap-x-4">
          <label htmlFor="character-name" className="sr-only">Character name</label>
          <input
            id="character-name"
            className="text-gray-900 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter character name"
            value={search}
            onChange={handleNameChange}
          />
          {/* <button onClick={handleClickSearch} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button> */}
        </div>
      </div>
      <div className="mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {loading ? (
          <div className='w-2xl'>
            <Loader wrapperClassName='mx-auto w-8 py-8' />
          </div>
        ) : (
          characters.length ?
            characters.map(item => <Row key={`${item.name}_${item.birth_year}`} {...item} />) :
            'Not found'
        )}
      </div>
    </>
  )
}
