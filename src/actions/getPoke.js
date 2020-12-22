import axios from 'axios'

export const fetchPokemon = (first, count, filter) => async (dispatch) => {
  if (filter === 'all') {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${first}&limit=${count}`)
    const pokeBase = pokemons.data.results.map((pokemon) => axios(pokemon.url))
    const pokeInfo = await (await Promise.all(pokeBase)).map(element => element.data)
    const pokeObj = {
      pokeBase: pokeInfo,
      count: pokemons.data.count
    }
    dispatch({
      type: 'FETCH_POKEMON',
      payload: pokeObj
    })
  } else {
    const pokemons = (await axios.get(`https://pokeapi.co/api/v2/type/${filter}`)).data
    const pokeBase = pokemons.pokemon.slice(first, first + count).map((item) => axios(item.pokemon.url))
    console.log(first, count)
    const pokeInfo = await (await Promise.all(pokeBase)).map(element => element.data)
    const pokeObj = {
      pokeBase: pokeInfo,
      count: pokemons.pokemon.length
    }
    dispatch({
      type: 'FETCH_POKEMON',
      payload: pokeObj
    })
  }
}
export const changeCount = (count) => (dispatch) => {
  dispatch({
    type: 'CHANGE_COUNT',
    payload: count
  })
}
export const changePage = (first) => async (dispatch) => {
  const newFirst = first
  await dispatch({
    type: 'CHANGE_PAGE',
    payload: newFirst
  })
}
export const generatePage = (page, count) => (dispatch) => {
  const newPage = page * count
  dispatch({
    type: 'G_PAGE',
    payload: newPage
  })
}
export const getPokemon = (poke) => new Promise(resolve => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`).then(res => resolve(res.data))
})
