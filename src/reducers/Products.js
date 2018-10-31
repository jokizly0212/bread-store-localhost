const productInitialState = [
    {
        id: 1,
        product_name: 'Croissant',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAlmrdpS14tbhW26gC9rFiU5I8y-iRL9tAMLEc1oxs26vEhX6',
        price: 2000,
        inventory : 10,
        rating: 4
    },
    {
        id: 2,
        product_name: 'Matcha Tiramisu',
        image: 'https://images-gmi-pmc.edge-generalmills.com/2dc58c2e-3d2d-4797-8866-a21964b55921.jpg',
        price: 3500,
        inventory : 7,
        rating: 3
    },
    {
        id: 3,
        product_name: 'Chocolate Bread',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FrFCXjypNkzBc5OZaXlEP1-G2AYNpwAPp1BLdr30BJOfGXnZOA',
        price: 4600,
        inventory : 5,
        rating: 3   
    },
    {
        id: 4,
        product_name: 'Banana Pancake',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2ll2iO0KkY9eOND_f8pNd1noVjwDKQtNXbbJiXz9-aEVpNXzYw',
        price: 2700,
        inventory : 9,
        rating: 5
    },
    {
        id: 5,
        product_name: 'Walnut Caramel',
        image: 'http://homecookingadventure.com/images/recipes/caramel_mirror_cake_main.jpg',
        price: 7800,
        inventory : 9,
        rating: 3
    },
    {
        id: 6,
        product_name: 'Matcha Tiramisu',
        image: 'http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2015/11/matcha-tiramisu.jpg',
        price: 2350,
        inventory : 9,
        rating: 4
    },
    {
        id: 7,
        product_name: 'Rainbow Bundt',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/19/0/FNK_RAINBOW_BUNDT_CAKE_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1513725312596.jpeg',
        price: 6750,
        inventory : 9,
        rating: 4
    },
    {
        id: 8,
        product_name: 'Lemon Blueberry',
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-lemon-blueberry-poke-cake-still006-1532447619.jpg?crop=0.962xw%3A0.960xh%3B0.0224xw%2C0&resize=640%3A*',
        price: 2700,
        inventory : 9,
        rating: 5
    }

]
const products = (state = productInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default products;