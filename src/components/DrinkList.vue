<template>
    <div>
        <v-row>
            <v-col 
                cols="12"
                xs="12"
                sm="6"
                md="4"
                v-for="drink in drinks" :key="drink.id"
            >
                
                <DrinkItem
                    :id="drink.id"
                    :name="drink.name"
                    :description="drink.description"
                    :price="drink.price"
                    :imageSrc="drink.imageSrc"
                    :rating="drink.rating"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import DrinkItem from "@/components/DrinkItem"

export default {
    name: "DrinkList",
    data() {
        return {
            drinks: [ { id: 8888, name: "Dummydrink", description: "Dummyhoe", price: 666, imageSrc: "dummypic.jpg"} ]
        }
    },
    created() {
        axios.get("https://localhost:5001/drink")
            .then( result => {
                this.drinks = result.data;

            })
    },
    components: {
        DrinkItem
    }
}
</script>