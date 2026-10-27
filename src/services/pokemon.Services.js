import { pokemonRepository } from "../repositories/pokemon.repository.js";

class PokemonService {
    async getall() {
        const pokemon = await pokemonRepository.getAll
        return pokemon
    }

    async getById(id) {
        const pokemon = await pokemonRepository.getById
        return pokemon
    }

    async create({ data }) {
        const pokemonCriado = await pokemonRepository.create(data)
        return pokemonCriado
    }

    async delete(id) {
        const pokemonDeletado = await pokemonRepository.delete(id)
        return pokemonDeletado
    }

    async updatePut(id, data) {
        const pokemon = await pokemonRepository.updatePut(id, data)

        return pokemon
    }


    async updateKnex(id, dados) {
        const [pokemonAtualizado] = await pokemonRepository.updateKnex(id, dados)
        return pokemonAtualizado
    }
}
export const pokemonService = new PokemonService();

