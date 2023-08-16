import { getCatagories } from "@/Service";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCatagories().then((value) => setCategories(value));
  }, []);
  return (
    <div className="bg-white rounded-lg p-3">
      <div className="py-2 border-b border-gray-500 font-semibold">
        Categories
      </div>
      {categories.map((category) => (
        <div className="py-2 border-b border-gray-200">
          <Link key={category.name} href={`/category/${category.slug}`}>
            <span className="text-gray-500 capitalize">{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
