class ProductManager {
    constructor() {
        this.products = []
    }
    static id=0
    addProduct (title, description, price, thumbnail, code, stock) {
        ProductManager.id++
         this.products.push ({ id:ProductManager.id, title, description, price, thumbnail, code, stock })
    }
    getProducts (products) {
    return  new products
    }
    getProductById () {}
}

const products= new ProductManager;
productos.addProduct= ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)


/* this.title = title,
   this.description = description,
   this.price = price,
   this.thumbnail = thumbail,
   this.code = code,
   this.stock = stock */
    
    //método getProduct

//método addProduct

//método getProductbyId