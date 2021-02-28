<template>
    <v-card outlined>
        <v-img :src="`https://localhost:5001/images/${imageSrc}`"></v-img>
            <v-list-item-title class="title headline" align="left">{{ name }} {{ category }}</v-list-item-title>
                <v-row>
                    <v-col cols="8">
                        <v-list-item-subtitle class="subtitle subtitle-1" align="left">{{ description }}</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="4">
                        <v-list-item-subtitle class="subtitle subtitle-1 green--text"> ${{ price }}</v-list-item-subtitle>
                    </v-col>
                </v-row>
                <div class="text-center mt-6">
                <v-rating
                    @input="addRating($event, rating.id)"
                    :value="rating.id"
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                >
                </v-rating>
            </div>
        <!-- Add to cart
        <v-card-subtitle>
            <v-btn class="ma-2" tile depressed color="success">
            <v-icon left>mdi-cart</v-icon> Add to cart
            </v-btn>
        </v-card-subtitle>
        -->
    </v-card>
</template>

<script>
import axios from 'axios'
export default {
    name: "MenuItem",
    props: {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        imageSrc: {
            type: String
        },
        category: {
            type: String
        },
        rating: {
            type: Number
        }
    },
    data(){
        return {
            editRating: { }
        }
    },
    methods: {
        getRating(){
            let webAPIUrl = `https://localhost:5001/meny/${this.rating}`;
            axios.get( webAPIUrl )
                .then( result => {
                    this.rating = result.data;
                })
        },
        addRating() {
            let webAPIUrl = "https://localhost:5001/meny";
            axios.put( webAPIUrl, this.editRating )
            console.log(this.editRating);
        }
  }
}
</script>

<style scoped>
.title {
    margin-top: 20px;
    margin-left: 20px;
    color: rgb(0, 0, 0);
}

.subtitle {
    margin-left: 20px;
    margin-right: 20px;
}
</style>