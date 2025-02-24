exports.HomePage =
class HomePage{
    constructor (page){
        this.page = page;
        this.productList = "//div[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"
        this.cart = "#cartur"
    }
    async addProductToCart(productName){
        const productList = await this.page.$$(this.productList);
        for (const product of productList)
        {
            if (productName === await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.on("dialouge", async dialouge =>{
            if (dialouge.message().includes('Product added')){
                await dialouge.accept();
            }

        })
        await this.page.locator(this.addToCartBtn).click()
    }
    async goToCart(){
        await this.page.locator(this.cart).click();
    }

}