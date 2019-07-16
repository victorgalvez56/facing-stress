<template>
  <q-page class="flex">
    <vue-particles
      class=" full-width"
      color="#000"
      :particleOpacity="0.7"
      :particlesNumber="70"
      shapeType="circle"
      :particleSize="4"
      linesColor="#000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="container absolute self-center">
      <div class="row justify-center">
        <div class="col-md-6">The content within the column.</div>
      </div>
    </div>

    <body>
      <div class="container">
        <div class="row">
          <div class>¿Sientes demasiada tensión emocional?¿No duerme bien preocupado por responsabilidades?</div>
        </div>
      </div>
    </body>

  </q-page>
</template>
<script>
export default {
  name: 'HomeIndex'
}
</script>
<style>
body {
  background: #f8f8f8;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
