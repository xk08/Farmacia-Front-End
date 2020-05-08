<template>
  <article class="style">
    <div class="image" :style="{backgroundImage:'url('+image+')'}"></div>
    <h1 class="fontTitle">Remédio: {{title}}</h1>
    <div class="fontDescription">Valor: R${{value}}</div>
    <div class="fontDescription">Quantidade: {{qtd}} unidades</div>
  </article>
</template>

<script>
export default {
  props: ["image", "title", "value", "qtd", "id"]
};
</script>

<style scoped>

.fontTitle {
  font-size: 18pt;
  font-weight: 500 ;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.fontDescription {
  font-size: 13pt;
  font-weight: 300 ;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.style {
  box-sizing: border-box;
  width: 300px;
  padding: 15px;
  padding-top: 20px;
  border: 2px solid #9c989e;
  box-shadow: 0 2px 2px #aaa;
  margin: 15px;
}

.image {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
</style>

