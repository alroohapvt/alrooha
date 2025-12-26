import { getProductBySlug, products } from "@/src/data/products"
import ProductDetailClient from "./ProductDetailClient"

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        return <ProductDetailClient product={null} relatedProducts={[]} />
    }

    const relatedProducts = products.filter(
        p => p.category === product.category && p.id !== product.id
    ).slice(0, 3)

    return <ProductDetailClient product={product} relatedProducts={relatedProducts} />
}

