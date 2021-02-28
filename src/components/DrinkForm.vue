<template>
    <div class="elevation-4" id="drink-form">
        <v-row  
            align="center"
            justify="center"
        >
            <v-col 
                cols="12" 
                sm="4" 
                lg="6" 
                xs="12"
            >
                <h2>Upload drink</h2>
                <v-text-field v-model="newDrinks.name" label="Name"></v-text-field >
                <v-text-field v-model="newDrinks.description" label="Description"></v-text-field>
                <v-text-field v-model.number="newDrinks.price" label="Price"></v-text-field>
                <v-file-input v-model="file" show-size></v-file-input>
                <v-btn class="ma-2" tile outlined color="black" @click="postDrinksItem"> Save drink </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DrinkForm",
    data(){
        return { 
            newDrinks: { 
                name: "",
                description: "",
                price: null,
                imageSrc: "",
                  },
            file: null
         }
    },
    methods: {
        postDrinksItem() {
            this.newDrinks.imageSrc = this.file.name;

            let data = new FormData();
            data.append("file", this.file);

            console.log(this.newDrinks);
            console.log(this.file.name);

        axios.post("https://localhost:5001/drink", this.newDrinks)
            .then(result => {

                console.log(result.data);
                axios({
                    method: "POST",
                    url: "https://localhost:5001/drink/UploadImage",
                    data: data,
                    config: {headers: { 'Content-Type' : 'multipart/form-data'} }
                })
            })
        }
    }
}
</script>

<style scoped>
#drink-form {
    background-color: #FFD047;
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>

