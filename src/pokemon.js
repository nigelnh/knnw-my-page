export function setupPokemonAnimations() {
  const MAX_POKEMON = 151; // First generation Pokemon
  const SPAWN_INTERVAL = 8000; // Spawn a Pokemon every 8 seconds
  
  async function createPokemon() {
    const id = Math.floor(Math.random() * MAX_POKEMON) + 1;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      
      const pokemon = document.createElement('div');
      pokemon.className = 'pokemon-sprite';
      pokemon.style.backgroundImage = `url(${data.sprites.front_default})`;
      
      // Random position on screen
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + 50;
      
      pokemon.style.left = `${startX}px`;
      pokemon.style.top = `${startY}px`;
      
      document.body.appendChild(pokemon);
      
      // Animate the Pokemon
      const animation = pokemon.animate([
        { transform: `translate(0, 0) scale(1)` },
        { transform: `translate(${Math.random() * 200 - 100}px, -${window.innerHeight + 100}px) scale(1.5)` }
      ], {
        duration: 10000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      });
      
      animation.onfinish = () => pokemon.remove();
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  }

  // Start spawning Pokemon
  setInterval(createPokemon, SPAWN_INTERVAL);
  createPokemon(); // Spawn first Pokemon immediately
} 