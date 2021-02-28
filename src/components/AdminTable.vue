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
                            <th class="display-1">All food</th>
                        </tr>
                    </thead>
                
                    <t-body>
                        <v-row>
                            <v-col 
                                cols="12" 
                                xs="12"
                            >
                                <tr v-for="food in foods" :key="food.id">
                                    <td> Id: {{ food.id}} </td>
                                    <td> Name: {{ food.name }}</td>
                                    <td> Category: {{ food.category }}</td>
                                    <td> Price: {{ food.price }}</td>
                                    <td> Description: {{ food.description }}</td>
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
            foods: [ { id: 999, name: "Admin table", category: "category", price: 1, description: "description"}]
        }
    },
    created(){
        axios.get("https://localhost:5001/meny")
            .then( result => {
                this.foods = result.data;
            } )
    },

}
</script>
