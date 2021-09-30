

// Bắt đầu
var carts = document.querySelectorAll('.a-cart-shirt');
var nameShirt = document.querySelectorAll('.a-name');
var cost = document.querySelectorAll('.p-cost');
var color = document.querySelectorAll('.p-color');
var date = document.querySelectorAll('.p-date');
var img = document.querySelectorAll('.img-shirt-js');
var size = document.querySelectorAll('.size-shirt-js');
var index = 0
let sizeTable = document.querySelectorAll('.divSize');
let pDivSize1 = document.querySelectorAll('.p1-divSize');
let pDivSize2 = document.querySelectorAll('.p2-divSize');
let pDivSize3 = document.querySelectorAll('.p3-divSize');
let pDivSize4 = document.querySelectorAll('.p4-divSize');
let pDivSize5 = document.querySelectorAll('.p5-divSize');
let pickSize = document.querySelectorAll('.pickSize');
let itemCart = document.querySelector('.itemCart');
let deleteCart = document.querySelector('.delete-cart_itemCart');



// Cart ở trang tshirts 
deleteCart.addEventListener('click',() => {
        itemCart.classList.add('right-100');
})


// Test

for(let i = 0; i < carts.length; i++){
  
    carts[i].addEventListener('click',() => {                         

        // add top: 100% của sizeTable
        sizeTable[i].addEventListener('click',() => {
            sizeTable[i].classList.add('bottom-100');     
            // itemCart.classList.add('right-100');

        });

        // add top: 0% của sizeTable        
        sizeTable[i].classList.remove('bottom-100');
        sizeTable[i].classList.add('bottom-0');
        itemCart.classList.add('right-100');

    // Đuôi carts Event  
    });
    
    // Event size
        
        // Event của  pDivSize1
        pDivSize1[i].addEventListener('click',() => {itemCart.classList.remove('right-100');itemCart.classList.add('right-0');;totalCost(cost[i]); cartNumbers(nameShirt[i].textContent,cost[i].textContent,color[i].textContent,date[i].textContent,img[i].textContent,pDivSize1[i].textContent,cost[i].textContent,index);})
        // Event của  pDivSize2
        pDivSize2[i].addEventListener('click',() => {itemCart.classList.remove('right-100');itemCart.classList.add('right-0');;totalCost(cost[i]); cartNumbers(nameShirt[i].textContent,cost[i].textContent,color[i].textContent,date[i].textContent,img[i].textContent,pDivSize2[i].textContent,cost[i].textContent,index);})
        // Event của  pDivSize3
        pDivSize3[i].addEventListener('click',() => {itemCart.classList.remove('right-100');itemCart.classList.add('right-0');;totalCost(cost[i]); cartNumbers(nameShirt[i].textContent,cost[i].textContent,color[i].textContent,date[i].textContent,img[i].textContent,pDivSize3[i].textContent,cost[i].textContent,index);})
        // Event của  pDivSize4
        pDivSize4[i].addEventListener('click',() => {itemCart.classList.remove('right-100');itemCart.classList.add('right-0');;totalCost(cost[i]); cartNumbers(nameShirt[i].textContent,cost[i].textContent,color[i].textContent,date[i].textContent,img[i].textContent,pDivSize4[i].textContent,cost[i].textContent,index);})
        // Event của  pDivSize5
        pDivSize5[i].addEventListener('click',() => {itemCart.classList.remove('right-100');itemCart.classList.add('right-0');;totalCost(cost[i]); cartNumbers(nameShirt[i].textContent,cost[i].textContent,color[i].textContent,date[i].textContent,img[i].textContent,pDivSize5[i].textContent,cost[i].textContent,index);})           

// Đuôi for
}


function onLoadCartNumbers(){
    var pCart = document.querySelector('.p-cart-header');
    var pCart2 = document.querySelector('.p-cart-header2');
    var itemCartLine1 = document.querySelector('.span-text-line1');



    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){

    pCart.classList.add('p-e-right');
    pCart2.classList.add('p-e-right');

    document.querySelector('.p-cart-header').textContent = productNumbers;
    document.querySelector('.p-cart-header2').textContent = productNumbers;
    itemCartLine1.textContent = productNumbers;
    }
}

function cartNumbers(name,cost,color,date,image,size,costFake,inCart){
    let product = {name,cost,color,date,image,size,costFake,inCart};
    // console.log('Của cartNumbers',product)

    var pCart = document.querySelector('.p-cart-header');
    var pCart2 = document.querySelector('.p-cart-header2');
    var itemCartLine1 = document.querySelector('.span-text-line1');


    pCart.classList.add('p-e-right');
    pCart2.classList.add('p-e-right');


    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.p-cart-header').textContent = productNumbers + 1;
        document.querySelector('.p-cart-header2').textContent = productNumbers + 1;
        itemCartLine1.textContent = productNumbers + 1;

    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.p-cart-header').textContent = 1;
        document.querySelector('.p-cart-header2').textContent = 1;
        itemCartLine1.textContent = 1;

    }
    setItems(product)
};

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[`${product.name} - Size (${product.size})`] == undefined){
            cartItems = {
                ...cartItems,
                [`${product.name} - Size (${product.size})`]: product
            };
            cartItems[`${product.name} - Size (${product.size})`].cost = 0;
        };
        
        // inCart
        cartItems[`${product.name} - Size (${product.size})`].inCart += 1;

        // costInShirt
        let costInShirt = parseInt(cartItems[`${product.name} - Size (${product.size})`].cost);
        cartItems[`${product.name} - Size (${product.size})`].cost = costInShirt + parseInt(product.costFake);

    }else{

        product.inCart = 1;

        cartItems = {
            [`${product.name} - Size (${product.size})`]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
    displayCartTshirts();
}




function totalCost(product){
    var product = parseInt(product.textContent);

    let cartCost = localStorage.getItem('totalCost');   

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product)
    }else{

        localStorage.setItem("totalCost", product)

    } 
}

function displayCart(){

    let cartCost = localStorage.getItem('totalCost'); 
    let cartNumbers = localStorage.getItem('cartNumbers'); 
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);



    let productContainer = document.querySelector(".contain-cart");

//  thêm dấu ',' vào số có giá trị x000
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // numberWithCommas(cartCost)

    if(cartItems && productContainer){
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class='product'>
                <img src="${item.image}" alt="" class="img-product">
                <a href="" class="name-add-cart font-2">${item.name}</a>
                <p class="color-add-cart">Color: <span class="span-item-color font-0">Converse ${item.color}</span></p>
                <p class="size-add-cart">Size: <span class="span-item-size">${item.size}</span></p>
                <p class="date-add-cart">Date Created At: <span class="span-item-date">${item.date}</span></p>
                <div class="contain-e-s-r-addcart">
                    <a href="" class="edit-add-cart same-add-cart font-2">EDIT</a>
                    <a href="" class="save-add-cart same-add-cart font-2">SAVE FOR LATER </a>
                    <a href="" class="remove-add-cart same-add-cart font-2">REMOVE</a>
                </div>
                <p class="cost-add-cart">${item.cost},000đ</p>
                <div class="select-add-cart">
                <p class="son-of-selec-add-cart font-2">${item.inCart}</p>
                <a class="arrow1-add-cart"></a>
                <a class="arrow2-add-cart"></a>
                </div>
            </div>
        `});
        document.querySelector('.total-cost-add-cart').textContent = `${numberWithCommas(cartCost)},000đ`
    }
// Arrow +
    if(cartItems && productContainer){
        let arrow2 = document.querySelectorAll('.arrow2-add-cart');
        let inCart = document.querySelectorAll('.son-of-selec-add-cart');
        let cost = document.querySelector('.total-cost-add-cart');
        let moneyUp = document.querySelectorAll('.cost-add-cart');

        for(let i = 0; i < arrow2.length; i++){
            arrow2[i].addEventListener('click',() => {

                // Set totalCost
                let costItems = parseInt(Object.values(cartItems)[i].costFake);

                var cartCost = localStorage.getItem('totalCost');   
                cartCost = parseInt(cartCost);
                                        
                localStorage.setItem('totalCost', cartCost + costItems);
        
                // Show totalCost
                var cartCost = localStorage.getItem('totalCost'); 
                cost.textContent = `${numberWithCommas(cartCost)},000đ`                
              
                // cartNumbers
                let productNumbers = localStorage.getItem('cartNumbers');
                productNumbers = parseInt(productNumbers);

                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.p-cart-header').textContent = productNumbers + 1;

                //  inCart
                inCart[i].textContent = Object.values(cartItems)[i].inCart += 1;
                // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                
                // costInShirt
                let costInShirt = parseInt(Object.values(cartItems)[i].cost);
                Object.values(cartItems)[i].cost = costInShirt + parseInt(Object.values(cartItems)[i].costFake);
                moneyUp[i].textContent = `${numberWithCommas(Object.values(cartItems)[i].cost)},000đ`

                localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                
            });
        }
    }
// Arrow -
    if(cartItems && productContainer){
        let arrow1 = document.querySelectorAll('.arrow1-add-cart');
        let inCart = document.querySelectorAll('.son-of-selec-add-cart');
        let cost = document.querySelector('.total-cost-add-cart');
        let moneyUp = document.querySelectorAll('.cost-add-cart');

        for(let i = 0; i < arrow1.length; i++){
            arrow1[i].addEventListener('click',() => {

                // Set totalCost
                let costItems = parseInt(Object.values(cartItems)[i].costFake);

                var cartCost = localStorage.getItem('totalCost');  
                cartCost = parseInt(cartCost);
                
                localStorage.setItem('totalCost', cartCost - costItems);

                // Show totalCost
                var cartCost = localStorage.getItem('totalCost'); 
                cost.textContent = `${numberWithCommas(cartCost)},000đ`

                // Set cartNubmers
                let productNumbers = localStorage.getItem('cartNumbers');
                productNumbers = parseInt(productNumbers);

                localStorage.setItem('cartNumbers', productNumbers - 1);
                document.querySelector('.p-cart-header').textContent = productNumbers - 1;
              
                // Set cartItems
                inCart[i].textContent = Object.values(cartItems)[i].inCart -= 1;
                // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                
                // costInShirt
                let costInShirt = parseInt(Object.values(cartItems)[i].cost);
                Object.values(cartItems)[i].cost = costInShirt - parseInt(Object.values(cartItems)[i].costFake);
                moneyUp[i].textContent = `${numberWithCommas(Object.values(cartItems)[i].cost)},000đ`

                localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                



            });
        }
    }
// Remove
        if(cartNumbers == 0){
            localStorage.removeItem('cartNumbers');
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('totalCost');
            var pCart = document.querySelector('.p-cart-header');
            pCart.textContent = ''
            pCart.classList.add('none');    
        }
        else{
            let remove = document.querySelectorAll('.remove-add-cart');
            
            for(let i = 0; i < remove.length; i++){
                remove[i].addEventListener('click',() =>{
                
                   // Remove cartNumbers

                let cartNumbers = localStorage.getItem('cartNumbers');


                let inCart = Object.values(cartItems)[i].inCart;
                localStorage.setItem("cartNumbers", cartNumbers - inCart);
    
                   // Remove value of productsInCart

                let name = Object.values(cartItems);
                name.splice(i,1);                

                localStorage.setItem("productsInCart", JSON.stringify(name));

                //    totalCost/Shirt

                                // Set totalCost
                let costItems = parseInt(Object.values(cartItems)[i].cost);

                var cartCost = localStorage.getItem('totalCost');   
                cartCost = parseInt(cartCost);
                                        
                localStorage.setItem('totalCost', cartCost - costItems);
        
                                // Show totalCost
                var cartCost = localStorage.getItem('totalCost'); 
                cost.textContent = `${numberWithCommas(cartCost)},000đ`          
                   
                });
            }
        }
}

onLoadCartNumbers();
displayCart();

// Cart ở trang Tshirts

function displayCartTshirts(){

    let cartCost = localStorage.getItem('totalCost'); 

    let cartNumbers = localStorage.getItem('cartNumbers'); 
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".product-itemCart");
   
    let certifiedText = document.querySelector(".certified-itemCart");

    let dauTich = document.querySelector(".certified-img");

    let line4ItemCart = document.querySelector(".line4-itemCart");

    let camLine4 = document.querySelector(".cam-line4");

    var dateNow = new Date();





//  thêm dấu ',' vào số có giá trị x000
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // numberWithCommas(cartCost)

    if(cartItems && productContainer){
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `    
            <div class="product-itemCart">
                <a href="/tshirts/cart  " class="x-itemCart font-0 hover-black decoration">X</a>
                <img src="${item.image}" alt="" class="img-itemCart">
                <p class="p-name-itemCart"><a href="/tshirts/cart" class="name-itemCart font-2">${item.name}</a></p> 
                <p class="color-itemCart-cart">Color: <span class="span-itemCart-color font-0"> ${item.color}</span></p>
                <p class="size-itemCart-cart">Size: <span class="span-itemCart-size">${item.size}</span></p>
                <p class="inCart-itemCart">Qty: <span class="span-itemCart-inCart">${item.inCart}</span></p>
                <p class="date-itemCart-cart">Date Created At: <span class="span-itemCart-date">${dateNow}</span></p>
                <p class="cost-itemCart-cart">${numberWithCommas(item.cost)},000đ</p>
                  
                              
            
            </div>
        `});

        document.querySelector('.Subtotal2-itemCart').textContent = `${numberWithCommas(cartCost)},000đ`
    }
    
    if(cartCost > 287){
        certifiedText.textContent = 'Free';  dauTich.classList.remove('none'); line4ItemCart.textContent = 'Your Order Ships for Free!';
        camLine4.classList.add('none');
        line4ItemCart.classList.add('border-line4')
    }else{
        line4ItemCart.textContent = `Cần tiêu thêm ${287 - cartCost},000đ để được miễn phí Shipping`
    }

    // Remove x-itemCart

    if(cartNumbers == 0){
        localStorage.removeItem('cartNumbers');
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('totalCost');
        document.querySelector('.total-cost-add-cart').textContent = `00,000đ`;
        var pCart = document.querySelector('.p-cart-header');
        pCart.textContent = ''
        pCart.classList.add('none');    
    }
    else{
        let removeOutside = document.querySelectorAll('.x-itemCart');

        
        for(let i = 0; i < removeOutside.length; i++){
            removeOutside[i].addEventListener('click',() =>{
            
            // Remove cartNumbers

            let cartNumbers = localStorage.getItem('cartNumbers');


            let inCart = Object.values(cartItems)[i].inCart;
            localStorage.setItem("cartNumbers", cartNumbers - inCart);

            // Remove value of productsInCart

            let name = Object.values(cartItems);
            name.splice(i,1);                

            localStorage.setItem("productsInCart", JSON.stringify(name));

            //    totalCost/Shirt

                            // Set totalCost
            let costItems = parseInt(Object.values(cartItems)[i].cost);

            var cartCost = localStorage.getItem('totalCost');   
            cartCost = parseInt(cartCost);
                                    
            localStorage.setItem('totalCost', cartCost - costItems);

                            // Show totalCost
            var cartCost = localStorage.getItem('totalCost'); 
            cost.textContent = `${numberWithCommas(cartCost)},000đ`          
                
            });
        }
    }    
    

}

// displayCartTshirts();













