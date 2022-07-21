<script>
import CategoriasApi from "@/api/categoria.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodosAsCategorias();
  },

  methods: {
    async salvar() {
      if (this.categoria.id) {
        await CategoriasApi.atualizarCategoria(this.categoria);
      } else {
        await CategoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await CategoriasApi.buscarTodosAsCategorias();
      this.time = {};
    },
    async excluir(categoria) {
      await CategoriasApi.excluircategoria(categoria.id);
      this.categoria = await CategoriasApi.buscarTodosAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Categorias</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Gênero"
        v-model="novo_categoria"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.name }}</td>
            <td>
              <button @click="editar(categoria)">Editar</button>
              <button @click="excluir(categoria)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
