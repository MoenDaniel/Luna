<template>
    <div class="elevation-4" id="edit-food">
        <v-row 
            align="center" 
            justify="center"
        >
            <v-col 
                align="center" 
                justify="center" 
                cols="6" 
                sm="4" 
                lg="6" 
                xs="12"
            >
                <h2>Edit food</h2>
                <v-text-field v-model="editId" label="Id"></v-text-field >
                <v-btn class="ma-2" tile outlined color="black" @click="getFood">Get course</v-btn>
                <v-text-field v-model="editFood.name" label="Name"></v-text-field>
                <v-text-field v-model="editFood.description" label="Description"></v-text-field>
                <v-text-field v-model.number="editFood.price" label="Price"></v-text-field>
                <v-file-input v-model="file" show-size></v-file-input>
                <v-text-field v-model="editFood.imageSrc" label="Image source"></v-text-field>
                <v-btn class="ma-2" tile outlined color="black" @click="putFood();reloadPage();"> Save food </v-btn>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: "EditFood",
    data(){
        return {
        editId: "",
        editFood: {
                name: "",
                category: "", 
                description: "",
                price: null,
                imageSrc: "",
                },       
            file: null         
             }
    },
    methods: {
        getFood() {
            let webAPIUrl = `https://localhost:5001/meny/${this.editId}`;
            axios.get(webAPIUrl)
                .then (result => {
                this.editFood = result.data;
            })
        },
        putFood(){
            let webAPIUrl = "https://localhost:5001/meny";
            let data = new FormData();
                
            data.append("file", this.file);

            this.editFood.imageSrc = this.file.name;
            axios.put( webAPIUrl, this.editFood)
            
            .then(result => {
                console.log(result);
                console.log(this.editFood);
                console.log(this.file.name);

                axios ({
                    method: "POST",
                    url: "https://localhost:5001/menyadmin/UploadImage",
                    data: data,
                    config: {header: { 'Content-Type' : 'multipart/form-data'} }
                })
            })          
        }     
    },      
} 

    
</script>
<style scoped>
#edit-food {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #FFD047;
}
</style>