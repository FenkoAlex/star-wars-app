import React from "react";
import Link from 'next/link';

import type { Character } from '../../type';

export const Row: React.FC<Character> = ({ name, gender, birth_year, url }) => {
  const idMatch = url.match(/people\/(\d+)/i);

  return (
  <article className="flex max-w-xl flex-col items-start justify-between py-4">
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <Link href={`/character/${idMatch ? idMatch[1] : ''}`}>
          <span className="absolute inset-0"></span>
          {name}
        </Link>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        Gender: {gender}
        Birth year: {birth_year}
      </p>
    </div>
  </article>
)};