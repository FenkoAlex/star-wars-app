import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from 'lodash'

import { getCharacters } from '../../api';
import { Character } from '../../type';
import { count } from "console";

export const useCharacters = (initSearch: string = '') => {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState(initSearch);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharactersDebounced = useMemo(() => debounce((search, page) => {
    setLoading(true);
    getCharacters(search, page).then(response => {
      setCharacters(response.data.results);
      setCount(response.data.count);
    }).finally(() => {
      setLoading(false);
    })
  }, 300), []);

  useEffect(() => {
    getCharactersDebounced(search, page);
  }, [search, page, getCharactersDebounced]);

  return {
    page, setPage,
    search, setSearch,
    characters, loading, count
  }
}