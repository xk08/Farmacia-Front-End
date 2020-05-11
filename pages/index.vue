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
        <b-button variant="outline-secondary" to="/addDrug">Cadastrar novo remédio</b-button>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="styles colorContent">
          <Drug
            v-for="item in drugs"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :qtd="item.amount"
            :id="item.id"
            :value="item.value"
          />
        </div>
      </b-col>
    </b-row>
</div>
  </b-container>
</template>

<script>
import Drug from "@/components/Drug";
import axios from "axios";
import { API_ROOT } from "../services/api-config";
const serverUrl = API_ROOT;

export default {
  components: {
    Drug
  },

  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          drugs: []
        });
      }, 1500);
    });
  },

  mounted() {
    axios
      .get(serverUrl + "/drugs")
      .then(response => {
        this.drugs = response.data;
      })
      .catch(error => {
        errorCallback(error);
      });
  }
};
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
  padding-top: 5px ;
  padding-bottom: 5px ;
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
  padding-left: 10px;
}

.colorContentBorder {

  border: solid 2px #8d9296;
}

</style>