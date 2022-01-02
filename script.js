let list = [
  {
    name: 'aplle',
    value: 5,
    buy: false,
    price: 1,
    amount: 5,
  },
  {
    name: 'lime',
    value: 2,
    buy: true,
    price: 2,
    amount: 4,
  },
  {
    name: 'orange',
    value: 10,
    buy: false,
    price: 5,
    amount: 50,
  },
  {
    name: 'pineapple',
    value: 7,
    buy: true,
    price: 13,
    amount: 91,
  },
]

alert(JSON.stringify(list))

//
//

function sortList(el) {
  const newList = []
  for (const sort of el) {
    if (!sort.buy) {
      newList.unshift(sort)
    } else {
      newList.push(sort)
    }
  }
  return JSON.stringify(newList)
}

alert(sortList(list))

//
//

let buyProduct = prompt(
  'Enter Enter the name of the unpurchased product from the list',
)

function buyProducts(el) {
  for (const sort of list) {
    if (sort.name === el) {
      sort.buy = true
    }
  }

  return JSON.stringify(list)
}

alert(buyProducts(buyProduct))

//
//

let listNotBuy = []

let newName = prompt('Enter the product name')
let newValue = prompt('Enter the product value')
let newPrice = prompt('Enter the product Price')

function newProduct(name, value, price) {
  let addProduct = {
    name: name,
    value: +value,
    buy: false,
    price: +price,
    amount: +value * +price,
  }
  listNotBuy.push(addProduct)
}

newProduct(newName, newValue, newPrice)

alert(JSON.stringify(listNotBuy))
