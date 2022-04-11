'use strict';

class ProductManager{
    
    constructor(){
        this.products=[];
    }
    get = () => {
        return this.products;
    }
    set = (product) => {
        if(this.products.length === 0){
            product.id = 1;
            this.products.push(product);
        }else{
            product.id = this.products[this.products.length-1].id +1;
            this.products.push(product);
        }
    }
    setProducts = (products) =>{
        this.products = products;
    }
    
}

export default new ProductManager();