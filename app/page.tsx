"use client"

import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { useCharacters } from './hooks';
import { Loader, Row } from './components';

const navSize = 10;

export default function Home() {
  const {
    page, setPage,
    search, setSearch,
    loading, characters, count
  } = useCharacters();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePreviousPageClick = () => {
      setPage(page - 1);
  }

  const handleNextPageClick = () => {
    setPage(page + 1);
  }


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
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            
          <p className="text-sm text-gray-700">
                Page {page}, <span className="font-medium">{count}</span> results
              </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={handlePreviousPageClick}
                disabled={page < 2}
                className="mr-2 relative inline-flex items-center rounded px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={handleNextPageClick}
                disabled={page >= Math.ceil(count / navSize)}
                className="relative inline-flex items-center rounded px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
