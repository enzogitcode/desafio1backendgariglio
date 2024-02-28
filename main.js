class ProductManager {
    static id = 0
    constructor() {
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if (this.products.some((product) => product.code === code)) {
           console.log ("El código debe ser único")
            return;
        }

        const newProduct = {
            id: ++ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find((item) => item.id === id)
        if (!product) {
            console.log("not found")
        }
        else { (product) }
    }
}

const manager = new ProductManager ();
manager.addProduct ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
manager.addProduct ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
console.log(manager.getProducts());

