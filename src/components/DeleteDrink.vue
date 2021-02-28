<template>
    <div 
        class="elevation-4" 
        align="center" 
        justify="center" 
        id="delete-drink"
    >
        <label><h2>Delete drink</h2></label>
        <v-row 
            align="center" 
            justify="center"
        >
            <v-col 
                cols="12" 
                xs="12" 
                sm="6"
            >
                <v-text-field outlined color="white" v-model="deleteId" type="text" label="Enter ID"></v-text-field>
                <v-btn class="ma-2" tile outlined color="black" @click="deleteDrink">Delete this item</v-btn>
                <p>{{ deleteStatus }}</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DeleteDrink",
    data(){
        return{
            deleteId: null,
            deleteStatus: "Nothing is deleted yet."
        }
    },
    methods: {
        deleteDrink(){
            let webApiUrl = `https://localhost:5001/drink/${this.deleteId}`;

            axios.delete (webApiUrl)
                .then(
                    result => {
                        console.log(this.webApiUrl);
                        this.deleteStatus = JSON.stringify( result.data );
                    }
                )
        }
    }
    
}
</script>

<style scoped>
#delete-drink {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #376FA4;
}
</style>