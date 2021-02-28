<template>
    <div>
        <v-row>
            <v-col 
            cols="12"
            xs="12"
            sm="6"
            md="4"
            v-for="menu in menus" :key="menu.id">
                <MenuItem
                    :id="menu.id"
                    :name="menu.name"
                    :description="menu.description"
                    :category="menu.category"
                    :price="menu.price"
                    :imageSrc="menu.imageSrc"
                    :rating="menu.rating"
                    />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import MenuItem from '@/components/MenuItem'

export default {
    name: "MenuList",
    data(){
        return {
            menus: [ { id: 999, name: "Dummyroll", category: "Dummycategory", description: "Dummydescription", price: 999, imageSrc: "dummypic.jpg", rating: 4 } ],
        }
    },
    created(){
        axios.get("https://localhost:5001/meny")
            .then( result => {
                this.menus = result.data;
            } )
    },
    components: {
        MenuItem,
    }
}
</script>