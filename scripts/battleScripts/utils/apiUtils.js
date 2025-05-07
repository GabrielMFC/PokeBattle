export default async function fetchMoveData(moveName) {
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${moveName}`)
    return response.data
}