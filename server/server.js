const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config.js')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())



app.get('/api/itemList', controller.displayItemList) /*http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1001.png*/
app.get('/api/inventory', controller.displayInventory)
app.post('/api/inventory', controller.putItemsIntoInventory)
app.put('/api/inventory', controller.updateInventory) 
app.delete('/api/inventory', controller.deleteItemsFromInventory)


app.listen(config.port, () => {console.log(`listening on ${config.port}`)})