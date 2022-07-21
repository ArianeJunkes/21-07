import axios from 'axios';
export default class AutoresApi {
    async buscarTodosAsAutores(){
        const response = await axios.get(`http://localhost:4000/autores`);
        return response.data;
    }
    async buscarAutor(id){
        const response = await axios.get(`http://localhost:4000/autores/${id}`);
        return response.data;
    }
    async adicionarAutor(autor){
        const response = await axios.get(`http://localhost:4000/autores`, autor);
        return response.data;
    }
    async excluirAutor(id){
        const response = await axios.get(`http://localhost:4000/autores/${id}`);
        return response.data;
    }
    async atualizarAutor(autor){
        const response = await axios.get(`http://localhost:4000/autores/${autor.id}`,autor,);
        return response.data;
    }
}