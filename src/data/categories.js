// Product Categories Data
export const categories = [
    {
        id: "food",
        name: "Food & Agricultural Exports",
        slug: "food",
        description: "Premium quality agricultural products and food grains for global markets",
        image: "/images/categories/category-food.jpg",
        icon: "🌾",
        products: [
            "Rice (Basmati, Non-basmati)",
            "Frozen vegetables (peas, potatoes, mixed veg)",
            "Fresh vegetables",
            "Cereals & grains",
            "Frozen meat",
            "Lac, resins"
        ],
        cta: {
            text: "View All Products",
            link: "/products?category=food"
        },
        color: "amber"
    },
    {
        id: "textiles",
        name: "Textiles & Apparel",
        slug: "textiles",
        description: "High-quality textiles and apparel for international fashion and manufacturing",
        image: "/images/categories/category-textiles.jpg",
        icon: "🧵",
        products: [
            "Cotton yarn",
            "Fabrics",
            "Finished clothing",
            "Wool & animal hair yarn"
        ],
        cta: {
            text: "View Textiles",
            link: "/products?category=textiles"
        },
        color: "blue"
    },
    {
        id: "chemicals",
        name: "Chemicals & Fertilizers",
        slug: "chemicals",
        description: "Industrial-grade chemicals and fertilizers with quality assurance",
        image: "/images/categories/category-chemicals.jpg",
        icon: "⚗️",
        products: [
            "Organic chemicals",
            "Industrial fertilizers",
            "Basic chemical supplies"
        ],
        cta: {
            text: "View Chemicals",
            link: "/products?category=chemicals"
        },
        color: "emerald"
    },
    {
        id: "specialty",
        name: "Specialty Goods",
        slug: "specialty",
        description: "Unique and customizable export items for diverse international needs",
        image: "/images/categories/category-specialty.jpg",
        icon: "🎯",
        products: [
            "Musical instruments",
            "Umbrellas & walking sticks",
            "Vegetable plaiting materials",
            "Other customizable export items"
        ],
        cta: {
            text: "View Specialty Goods",
            link: "/products?category=specialty"
        },
        color: "purple"
    }
]

export default categories
