// Sample Products Data
export const products = [
    // Food & Agricultural Products
    {
        id: "basmati-rice-premium",
        slug: "basmati-rice-premium",
        name: "Premium Basmati Rice",
        category: "food",
        shortDescription: "Extra-long grain premium basmati rice with authentic aroma and taste",
        fullDescription: "Our Premium Basmati Rice is sourced from the finest farms in India, known for producing the world's best basmati. Each grain is carefully selected and processed to maintain its natural aroma, long grain structure, and superior cooking quality. Perfect for international markets demanding authentic Indian basmati rice.",
        image: "/images/products/product-basmati-rice.jpg",
        specifications: {
            "Grain Length": "8.3mm minimum",
            "Purity": "95% minimum",
            "Moisture": "12% maximum",
            "Broken Grains": "1% maximum",
            "Origin": "India"
        },
        packaging: ["5kg bags", "10kg bags", "25kg bags", "50kg bags", "Bulk packaging available"],
        certifications: ["Export Quality", "Food Safety Certified", "ISO 22000"],
        moq: "1 Container (20 MT)",
        featured: true
    },
    {
        id: "non-basmati-rice",
        slug: "non-basmati-rice",
        name: "Non-Basmati Rice",
        category: "food",
        shortDescription: "High-quality non-basmati rice varieties for diverse culinary needs",
        fullDescription: "Our non-basmati rice varieties include Sona Masoori, IR64, and other popular grades. These varieties are perfect for everyday cooking and are highly sought after in international markets for their consistent quality and competitive pricing.",
        image: "/images/products/product-non-basmati-rice.jpg",
        specifications: {
            "Varieties": "Sona Masoori, IR64, Swarna",
            "Purity": "95% minimum",
            "Moisture": "14% maximum",
            "Broken Grains": "5% maximum"
        },
        packaging: ["25kg bags", "50kg bags", "Bulk"],
        certifications: ["Export Quality", "Food Safety Certified"],
        moq: "1 Container (25 MT)",
        featured: false
    },
    {
        id: "frozen-vegetables",
        slug: "frozen-vegetables",
        name: "Frozen Vegetables",
        category: "food",
        shortDescription: "IQF frozen vegetables maintaining freshness and nutritional value",
        fullDescription: "Our range of frozen vegetables includes peas, potatoes, mixed vegetables, and more. Using IQF (Individually Quick Frozen) technology, we preserve the natural taste, color, and nutritional value of fresh vegetables.",
        image: "/images/products/product-frozen-vegetables.jpg",
        specifications: {
            "Process": "IQF Technology",
            "Storage Temperature": "-18°C",
            "Shelf Life": "24 months",
            "Varieties": "Peas, Potatoes, Mixed Veg, Corn"
        },
        packaging: ["400g pouches", "1kg pouches", "2.5kg bags", "Bulk 10kg cartons"],
        certifications: ["HACCP", "ISO 22000", "Export Quality"],
        moq: "1 Container",
        featured: true
    },

    // Textiles & Apparel
    {
        id: "cotton-yarn",
        slug: "cotton-yarn",
        name: "Premium Cotton Yarn",
        category: "textiles",
        shortDescription: "High-quality cotton yarn in various counts for textile manufacturing",
        fullDescription: "Our cotton yarn is manufactured using the finest cotton fibers, ensuring superior strength, uniformity, and minimal defects. Available in various counts to meet different textile manufacturing requirements.",
        image: "/images/products/product-cotton-yarn.jpg",
        specifications: {
            "Counts Available": "20s, 30s, 40s, 60s",
            "Type": "Combed & Carded",
            "Strength": "High tensile strength",
            "Uniformity": "±2% variation"
        },
        packaging: ["Cone winding", "Hank form", "Custom packaging available"],
        certifications: ["ISO 9001", "Oeko-Tex Standard 100"],
        moq: "5 Tonnes",
        featured: true
    },
    {
        id: "cotton-fabric",
        slug: "cotton-fabric",
        name: "Cotton Fabric",
        category: "textiles",
        shortDescription: "Premium cotton fabrics in various weaves and finishes",
        fullDescription: "Wide range of cotton fabrics including plain, twill, and satin weaves. Available in various GSM and finishes to suit different garment manufacturing needs.",
        image: "/images/products/product-cotton-fabric.jpg",
        specifications: {
            "Weave Types": "Plain, Twill, Satin",
            "GSM Range": "100-300 GSM",
            "Width": "44-60 inches",
            "Finish": "Dyed, Printed, Plain"
        },
        packaging: ["Roll packing", "Bale packing"],
        certifications: ["ISO 9001", "Oeko-Tex"],
        moq: "3000 meters per color",
        featured: false
    },

    // Chemicals & Fertilizers
    {
        id: "organic-fertilizer",
        slug: "organic-fertilizer",
        name: "Organic Fertilizer",
        category: "chemicals",
        shortDescription: "Eco-friendly organic fertilizers for sustainable agriculture",
        fullDescription: "Our organic fertilizers are manufactured using natural ingredients, promoting sustainable agriculture and soil health. Suitable for various crops and farming practices.",
        image: "/images/products/product-fertilizer.jpg",
        specifications: {
            "NPK Ratio": "Various formulations available",
            "Organic Content": "80% minimum",
            "Moisture": "15% maximum",
            "pH Level": "6.5-7.5"
        },
        packaging: ["25kg bags", "50kg bags"],
        certifications: ["Organic Certified", "ISO 9001"],
        moq: "20 Tonnes",
        featured: true
    },
    {
        id: "industrial-chemicals",
        slug: "industrial-chemicals",
        name: "Industrial Chemicals",
        category: "chemicals",
        shortDescription: "High-purity industrial chemicals for various applications",
        fullDescription: "We supply a range of industrial chemicals including organic and inorganic compounds for manufacturing and processing industries. All products meet international quality standards.",
        image: "/images/products/product-industrial-chemicals.jpg",
        specifications: {
            "Purity": "98% minimum",
            "Grade": "Industrial/Technical",
            "Compliance": "International standards"
        },
        packaging: ["As per requirement"],
        certifications: ["ISO 9001", "Safety Certified"],
        moq: "Varies by product",
        featured: false
    },

    // Specialty Goods
    {
        id: "musical-instruments",
        slug: "musical-instruments",
        name: "Traditional Musical Instruments",
        category: "specialty",
        shortDescription: "Handcrafted traditional Indian musical instruments",
        fullDescription: "Authentic handcrafted musical instruments made by skilled artisans. Each piece is carefully crafted to ensure superior sound quality and aesthetic appeal.",
        image: "/images/products/product-musical-instruments.jpg",
        specifications: {
            "Types": "Tabla, Sitar, Harmonium, etc.",
            "Material": "Premium quality wood and materials",
            "Craftsmanship": "Handmade by expert artisans"
        },
        packaging: ["Individual protective packaging"],
        certifications: ["Handicraft Certified"],
        moq: "Varies by instrument",
        featured: false
    }
]

// Helper functions
export const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
    return products.filter(product => product.featured)
}

export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug)
}

export default products
