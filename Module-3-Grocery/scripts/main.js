
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
    var s4 = document.getElementById(slct4);
    var s5 = document.getElementById(slct5);
    
    
    s1.style.display = "block";
    
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s1.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s2.checked, s3.checked, s4.checked);
   
    //sorts the obtain product list by ascending order 
    optionArray.sort(function(a,b){return a.price-b.price});
   
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var product = optionArray[i];
        
        // create checkbox
        var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s1.appendChild(checkbox);
        
		// show image
        var picture = document.createElement("img");
        picture.id = product.name + "-img";
        picture.src = "images/" + product.img;
        picture.width = "50";
        picture.height = "50";
        s1.appendChild(picture);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
        label.name = "product"
		label.htmlFor = product.name;
        label.value = product.name;
		label.appendChild(document.createTextNode(product.name));
		s1.appendChild(label);
        
        var priceLabel = document.createElement('label');
        priceLabel.htmlFor = product.name + "-price";
        priceLabel.appendChild(document.createTextNode(" ($" + product.price +")"))
        s1.appendChild(priceLabel);
        
        var quantity = document.createElement('input');
        quantity.id = product.name + "-val";
        quantity.type = "number";
        quantity.value = product.quantity;
        quantity.min = "0";
        s1.appendChild(quantity);
		
		// create a breakline node and add in HTML DOM
		s1.appendChild(document.createElement("br")); 
        
        s5.style.display = "none";
	}
}


	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(slct1, slct2){
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    
    if(s2.style.display == "block"){
        var ele = [];
        var ele2 = [];
        
        var box = s2.getElementsByTagName("input")
        for (var i = 0; i < box.length; i++) {
            if (box[i].type == 'checkbox') {
                //var box_name = box[i].value;
                ele.push(box[i]);
            }
            else{
                ele2.push(parseInt(box[i].value));
            }
        }

	    var chosenProducts = [];
        var chosenQuantity = [];
        
        var dict = [];
	
        var c = document.getElementById('displayCart');
        c.innerHTML = "";
	
        // build list of selected item
        var para = document.createElement("P");
	   para.innerHTML = "You selected : ";
	   para.appendChild(document.createElement("br"));
	   for (i = 0; i < ele.length; i++) { 
           if(ele[i].checked){
               para.appendChild(document.createTextNode(ele[i].value));
               para.appendChild(document.createElement("br"));
               chosenProducts.push(ele[i].value);
               //var test2 = parseInt(document.getElementById(s2).value);
               var val = ele2[i];
               chosenQuantity.push(val);
               dict.push({
                   key: ele[i].value,
                   value: val
               })
           }
       }
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(dict)));
        
    }
    else{
        var ele = [];
        var ele2 = [];
        
        var box = s1.getElementsByTagName("input")
        for (var i = 0; i < box.length; i++) {
            if (box[i].type == 'checkbox') {
                //var box_name = box[i].value;
                ele.push(box[i]);
            }
            else{
                ele2.push(parseInt(box[i].value));
            }
        }
        
        
        var chosenProducts = [];
        var chosenQuantity = [];
        
        var c = document.getElementById('displayCart');
        c.innerHTML = "";
        
        var dict2 = [];
	
        // build list of selected item
        var para = document.createElement("P");
        para.innerHTML = "You selected : ";
        para.appendChild(document.createElement("br"));
        for (i = 0; i < ele.length; i++) { 
            if(ele[i].checked){
                para.appendChild(document.createTextNode(ele[i].value));
                para.appendChild(document.createElement("br"));
                chosenProducts.push(ele[i].value);
                //var test = ele[i].value + "-val";
                //var test2 = document.getElementById(ele[i].value + "-val");
                //var val = parseInt(document.getElementById(ele[i].value + "-val").value);
                var val = ele2[i];
                chosenQuantity.push(val);
                dict2.push({
                    key: ele[i].value,
                    value: val
                })
            }
        }
	c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(dict2)));        
        
    }
		
	// add paragraph and total price
	//c.appendChild(para);
    //c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(dict)));

	//c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts,chosenQuantity)));
		
}


function populateCategoryChoices(slct1, slct2, slct3){
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3);    
    
    var product = [];
    
    var box = s2.getElementsByTagName("input")
        
    for (var i = 0; i < box.length; i++) {
        if (box[i].type == 'checkbox') {
            var box_name = box[i].value;
            product.push(box_name);
        }
    }
    
    var val = s1.value;
    
    var list = restrictCategoryListProducts(val, product);
    
    s3.style.display = "block";
    s2.style.display = "none";
    s3.innerHTML = "";
    
    list.sort(function(a,b){return a.price-b.price});
		
	for (i = 0; i < list.length; i++) {
			
		var product = list[i];
        
        // create checkbox
        var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s3.appendChild(checkbox);
        
		// show image
        var picture = document.createElement("img");
        picture.src = "images/" + product.img;
        picture.width = "50";
        picture.height = "50";
        s3.appendChild(picture);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
        label.name = "product"
		label.htmlFor = product.name;
        label.value = product.name;
		label.appendChild(document.createTextNode(product.name));
		s3.appendChild(label);
        
        var priceLabel = document.createElement('label');
        priceLabel.htmlFor = product.name + "-price";
        priceLabel.appendChild(document.createTextNode(" ($" + product.price +")"))
        s3.appendChild(priceLabel);
        
        var quantity = document.createElement('input');
        quantity.id = product.name + "-val";
        quantity.type = "number";
        quantity.value = product.quantity;
        quantity.min = "0";
        s3.appendChild(quantity);
		
		// create a breakline node and add in HTML DOM
		s3.appendChild(document.createElement("br"));    
	}

    
}