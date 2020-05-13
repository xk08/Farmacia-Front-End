<template>
  <b-container fluid="md">
    <b-row>
      <b-col>
        <div class="colorTitle">
          <div class="styleTitle">Remédios cadastrados no sistema</div>
        </div>
      </b-col>
    </b-row>

    <div class="colorContentBorder">
      <b-row>
        <b-col>
          <div class="colorContent space">
            <b-button variant="outline-success" to="/addDrug">Cadastrar novo remédio</b-button>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="styles colorContent">
            <article class="style" v-for="item in drugs" :key="item.id">
              <div class="fontDescription">ID:{{item.id}}</div>
              <div class="image" :style="{backgroundImage:'url('+item.image+')'}"></div>
              <h1 class="fontTitle">Remédio: {{item.title}}</h1>
              <div class="fontDescription">Valor: R${{item.value}}</div>
              <div class="fontDescription">Quantidade: {{item.amount}} unidades</div>

              <b-row class="styles">
                <div class="space">
                  <b-button variant="outline-info" :to="'/addDrug/'+item.id">Editar</b-button>
                </div>

                <div class="space">
                  <b-button variant="outline-danger" @click="deleteDrug(item.id)">Excluir</b-button>
                </div>
              </b-row>
            </article>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import { API_ROOT } from "../services/api-config";
const serverUrl = API_ROOT;

export default {
  asyncData() {
    return {
      drugs: []
    };
  },

  methods: {
    async findDrugs() {
      let response = await axios.get(serverUrl + "/drugs");
      this.drugs = response.data;
      console.log(response.data);
    },

    //Método pra excluir um medicamento
    async deleteDrug(idDrug) {
      let responseDel = await axios.delete(serverUrl + "/drugs/" + idDrug);
      console.log(responseDel);
      this.findDrugs();
    },

    //Método pra excluir um medicamento
    async updateDrug(idDrug) {
      let responseUp = await axios.put(serverUrl + "/drugs/" + idDrug, {
        title: "Albumina",
        value: "555,00",
        amount: "800",
        image:
          "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/6/produto.png"
      });
      console.log(responseUp);
      this.findDrugs();
    }
  },

  mounted() {
    this.findDrugs();
  }
};
</script>

<style scoped>
.style {
  box-sizing: border-box;
  width: 250px;
  padding: 15px;
  padding-top: 20px;
  border: 2px solid #9c989e;
  box-shadow: 0 2px 2px #aaa;
  margin: 15px;
}

.fontDescription {
  font-size: 13pt;
  font-weight: 300;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.image {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 120px;
}

.styles {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.colorTitle {
  background-color: #8d9296;
  padding-top: 5px;
  padding-bottom: 5px;
}

.colorContent {
  background-color: #e7eaed;
  padding-top: 10px;
  padding-bottom: 10px;
}

.styleTitle {
  color: #ffffff;
  font-size: 18pt;
  font-weight: 500;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.space {
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
}

.colorContentBorder {
  border: solid 2px #8d9296;
}

.fontTitle {
  font-size: 18pt;
  font-weight: 500;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>