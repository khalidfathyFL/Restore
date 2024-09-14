import { Grid2 } from "@mui/material";
import { Product } from "../../../../app/models/product"
import ProductCard from "./ProductCard";

interface props {
    products: Product[];
}


export default function ProductList({ products }: props) {
    return (
        <>
            <Grid2 container spacing={4}>

                {/* Mapping through the products array and creating list items for each product */}
                {products.map((product: any) => (
                    <Grid2 size={{ xs: 3 }} >
                        <ProductCard key={product.id} product={product} />
                    </Grid2>
                ))}
            </Grid2>
        </>
    )
}