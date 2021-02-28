<template>
  <div>
    <section id="banner">
      <img id="banner-img" :src="require('@/assets/images/banner.png')" />
    </section>

    <section id="padded-section">
      <v-row
      align="center"
      justify="center"
      >
        <v-col
        sm=6
        md=4>
          <h3>Fresh fish every day</h3>
          <p>
            Luna sushi serves top quality sushi in the heart of Tokyo. At Luna the passion is the most important ingredient, and we bring you beauty of Japanese flavours in every bite.
          </p>
        </v-col>
      </v-row>
    </section>

    <section id="bottom-section">
      <v-row 
      align="center"
      justify="center"
      >
        <v-col 
        xs=12
        sm=4
        md=4
        >
        <h3 class="text-right">Visit us</h3>
          <p class="text-right">
            5 Chome-24-55 Sendagaya<br>
            Shibuya City, Tokyo<br>
            151-0051, Japan
          </p>
        </v-col>

        <v-col 
        xs=12
        sm=4
        md=4
        >
          <img id="map-img" :src="require('@/assets/images/luna-map.png')" />

        </v-col>

        <v-col 
        xs=12
        sm=4
        md=4
        >

        <h3 id="bottom-text">Opening hours</h3>
        <p id="bottom-text">
          Monday - Saturday<br>
          16:00 - 22:00
        </p>

        </v-col>
      </v-row>
    </section>
  </div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
#padded-section{
  margin-top: 15vh;
  margin-bottom: 15vh;
}

#banner-img{
  position: relative;
  left: -15px;
  width: 100.5vw;
  height: 100%;
  justify-content: center;
}

#banner{
  /*background-color: #71A9F7;*/
}

#map-img{
  height: 100%;
  width: 100%;
}

#bottom-section{
  margin-bottom: 5vh;
  /*background-color: #FFD046;*/
}

@media (max-width:600px) {    
    #map-img {
        height: 50%;
    }
}
</style>