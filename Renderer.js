
class Renderer {

    setData(data) {
        this.clearData()
        this.data = JSON.parse(data)
        this.setUserInfo()
        this.setQuote()
        this.setFriends()
        this.setPokimon()
        this.setText()
        this.names = []
    }


    setText() {
        let source = $('#text-template').html()
        let template = Handlebars.compile(source)
        let newHtml = template(this.data.user)
        $('.meat-container').append(newHtml)
    }

    setFriends() {

        this.names = []

        let source = $('#friends-template').html()
        let template = Handlebars.compile(source)
        for (let name = 0; name < this.data.friends.length; name++) {
            this.names.push(this.data.friends[name].fname + ' ' + this.data.friends[name].lname)

        }

        let newHtml = template({ friend: this.names })
        $('.friends-container').append(newHtml)
    }

    setPokimon() {
        let source = $('#pokimon-template').html()
        let template = Handlebars.compile(source)
        let newHtml = template(this.data.pokimon)

        $('.pokemon-container').append(newHtml)
    }

    setPokimonContent() {
        let source = $('#pokimon-template').html()
        let template = Handlebars.compile(source)
        let newHtml = template(this.data.pokimon)

        $('.user-container').append(newHtml)
    }

    setUserInfo() {
        let source = $('#user-data-top-left').html()
        let template = Handlebars.compile(source)
        let newHtml = template(this.data.user)
        $('.user-container').append(newHtml)
    }

    setQuote() {
        let source = $('#quote-template').html()
        let template = Handlebars.compile(source)
        let newHtml = template(this.data.user)
        $('.quote-container').append('Favorite Quote:')
        $('.quote-container').append(newHtml)
    }

    clearData() {
        $('.user-container').empty()
        $('.quote-container').empty()
        $('.pokemon-container').empty()
        $('.friends-container').empty()
        $('.meat-container').empty()
    }
}