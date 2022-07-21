import axios from 'axios';
export default class CategoriasApi {
    async buscarTodosAsCategorias(){
        const response = await axios.get(`http://localhost:4000/categorias`);
        return response.data;
    }
    async buscarEditora(id){
        const response = await axios.get(`http://localhost:4000/categorias/${id}`);
        return response.data;
    }
    async adicionarCategoria(categoria){
        const response = await axios.get(`http://localhost:4000/categorias`, categoria);
        return response.data;
    }
    async excluirCategoria(id){
        const response = await axios.get(`http://localhost:4000/categorias/${id}`);
        return response.data;
    }
    async atualizarCategoria(categoria){
        const response = await axios.get(`http://localhost:4000/categorias/${categoria.id}`,categoria,);
        return response.data;
    }
}