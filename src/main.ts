type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
};

const product1: Product = {
  id: '1',
  name: 'Товар 1',
  price: 100,
};

const product2: Product = {
  id: '2',
  name: 'Товар 2',
  description: null,
  price: 200,
};

const product3: Product = {
  id: '3',
  name: 'Товар 3',
  description: '',
  price: 300,
};

const product4: Product = {
  id: '4',
  name: 'Товар 4',
  description: 'Описание товара 4',
  price: 400,
};

const printProductDescription = (product: Product) => {
  const description = product.description;

  const result =
    description === null || description === undefined ? 'не обнаружено' : description === '' ? 'пусто' : description;

  console.log(result);
};

console.log('Product 1:');
printProductDescription(product1);

console.log('\nProduct 2:');
printProductDescription(product2);

console.log('\nProduct 3:');
printProductDescription(product3);

console.log('\nProduct 4:');
printProductDescription(product4);
