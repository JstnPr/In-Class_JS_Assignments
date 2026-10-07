const pokedexImg = document.querySelector('#poke-img');
const pokedexName = document.querySelector('#poke-name');
const pokedexTypes = document.querySelector('#poke-types');
const pokedexWeaknesses = document.querySelector('#poke-weaknesses');
const fieldIndex = document.querySelector('#field-index');
const connectionStatus = document.querySelector('#connection-status');
const screenPanel = document.querySelector('.screen-panel');
const previousPokemon = document.querySelector('#previous-pokemon');
const nextPokemon = document.querySelector('#next-pokemon');

const REQUEST_DELAY_MS = 500;
let currentPokemonId = null;
let latestRequestId = 0;

function setNavigationDisabled(disabled) {
  previousPokemon.disabled = disabled || currentPokemonId === null || currentPokemonId <= 1;
  nextPokemon.disabled = disabled || currentPokemonId === null;
}

async function getPokemonData(pokemonIdentifier) {
  const requestId = ++latestRequestId;
  const url = `https://pokeapi.co/api/v2/pokemon/${String(pokemonIdentifier).toLowerCase()}`;
  setNavigationDisabled(true);
  connectionStatus.textContent = 'SCANNING';
  connectionStatus.dataset.state = 'loading';
  screenPanel.classList.add('is-loading');

  try {
    await new Promise(resolve => window.setTimeout(resolve, REQUEST_DELAY_MS));
    if (requestId !== latestRequestId) return;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error | Status: ${response.status}`);
    }

    const data = await response.json();
    const typeResponses = await Promise.all(data.types.map(t => fetch(t.type.url).then(res => res.json())));
    const doubleFrom = typeResponses.flatMap(t => t.damage_relations.double_damage_from.map(w => w.name));
    const halfFrom = typeResponses.flatMap(t => t.damage_relations.half_damage_from.map(r => r.name));
    const noFrom = typeResponses.flatMap(t => t.damage_relations.no_damage_from.map(i => i.name));
    const weaknesses = [...new Set(doubleFrom)].filter(w => !halfFrom.includes(w) && !noFrom.includes(w));

    if (requestId !== latestRequestId) return;

    const sprite = data.sprites.other?.showdown?.front_default
      || data.sprites.other?.['official-artwork']?.front_default
      || data.sprites.front_default;

    if (sprite) {
      pokedexImg.src = sprite;
    } else {
      pokedexImg.removeAttribute('src');
    }
    pokedexImg.alt = `${data.name} illustration`;
    const spriteScale = Math.min(1, Math.max(0.7, Math.sqrt(data.height / 15)));
    pokedexImg.style.setProperty('--sprite-scale', spriteScale.toFixed(2));
    pokedexName.innerHTML = `${data.name.toUpperCase()} <span class="id">#${data.id.toString().padStart(4, '0')}</span>`;
    fieldIndex.textContent = data.id.toString().padStart(4, '0');
    pokedexTypes.innerHTML = data.types.map(t => `<span class="type ${t.type.name}">${t.type.name}</span>`).join('');
    pokedexWeaknesses.innerHTML = weaknesses.map(weakName => `<span class="type ${weakName}">${weakName}</span>`).join('');
    currentPokemonId = data.id;
    connectionStatus.textContent = 'DATA LINK ACTIVE';
    connectionStatus.dataset.state = 'ready';
    return data;
  } catch (error) {
    if (requestId === latestRequestId) {
      connectionStatus.textContent = 'DATA LINK ERROR';
      connectionStatus.dataset.state = 'error';
      console.error('Failed to fetch Pokemon data:', error.message);
    }
  } finally {
    if (requestId === latestRequestId) {
      screenPanel.classList.remove('is-loading');
      setNavigationDisabled(false);
    }
  }
}

previousPokemon.addEventListener('click', () => {
  if (currentPokemonId > 1) getPokemonData(currentPokemonId - 1);
});

nextPokemon.addEventListener('click', () => {
  if (currentPokemonId !== null) getPokemonData(currentPokemonId + 1);
});

getPokemonData('ditto');