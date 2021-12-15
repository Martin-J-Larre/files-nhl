const database = require('monk')("localhost/after");
const food = database.get("food");

module.exports = {
    find: () => {
        return food.find();
    },
    create: () =>{
        return food.insert({
            price: 100,
            category: "pastas",
            vegan: false,
            name: "ravioles"
        });
    },
}