

class APIManager {
    constructor() {

        this.propNam = ['user', 'quote', 'pokimon', 't']
        this.apisUrl =
            ['https://randomuser.me/api/?results=7',
                'https://api.kanye.rest/',
                `https://pokeapi.co/api/v2/ability/?limit=1&offset=${this.randomize(POKIMON_RANDOMIZE_NUMBER)}`,
                'https://baconipsum.com/api/?type=meat-and-filler']

        this.data = {}

        this.render = new Renderer()

    }

    fetchData(url, prop) {
        let obj = this
        $.ajax({
            method: 'GET',
            url: url,
            success: function (res) {
                obj.data[prop] = res

                if (Object.keys(obj.data).length == NUMBER_OF_APIS) {
                    let user = new User(JSON.stringify(obj.data)),
                        friends = new Friend(JSON.stringify(obj.data)),
                        pokimon = new Pokimon(JSON.stringify(obj.data),
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${obj.randomize(POKIMON_RANDOMIZE_NUMBER)}.png`)
                    let newData = {
                        user: user.mapData(),
                        pokimon: pokimon.mapData(),
                        friends: friends.mapData()
                    }

                    obj.render.setData(JSON.stringify(newData))
                }
            }
        })
    }

    getData() {
        return JSON.stringify(this.data)
    }

    getAllData() {
        this.data = {}
        this.render = new Renderer()
        for (let i = 0; i < this.apisUrl.length; i++) {
            this.fetchData(this.apisUrl[i], this.propNam[i])
        }
    }

    randomize(max) {
        return Math.floor(Math.random() * max);
    }

}


