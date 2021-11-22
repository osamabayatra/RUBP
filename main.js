
let manager = new APIManager()
let render = new Renderer()


$('#load-data').on('click', function () {
    manager.getAllData()
})

