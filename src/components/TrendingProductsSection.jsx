import { useState } from "react"
import { ProductCard } from "./custom/ProductCard"
import { TrendingProductsCTA } from "./custom/TrendingProductsCTA"

const categories = [
  "Product category",
  "Selected category",
  "Product category",
  "Product category",
  "Product category",
  "Product category",
  "Product category",
  "More",
]

const products = [
  {
    id: 1,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 2,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 3,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 4,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 5,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 6,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
  {
    id: 7,
    name: "Ampicilyn 450 MG",
    description: "Measures the levels of substances in your blood...",
    image: "/meds.png",
  },
]

export function TrendingProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState(1)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-left text-2xl md:text-4xl font-bold text-gray-900">Curated & trending products</h2>
          <a href="#" className="text-xs font-semibold text-gray-900 hover:text-gray-700">
            SEE ALL PRODUCTS
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                selectedCategory === index ? "bg-[#252B61] text-white" : "bg-gray-100 text-[#252B61] hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className= "sm:grid sm:grid-cols-2 lg:grid-cols-4 flex gap-2 md:gap-10 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-72 md:w-80">
              <ProductCard  image={product.image} name={product.name} description={product.description} />
            </div>           
          ))}
        </div>
      </div>
      <TrendingProductsCTA />
    </section>
  )
}
