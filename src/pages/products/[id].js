import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    // Fetch product details here (e.g., from an API or database) based on the `id`.
    // For now, we'll use placeholder data.
    const product = {
        id,
        name: 'Smartphone',
        description: 'Latest model with great features',
        price: '599.99',
        imageUrl: 'https://placehold.co/600x600',
        link: `https://fast-chat-dashboard.vercel.app/products/${id}`, // Replace with actual domain
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <a href={product.link}>Buy Now</a>
        </div>
    );
};

export default Product;
