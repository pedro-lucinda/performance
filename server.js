module.exports = () => {
  const data = {
    products: [],
  }

  for (let i = 0 ; i < 1000; i++){
    data.products.push({
      id: i + 1,
      price: Math.random() * 100,
      title: `Package ${i + 1}`
    })
  }
  return data;
}