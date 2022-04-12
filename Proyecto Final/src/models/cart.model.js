'use strict';

class CartManager{
    
    constructor(){
        this.carts=[];
    }
    get = () => {
        return this.carts;
    }
    set = (cart) => {
        if(this.carts.length === 0){
            cart.id = 1;
            this.carts.push(cart);
        }else{
            cart.id = this.carts[this.carts.length-1].id +1;
            this.carts.push(cart);
        }
    }
    setCarts = (carts) =>{
        this.carts = carts;
    }
    
}

export default new CartManager();