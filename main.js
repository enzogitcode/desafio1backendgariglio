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
    getProductById (id) {
        if (!this.products.find ((products) => products.id === id) ){
            console.log ("not found")
        }
    }
}

const products= new ProductManager;
products.addProduct= ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)

/* this.title = title,
   this.description = description,
   this.price = price,
   this.thumbnail = thumbail,
   this.code = code,
   this.stock = stock */
    
    //método getProduct

//método addProduct

//método getProductbyId