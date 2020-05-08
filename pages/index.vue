<template>
  <section class="styles">
    <Drug
      v-for="teste in drugs"
      :key="teste.id"
      :title="teste.title"
      :image="teste.image"
      :qtd="teste.qtd"
      :id="teste.id"
      :value="teste.value"
    />
  </section>
</template>

<script>
import Drug from "@/components/Drug";

export default {
  components: {
    Drug,
  },

  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          drugs: [
            {
              id: "1",
              title: "Dipirona",
              value: "100,00",
              qtd: "8",
              image:
                "https://www.sansilfarma.com.br/BACKOFFICE/Uploads/Produto/Ampliada/237818.png"
            },
            {
              id: "2",
              title: "Paracetamol",
              value: "80,00",
              qtd: "10",
              image:
                "https://static-webv8.jet.com.br/drogaosuper/Produto/multifotos/hd/5409032017091306.jpg"
            },

            {
              id: "3",
              title: "Benzetacil",
              value: "200,00",
              qtd: "50",
              image:
                "https://t2.uc.ltmcdn.com/pt/images/5/1/2/img_benzetacil_indicacoes_e_efeitos_colaterais_17215_600_square.jpg"
            },

            {
              id: "4",
              title: "Buscopan",
              value: "20,00",
              qtd: "",
              image:
                "https://www.farmadelivery.com.br/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/4/6/4633-buscopan-composto-adulto-10mg-250mg-c-20-comprimidos.jpg"
            },

            {
              id: "5",
              title: "Ibuprofeno",
              value: "75,00",
              qtd: "2",
              image:
                "https://drogariavenancio.vteximg.com.br/arquivos/ids/563624-1000-1000/62897_Z.jpg?v=636966115928530000"
            }
          ]
        });
      }, 1500);
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
</style>