class Person {
    constructor(data) {
        this.data = JSON.parse(data)
    }

    mapData() { }
}

class User extends Person {
    constructor(data) {
        super(data)
    }

    mapData() {
        let user = {
            fname: this.data.user.results[0].name.first,
            lname: this.data.user.results[0].name.last,
            city: this.data.user.results[0].location.city,
            state: this.data.user.results[0].location.state,
            img: this.data.user.results[0].picture.thumbnail,
            quote: this.data.quote.quote,
            text: this.data.text[0]
        }
        return user
    }
}

class Friend extends Person {
    constructor(data) {
        super(data)
    }

    mapData() {
        let arrOfFriends = []

        for (let i = 1; i < this.data.user.results.length; i++) {
            arrOfFriends.push({
                fname: this.data.user.results[i].name.first,
                lname: this.data.user.results[i].name.last
            })
        }
        return arrOfFriends
    }
}

class Pokimon extends Person {
    constructor(data, url) {
        super(data)
        this.url = url
    }

    mapData() {

        return {
            name: this.data.pokimon.results[0].name,
            img: this.url
        }
    }
}


