import { useEffect, useState } from "react";
export type Product = {
  name: string;
  price: number;
  brand: string;
  model: string;
  color: string;
  stockDetail: boolean;
  feature: string[];
  category: string;
  rating: number;
  lastUpdated: string;
  salePerDay: number;
  salePerMonth: number;
};

export const useProductGenerator = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getTableData = async () => {
    const res = await fetch(
      import.meta.env.DEV
        ? "../../company_table_data.json"
        : "../../React-cms-website-v1/company_table_data.json"
    );
    const data = await res.json();
    const temp: any = [];
    for (let i = 0; i < 100; i++) {
      temp.push(generateProduct(data));
    }
    console.log(temp);

    setProducts(temp);
  };

  const generateProduct = (data: any) => {
    const {
      names,
      brands,
      models,
      colors,
      prices,
      inStocks,
      features,
      ratings,
      lastUpdatedDates,
      categories,
      sales,
    } = data;
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const feature = features[Math.floor(Math.random() * features.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const category = categories[Math.floor(Math.random() * categories.length)];
    const salePerDay = sales[Math.floor(Math.random() * sales.length)];
    const salePerMonth = sales[Math.floor(Math.random() * sales.length)];
    const rating = ratings[Math.floor(Math.random() * ratings.length)];
    const stockDetail = inStocks[Math.floor(Math.random() * inStocks.length)];
    const lastUpdated =
      lastUpdatedDates[Math.floor(Math.random() * lastUpdatedDates.length)];

    const product = {
      name,
      price,
      brand,
      model,
      color,
      stockDetail,
      feature,
      category,
      rating,
      lastUpdated,
      salePerDay,
      salePerMonth,
    };

    return product;
  };

  useEffect(() => {
    getTableData();
  }, []);
  return [products, getTableData];
};
