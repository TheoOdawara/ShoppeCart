//Quais ações o meu carrinho pode fazer? 
//Adicionar/remover/deletar/calcular o total

async function addItem(userCart, item){
    userCart.push(item);
};

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name ===name);

    if(index != -1){
        userCart.splice(index, 1);
    }
};

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    const indexNormalizer = indexFound + 1;
    if (indexFound == -1){
        console.log("Item not found")
        return;
    };

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
    } else if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
    }
};

async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
};

async function displaycart(userCart){
    console.log("Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | ${item.subtotal()}`);
    });
};


export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart
};