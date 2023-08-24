import { products } from "@/constants/products";
export default function ShopItem({ params }) {
    const slug = params.slug;
    //Search for item in products list by slug, 
    //if not found, display error and prompt to return to homepage.

  return (
    <main className="flex min-h-screen px-24 py-12 bg-[#dfe6e9] gap-6 relative">
      <div className="text-white">{slug}</div>
    </main>
  );
}
