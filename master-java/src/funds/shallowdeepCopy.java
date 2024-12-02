package funds;

public class shallowdeepCopy{

    public static void main(String[] args) {
        
        Category electronics = new Category("Electronics");
        Product originalProduct = new Product(1, "Laptop", 999.99, electronics);

        // Shallow copy
        Product shallowCopiedProduct = new Product(originalProduct, false);
        // Deep copy
        Product deepCopiedProduct = new Product(originalProduct, true);

        System.out.println("Original Product: " + originalProduct);
        System.out.println("Shallow Copied Product: " + shallowCopiedProduct);
        System.out.println("Deep Copied Product: " + deepCopiedProduct);

        // Modify the category of the original product
        originalProduct.getCategory().setName("Computers");

        System.out.println("\nAfter modifying the original product's category:");
        System.out.println("Original Product: " + originalProduct);
        System.out.println("Shallow Copied Product: " + shallowCopiedProduct);
        System.out.println("Deep Copied Product: " + deepCopiedProduct);
    }
}

class Product {
    private int id;
    private String name;
    private double price;
    private Category category;

    // Constructor
    public Product(int id, String name, double price, Category category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Copy constructor
    public Product(Product product, boolean deepCopy) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        if (deepCopy) {
            this.category = new Category(product.category);
        } else {
            this.category = product.category;
        }
    }

    public Category getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "Product{id=" + id + ", name='" + name + "', price=" + price + ", category=" + category + "}";
    }
}

class Category {
    private String name;

    // Constructor
    public Category(String name) {
        this.name = name;
    }

    // Copy constructor
    public Category(Category category) {
        this.name = category.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category{name='" + name + "'}";
    }
}