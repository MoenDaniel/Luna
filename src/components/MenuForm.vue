<template>
    <div class="elevation-4" id="food-form">
        <v-row 
            align="center"
            justify="center"
        >
            <v-col 
                cols="12" 
                sm="4" 
                lg="4" 
                xs="12"
            >
                <h2>Upload food</h2>
                <v-text-field v-model="newFood.name" label="Name"></v-text-field>
                <v-text-field v-model="newFood.category" label="Category"></v-text-field>
                <v-text-field v-model="newFood.description" label="Description"></v-text-field>
                <v-text-field v-model.number="newFood.price" label="Price"></v-text-field>
                <v-file-input v-model="file" show-size></v-file-input>
                <v-btn class="ma-2" tile outlined color="black" @click="postMenuItem"> Save food </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "MenuForm",
    data(){
        return { 
            newFood: { 
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
        postMenuItem() {
            this.newFood.imageSrc = this.file.name;

            let data = new FormData();
            data.append("file", this.file);

            console.log(this.newFood);
            console.log(this.file.name);

        axios.post("https://localhost:5001/meny", this.newFood)
            .then(result => {

                console.log(result.data);
                axios({
                    method: "POST",
                    url: "https://localhost:5001/menyadmin/UploadImage",
                    data: data,
                    config: {headers: { 'Content-Type' : 'multipart/form-data'} }
                })
            })
        }
    }
}
</script>

<style scoped>
#food-form {
    background-color: #71A9F7;
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>

