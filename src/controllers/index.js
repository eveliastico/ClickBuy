class IndexController {
    getItems(req, res) {
        // Logic to retrieve items
        res.send('Retrieve items');
    }

    createItem(req, res) {
        // Logic to create an item
        res.send('Item created');
    }
}

module.exports = IndexController;