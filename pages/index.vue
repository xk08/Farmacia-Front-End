<template>
  <b-container fluid="md">
    <b-row>
      <b-col>
        <div class="colorTitle">
          <div class="styleTitle">Remédios cadastrados no sistema</div>
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

    <b-row>
        <b-col>
          <b-button block variant="outline-secondary">Cadastrar novo produto</b-button>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Drug from "@/components/Drug";
import axios from "axios";

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
        axios.get('http://localhost:8080/drugs')
        .then(response =>{
            this.drugs = response.data;
        })
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
  background-color: #e7eaed;
  padding-top: 10px;
  padding-bottom: 10px;
}

.styleTitle {
  color: aliceblue;
  font-size: 18pt;
  font-weight: 500;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>