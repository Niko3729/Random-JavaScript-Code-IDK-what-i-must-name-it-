class karep {
    constructor(nama, species) {
        this.nama = species;
        this.species = nama;
    }

    karepmu() {
        console.log("---===<Species Log>===---")
        console.log(`nama : , ${this.nama}`);
        console.log(`Spesies : ${this.species}`);
    }
}

let kareplah = new karep("yuuka", "Pesut Surabaya");
let smasnug = new karep("kaito", "Autotron");
kareplah.karepmu();
smasnug.karepmu();