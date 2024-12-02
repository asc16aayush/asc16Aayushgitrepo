package funds;

class product {
    private String productId="p001";
    private String productName="Laptop";
    private int productPrice=10000;

    public void setproductPrice(int productPrice){
        if(productPrice<0 || productPrice>100000){
            System.out.println("Invalid price Entered");
            return;
        }
        this.productPrice=productPrice;
    } 

    public int getproductPrice(){
        return productPrice;
    }

    @Override
    public String toString() {
        
        return "productModel [productId="+ productId+", productName="+productName+", productPrice=" +productPrice+"]";
    }
    

}
public class productModel {
    public static void main(String[] args) {
        product p1=new product();
        System.out.println(p1);
        p1.setproductPrice(500);
        System.out.println(p1);
        p1.setproductPrice(30000000);
        System.out.println(p1);
        System.out.println("------------------");
        System.out.println(p1.getproductPrice());
    }

    
}

