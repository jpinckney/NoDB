let items = ["B.F. Sword", "Blade of the Ruined King", "Cull", "Frozen Mallet", "Infinitiy Edge", "Long Sword", "Mortal Reminder", "The Bloodthirster", "Dead Mans Plate", "Knights Vow", "Doran's Shield", "Sunfire Cape", "Warmog's Armor", "Spirit Visage", "Ruby Crystal", "Aegis of the Legion", "Aether Wisp", "Athene's Unholy Grail", "Deathfire Grasp", "Dorans Ring", "Rabadon's Deathcap", "Zhonya's Hourglass", "Oblivian Orb", "Luden's Echo", "Corrupting Potion", "Health Potion", "Control Ward", "Boots of Mobility", "Slightly Magical Boots", "Dark Star Sigil", "Gravity Boots", "Twin Shadows"]

let username = "Brand"

let id = 0
items = items.map(name => {
    id++
    return { name, id } /*object shorthand syntax*/
})

let myInventory = []


module.exports = {
    putItemsIntoInventory: (req, res) => {
        const itemId = req.body.id
        myInventory.push(items.find(i => i.id === itemId))
        res.status(201).send(myInventory)
    },
    deleteItemsFromInventory: (req, res) => {
        myInventory = myInventory.filter(i => i.id != req.params.id)
        console.log(myInventory)
        res.status(200).send(myInventory)
    },
    displayItemList: (req, res) => {
        res.status(200).send(items)
    },
    displayInventory: (req, res) => {
        res.status(200).send(myInventory)
    },
    updateInventory: (req, res) => {
        const { removeId, addId } = req.body
        myInventory = myInventory.filter(i => i.id !== removeId)
        myInventory.push(items.find(i => i.id === addId))
        res.status(200).send()
    },
    username: (req, res) => {
        res.status(200).send(username)
    },
    updateUsername(req, res){
        console.log(req.body)
    }




}