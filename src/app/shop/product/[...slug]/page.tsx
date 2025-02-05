import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "@/app/page";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

// Combine all product data into a single array
const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Await the params object
  const resolvedParams = await params;

  // Log resolved params for debugging
  console.log("Resolved Params:", resolvedParams);

  // Extract productId from resolvedParams.slug
  const productId = Number(resolvedParams.slug[0]);

  // Validate productId
  if (isNaN(productId)) {
    notFound(); // Redirect to 404 if productId is not a valid number
  }

  // Simulate asynchronous data fetching
  const productData = await new Promise<Product | undefined>((resolve) =>
    setTimeout(() => resolve(data.find((product) => product.id === productId)), 100)
  );

  // Redirect to 404 if product is not found
  if (!productData) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData.title} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
}