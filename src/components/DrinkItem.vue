<template>
    <v-card outlined id="drink-item">
        <v-img
            :src="`https://localhost:5001/images/${imageSrc}`">
        </v-img>

        <v-list-item-title class="title headline" align="left">{{ name }}</v-list-item-title>
        
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
            ></v-rating>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "DrinkItem",
    props: {
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
        rating: {
            type: Number
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