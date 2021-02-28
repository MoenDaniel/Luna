<template>
  <div class="about">
    <section>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols=12
          sm=6
          md=6
          xs=12
        >
          <h1>Our history</h1>
          <p>
            Welcome to our restaurant Luna that is proud of its’ long family tradition. Over 20 years of experience in preparing great food with sincere hospitality are a guarantee that you will have a great time and tasty food at our place.
            <br><br>
            Our guests are offered the rich menu and the wide choice of meals and quality wines. Beside popular spicy tuna maki - we prepare meals fresh every day.
            <br><br>
            We especially recommend fresh fish and seafood specialties. All our meat is domestic, and all the vegetables we serve are fresh and home grown from our garden, so you are sure to get only the best.
            <br><br>
            The restaurant is 200 m from the sea and has a spacious terrace, providing relaxing atmosphere for you to enjoy your meal in our restaurant. We will be happy to welcome you to Luna.
          </p>
        </v-col>
        <v-col
          sm=6
          md=6
        >
          <img id="restaurant" :src="require('@/assets/images/restaurant.jpg')" />
        </v-col>
      </v-row>
      </section>
  </div>
</template>

<style scoped>
#restaurant{
  width: 100%;
}

@media only screen and (max-width: 600px) {
  #restaurant {
    display: none;
  }
}
</style>
