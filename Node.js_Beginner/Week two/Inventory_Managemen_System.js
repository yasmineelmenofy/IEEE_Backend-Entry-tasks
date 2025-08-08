
function createItem(name, category, price, stock) {
  return {
    name: name || "Unkown",
    category: category || "General",
    price: price || 0,
    stock: stock || 0,
    updateStock(newStock) {
      this.stock = newStock || 0;
    },
    applyDiscount(discount) {
      discount = discount|| 0;
      if (typeof discount === "number" && discount > 0 && discount <= 100) {
     const discountAmount = (discount / 100) * this.price;
     this.price -= discountAmount;
   }
    }
  };
}

const inventory = {
  items: [],
  addItem(item) {
    if (item && item.name) {
      this.items.push(item);
    }
  },
  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  },
  getItem(itemName) {
    return this.items.find(item => item.name === itemName);
  },
  filterItems(predicate) {
    return this.items.filter(predicate);
  }
};

const item1 = createItem("Laptop", "Electronics", 100, 5);
const item2 = createItem("Milk", "Groceries", 40, 5);
const item3 = createItem("Notebook", "Stationery",20, 30);


inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
item2.updateStock(8);
item1.updateStock(0); 
item1.applyDiscount(10); 
item3.applyDiscount(50);


const electronics = inventory.filterItems(item => item.category === "Electronics");
const lowStock = inventory.filterItems(item => item.stock < 30);
console.log(" Electronics:", electronics);
console.log(" Low Stock Items:", lowStock);


inventory.removeItem("Notebook");
const removed = inventory.getItem("Notebook");
console.log("Removed Item ", removed); 

console.log(" Inventory:", inventory.items);
