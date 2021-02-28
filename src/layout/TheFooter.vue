<template>
  <v-footer id="footer">
    <v-row
        justify="center"
    >
        <v-col 
            cols="12" 
            sm="6" 
            md="3"
        >
            <h3>Opening hours</h3>
            <p>
                Monday - Saturday<br>
                16:00 - 22:00
            </p>

            <h3>Contact</h3>
            <p>
                <v-icon dark>mdi-email-outline</v-icon> hi@luna.com<br>
                <v-icon dark>mdi-phone</v-icon> 1-800-LUNA
            </p>
        </v-col>
        <v-col 
            cols="12" 
            sm="6" 
            md="3"
        >
            <h3>Address</h3>
            <p>
                5 Chome-24-55 Sendagaya<br>
                Shibuya City, Tokyo<br>
                151-0051, Japan
            </p>
        </v-col>
        <v-col 
            cols="12" 
            sm="6" 
            md="3"
        >
            <h3>Our sponsors</h3>
            <li v-for="sponsor in sponsors" v-bind:key="sponsor.id">{{ sponsor.title }}</li>
        </v-col>
        <v-col 
            cols="12" 
            sm="6" 
            md="3"
        >
            <h3>Administrator panel</h3>
            <router-link to="/admin">Log in</router-link>
        </v-col>
    </v-row>
  </v-footer>
</template>


<script>
import SponsorStore from '@/store/SponsorStore.js'
export default {
    name: "AllSponsors",
    data(){
        return {
            sponsors: SponsorStore.getAllSponsors()
        }
    }
}
</script>


<style scoped>
#footer{
    font-size: 18px;
    color: white;
    background-color: #133C55;
}

a{
    color: #FFFFFF;
}

a:visited{
    color: #FFFFFF;
}

li{
    list-style: none;
}
</style>