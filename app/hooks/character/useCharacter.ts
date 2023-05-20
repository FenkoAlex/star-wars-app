import { useState, useEffect } from "react";

import { getCharacter } from '../../api';
import { Character } from '../../type';

export const useCharacter = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    setLoading(true);
    getCharacter(id).then(response => {
      setCharacter(response.data);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  return {
    character, setCharacter, loading
  }
}