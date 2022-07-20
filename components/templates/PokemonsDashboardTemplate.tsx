import { useCallback, useEffect, useState, useRef } from 'react';

//import PokemonsList from '@components/organisms/PokemonsList';
import { usePokemonList } from '@hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const isWaiting = useRef(false);
  const [data, setData]= useState(usePokemonList())

  const onApproxPageBottom = useCallback(() => {
    const windowHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (window.innerHeight + window.scrollY >= windowHeight) {
        setData(usePokemonList())
      isWaiting.current = true;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        isWaiting.current = false;
      }, 600);
    }
  }, [usePokemonList]);

  useEffect(() => {
    window.addEventListener('scroll', onApproxPageBottom);

    return () => {
      window.removeEventListener('scroll', onApproxPageBottom);
    };
  }, [onApproxPageBottom]);

  return  
  <ul>
  {data}
</ul> ;
}

export default PokemonsDashboardTemplate;