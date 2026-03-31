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
    <section className="py-12 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-left text-2xl md:text-4xl font-semibold text-sky">Curated & trending products</h2>
          <a href="#" className="text-xs font-semibold text-sky hover:text-blue-900">
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
        <div className= "flex p-2 xl:grid xl:grid-cols-4 gap-2  md:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-62 md:w-72">
              <ProductCard  image={product.image} name={product.name} description={product.description} />
            </div>           
          ))}
        </div>
      </div>
      <TrendingProductsCTA />
    </section>
  )
}
