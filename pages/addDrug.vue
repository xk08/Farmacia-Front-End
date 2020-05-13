<template>
  <b-container fluid="md">
    <div class="space">
      <b-row>
        <b-col>
          <b-button variant="outline-secondary" to="/">Listar produtos cadastrados</b-button>
        </b-col>
      </b-row>
    </div>

    <b-row>
      <b-col>
        <div class="colorTitle">
          <div class="styleTitle">Cadastrar/Editar Remédio</div>
        </div>
      </b-col>
    </b-row>

  <form>
    <div class="colorContent">
      <b-row>
        <b-col sm="6" class="inputText">
          <label for="input-live">Titulo ou nome</label>
          <b-form-input id="title" v-model="title" placeholder="Exemplo: Nimesulida"></b-form-input>
        </b-col>

        <b-col class="inputText">
          <label for="input-live">Valor em Reais (R$)</label>
          <b-form-input id="value" v-model="value" placeholder="Exemplo: 120,00 "></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-4">
        <b-col sm="6" class="inputText">
          <label for="input-live">Quantidade em estoque (unidades)</label>
          <b-form-input id="amount" v-model="amount" placeholder="Exemplo: 6"></b-form-input>
        </b-col>

        <b-col class="inputText">
          <label for="input-live">Imagem ou Figura (URL)</label>
          <b-form-input id="image" v-model="image" placeholder="Exemplo: https://imagem-teste.jpg"></b-form-input>
        </b-col>
      </b-row>

      <b-col class="styles">
        <b-button  type=submit variant="outline-success" @click="submitForm" to="/">Enviar</b-button>
      </b-col>
    </div>
  </form>
</b-container>
</template>

<script>
  import axios from 'axios';
  import { API_ROOT } from "../services/api-config";
  const serverUrl = API_ROOT;

export default {

  asyncData() {
    return {
      title: '',
      value: '',
      amount: '',
      image:''
    }
  },
       
methods : {

  //Método para adicionr um novo remédio
  submitForm() {
    axios.post(serverUrl + "/drugs", {
      title: this.title,
      value: this.value,
      amount: this.amount,
      image: this.image
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        
      })
    },

    //Método pra excluir um medicamento
    //Fazendo FIXO, pra testar
    async updateDrug(idDrug) {
      let responseUp = await axios.put(serverUrl + "/drugs/" + idDrug, {
        title: "AlbuminA",
        value: "555,00",
        amount: "800",
        image:
          "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/01-desk.png"
      });
      console.log(responseUp);
      this.findDrugs();
    }
  }

}
</script>

<style scoped>
.styles {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.colorTitle {
  background-color: #8d9296;
}

.colorContent {
  padding: 15px;
  border: solid 2px #8d9296;
}

.styleTitle {
  color: #ffffff;
  font-size: 18pt;
  font-weight: 500;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.inputText {
  color: #8d9296;
  font-size: 15pt;
  font-weight: 500;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.space {
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>