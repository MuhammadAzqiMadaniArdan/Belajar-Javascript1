
class Tiger {
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
    }

    growl(){
        console.log('grrrr!')
    }
}

// Todo 1
module.exports = Tiger;