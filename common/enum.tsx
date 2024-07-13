interface ProductData {
  id: string;
  id_product: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: Array<string>;
  tag: Array<string>;
  description: string;
  link: string;
  type: string;
  color: string;
  button: string;
  power: string;
  connect: string;
  type_key: string;
  created_at: Date;
  expires_at: Date;
}
interface CartItem {
  id: string;
  id_product: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  tag: string;
  quantity: number;
  description: string;
  link: string;
  type: string;
  color: string;
  button: string;
  power: string;
  connect: string;
  type_key: string;
  created_at: Date;
  expires_at: Date;
}
interface UpdateProductData {
  name: string;
  brand: string;
  tags: string[];
  price: string;
  description: string;
  image: string[];
}
interface AddProductData {
  id_product: string;
  name: string;
  brand: string;
  category: string;
  tags: string[];
  price: string;
  description: string;
  image: string[];
}
interface EnergyData {
  id: string;
  name: string;
  value: string;
}
enum UserRole {
  ADMIN = "Admin",
  USER = "User",
}

enum StateUser {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}

enum StateOrder {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
