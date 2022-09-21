class Client {
  constructor(private _name: string) { }

  get name(): string {
    return this._name;
  }
}

class Item {
  constructor(private _itemName: string, readonly price: number) { }

  get item(): string {
    return this._itemName;
  }
}

class Order {
  private _client: Client; // no binding da linha 24 isso não tá sendo usado?
  private _orderItems: Array<Item>;
  private _paymentMethod: string;
  private _discountPercentage?: number;

  constructor(
    client: Client,
    orderItems: Array<Item>,
    paymentMethod: string,
    discountPercentage?: number) {
    this._client = client;
    this._orderItems = orderItems;
    this._paymentMethod = paymentMethod;
    this._discountPercentage = discountPercentage;
  }

  get client() {
    return this._client;
  }

  set client(client) {
    this._client = client;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(payment) {
    this._paymentMethod = payment;
  }

  total(): number {
    return this._orderItems.reduce((acc, curr) => curr.price + acc, 0)
  }

  totalWithDiscount(): number {
    return this.total() * (1 - (this._discountPercentage || 0))
  }
}

const cliente = new Client('João');
const item1 = new Item('Batata frita', 5);
const item2 = new Item('Guaraná Jesus', 2);
const order1 = new Order(cliente, [item1, item2], 'Crédito', .1);

console.log(cliente.name)
console.log(item1.item, item1.price)

console.log(order1)

console.log(order1.total());
console.log(order1.totalWithDiscount());

