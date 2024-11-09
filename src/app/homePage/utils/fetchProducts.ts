const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=8');
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const products = await response.json();
      console.log(products);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return null;
    }
  };
  
  export default fetchProducts;
  