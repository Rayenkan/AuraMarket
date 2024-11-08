const fetchCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");

  const categories = await response.json();

  const categoryImages = await Promise.all(
    categories.map(async (category: string) => {
      const imageUrl = await fetchImageUrl(category);
      return { categorieName: category, categorieImgUrl: imageUrl };
    })
  );

  return categoryImages;
};

const fetchImageUrl = async (category: string) => {
  const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${category}&client_id=${apiKey}`
  );
  const data = await response.json();
  const imageUrl = data.results[0]?.urls?.regular || ""; // Default to an empty string if no image is found
  return imageUrl;
};

export default fetchCategories;
