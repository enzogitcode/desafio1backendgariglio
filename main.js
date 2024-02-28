class ProductManager {
    static id = 0
    constructor() {
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if (this.products.some((product) => product.code === code)) {
            ("code debe ser único")
            return;
        }
        ProductManager.id++
        this.products.push({ id: ProductManager.id, title, description, price, thumbnail, code, stock })
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find((products) => products.id === id)
        if (!product) {
            console.log("not found")
        }
        else { (product) }
    }
}

const manager = new ProductManager;
manager.addProduct = ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
console.log(manager.getProducts());

