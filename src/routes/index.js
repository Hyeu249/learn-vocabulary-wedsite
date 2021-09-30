const tshirtsRouter = require('./tshirts')
const siteRouter = require('./site')
const vocabularyRouter = require('./vocabulary')

function route(app){
    
    app.use('/vocabulary', vocabularyRouter)
    app.use('/tshirts', tshirtsRouter)
    app.use('/', siteRouter)
     
}

module.exports = route