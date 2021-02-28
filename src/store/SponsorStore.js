const SponsorStore = {
    state: {
        sponsors: [ //Lagrer alle sponsorer som arrays
            {
                id: 1001,
                title: "Nova Sea"
            },
            {
                id: 1002,
                title: "Togouchi"
            },
            {
                id: 1003,
                title: "Sasiki"
            },
            {
                id: 1004,
                title: "Katsu-ya"
            },
        ]
    },
    getAllSponsors(){
        return this.state.sponsors.map (sponsor => sponsor); //lager return av kopi av movies
    },
    getMovieById(id){
        return this.state.sponsor.find( sponsor => sponsor.id == id );
    }
}

export default SponsorStore;