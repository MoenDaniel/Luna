<template>
    <v-row>
        <v-col 
            cols="12" 
            sm="12" 
            xs="12" 
            class="mx-auto"
        >
            <v-simple-table  class="elevation-4">
                <template v-slot:default>   
                    <thead >
                        <tr>
                            <th class="display-1">All drinks</th>
                        </tr>
                    </thead>
                
                    <t-body>
                        <v-row>
                            <v-col 
                                cols="12" 
                                xs="12"
                            >
                                <tr v-for="drink in drinks" :key="drink.id">
                                    <td> Id: {{ drink.id}} </td>
                                    <td> Name: {{ drink.name }}</td>
                                    <td> Category: {{ drink.category }}</td>
                                    <td> Price: {{ drink.price }}</td>
                                    <td> Description: {{ drink.description }}</td>
                                </tr>
                            </v-col>
                        </v-row>
                    </t-body> 
                </template>
            </v-simple-table>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios'
export default {
    name: "AdminTable",
    data() {
        return {
            drinks: [ { id: 999, name: "Admin table drinks", category: "category", price: 1, description: "description"}]
        }
    },
    created(){
        axios.get("https://localhost:5001/drink")
            .then( result => {
                this.drinks = result.data;
            } )
    },

}
</script>