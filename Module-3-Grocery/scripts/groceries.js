	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
        organic: true,
        quantity: 0,
        category: "vegetable",
        img: "broccoli.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
        organic: false,
        quantity: 0,
        category: "grains",
        img: "bread.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
        organic: false,
        quantity: 0,
        category: "meat",        
        img: "salmon.jpg"
	},
    {
        name: "carrots",
        vegetarian: true,
        glutenFree: true,
        price: 1.50,
        organic: true,
        quantity: 0,
        category: "vegetable",
        img: "carrots.jpg"
        
    },
    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        price: 7.99,
        organic: true,
        quantity: 0,
        category: "meat",        
        img: "chicken.jpg"
    },
    {
        name: "turkey",
        vegetarian: false,
        glutenFree: true,
        price: 8.99,
        organic: false,
        quantity: 0,
        category: "meat",        
        img: "turkey.jpg"
    },
    {
        name: "lamb",
        vegetarian: false,
        glutenFree: true,
        price: 5.75,
        organic: false,
        quantity: 0,
        category: "meat",        
        img: "lamb.jpg"
    },
    {
        name: "potatoes",
        vegetarian: true,
        glutenFree: true,
        price: 3.50,
        organic: true,
        quantity: 0,
        category: "vegetable",
        img: "potato.jpg"
    },
    {
        name: "oats",
        vegetarian: true,
        glutenFree: false,
        price: 2.50,
        organic: false,
        quantity: 0,
        category: "grains",
        img: "oats.jpg"
    },
    {
        name: "fries",
        vegetarian: true,
        glutenFree: false,
        price: 3.00,
        organic: false,
        quantity: 0,
        category: "grains",
        img: "fries.jpg"
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian, gluten, organic) {
	let product_list = [];

	for (let i=0; i<prods.length; i+=1) {
		if (vegetarian == true && prods[i].vegetarian == true && gluten == false && organic == true && prods[i].organic == true) {
            product_list.push(prods[i]);
		}
        else if (vegetarian == true && prods[i].vegetarian == true && gluten == false && organic == false) {
            product_list.push(prods[i]);
		}
		else if (vegetarian == false && gluten == true && prods[i].glutenFree == true && organic == true && prods[i].organic == true){
            product_list.push(prods[i]);			
		}
        else if (vegetarian == false && gluten == true && prods[i].glutenFree == true && organic == false ){
            product_list.push(prods[i]);			
		}
        else if (vegetarian == true && prods[i].vegetarian == true && gluten == true && prods[i].glutenFree == true && organic == true && prods[i].organic == true){
            product_list.push(prods[i]);
        }
        else if (vegetarian == true && gluten == true && (prods[i].vegetarian == true && prods[i].glutenFree == true) && organic == false){
            product_list.push(prods[i]);
        }
		else if (vegetarian == false && gluten == false && organic == true && prods[i].organic == true){
			product_list.push(prods[i]);
		}
        else if (vegetarian == false && gluten == false && organic == false){
			product_list.push(prods[i]);
		}
	}
    return product_list;
}

function restrictCategoryListProducts(selectList, chosenProducts){
    let product_list = [];
    for(var i in products){
        if(chosenProducts.includes(products[i].name)){
            if(products[i].category == selectList){
                product_list.push(products[i]);    
            }
            else if(selectList == "all"){
                product_list.push(products[i]);
            }
        }
    }
    return product_list;
    
} 


//TESTING

function getTotalPrice(dict) {
    var keys = [];
    for (var k in dict) {
        keys.push(dict[k].key);
    }
    
    for (var j in products){
        if (keys.includes(products[j].name)){
            for (var m in dict) {
                if (dict[m].key == products[j].name){
                    products[j].quantity = dict[m].value;
                }
            }
            //var val = parseInt(document.getElementById(products[j].name + "-val").value);
            //products[j].quantity = dict[products[j].name];
        }
    }
    
	var totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (keys.indexOf(products[i].name) > -1){ 
			totalPrice += products[i].price * products[i].quantity;
		}
	}
	return totalPrice;
}




// Calculate the total price of items, with received parameter being a list of products
/*function getTotalPrice(chosenProducts, val) {
    for (var j in products){
        if (chosenProducts.includes(products[j].name)){
            //var val = parseInt(document.getElementById(products[j].name + "-val").value);
            products[j].quantity = val[k=0];
            k++;
        }
    }
    
	var totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){ 
			totalPrice += products[i].price * products[i].quantity;
		}
	}
	return totalPrice;
}*/