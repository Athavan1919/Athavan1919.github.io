	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
        organic: true
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
        organic: false
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
        organic: false
	},
    {
        name: "carrots",
        vegetarian: true,
        glutenFree: true,
        price: 1.50,
        organic: true
    },
    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        price: 7.99,
        organic: true
    },
    {
        name: "turkey",
        vegetarian: false,
        glutenFree: true,
        price: 8.99,
        organic: false
    },
    {
        name: "lamb",
        vegetarian: false,
        glutenFree: true,
        price: 5.75,
        organic: false
    },
    {
        name: "potatoes",
        vegetarian: true,
        glutenFree: true,
        price: 3.50,
        organic: true
    },
    {
        name: "oats",
        vegetarian: true,
        glutenFree: false,
        price: 2.50,
        organic: false
    },
    {
        name: "fries",
        vegetarian: true,
        glutenFree: false,
        price: 3.00,
        organic: false
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_list = [];

	for (let i=0; i<prods.length; i+=1) {
		if (restriction == "Vegetarian" && prods[i].vegetarian == true && organic == true && prods[i].organic == true) {
            product_list.push(prods[i]);
		}
        else if (restriction == "Vegetarian" && prods[i].vegetarian == true && organic == false) {
            product_list.push(prods[i]);
		}
		else if (restriction == "GlutenFree" && prods[i].glutenFree == true && organic == true && prods[i].organic == true){
            product_list.push(prods[i]);			
		}
        else if (restriction == "GlutenFree" && prods[i].glutenFree == true && organic == false ){
            product_list.push(prods[i]);			
		}
        else if (restriction == "Both" && (prods[i].vegetarian == true && prods[i].glutenFree == true) && organic == true && prods[i].organic == true){
            product_list.push(prods[i]);
        }
        else if (restriction == "Both" && (prods[i].vegetarian == true && prods[i].glutenFree == true) && organic == false){
            product_list.push(prods[i]);
        }
		else if (restriction == "None" && organic == true && prods[i].organic == true){
			product_list.push(prods[i]);
		}
        else if (restriction == "None" && organic == false){
			product_list.push(prods[i]);
		}
        else if (restriction == "" && organic == true && prods[i].organic == true){
			product_list.push(prods[i]);
		}
        else if (restriction === "" && organic == false){
			product_list.push(prods[i]);
		}
	}
    return product_list;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}