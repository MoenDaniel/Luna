<template>
    <div class="elevation-4" id="edit-drink">
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
                <h2>Edit drinks</h2>
                <v-text-field v-model="editId" label="Id"></v-text-field >
                <v-btn class="ma-2" tile outlined color="black" @click="getDrink">Get course</v-btn>
                <v-text-field v-model="editDrink.name" label="Name"></v-text-field>
                <v-text-field v-model="editDrink.description" label="Description"></v-text-field>
                <v-text-field v-model.number="editDrink.price" label="Price"></v-text-field>
                <v-file-input v-model="file" show-size></v-file-input>
                <v-text-field v-model="editDrink.imageSrc" label="Image source"></v-text-field>
                <v-btn class="ma-2" tile outlined color="black" @click="putDrink();reloadPage();"> Save drink </v-btn>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: "EditDrink",
    data(){
        return {
        editId: "",
        editDrink: {
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
        getDrink() {
            let webAPIUrl = `https://localhost:5001/drink/${this.editId}`;
            axios.get(webAPIUrl)
                .then (result => {
                this.editDrink = result.data;
            })
        },
        putDrink(){
            let webAPIUrl = "https://localhost:5001/drink"
            let data = new FormData();

            data.append("file", this.file);

             this.editDrink.imageSrc = this.file.name;
            axios.put( webAPIUrl, this.editDrink)
            
            .then(result => {
                console.log(result);

               
            console.log(this.editDrink);
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
  reloadPage(){
    window.location.reload()
        }
} 

    
</script>
<style scoped>
#edit-drink {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #71A9F7;
}
</style>