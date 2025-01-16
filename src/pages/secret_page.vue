<script>
export default {
  name: 'SecretPage',
};
</script>

<template>
  <div>
    <h1>Deftones.. página secreta, morô? 🤫</h1>
    <video controls autoplay loop>
      <source src="../media/deftones.webm" type="video/webm" />
      Seu navegador não suporta este formato de vídeo.
    </video>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
    video {
        width: 348px;
        height: 500px;
    }
}
</style>
