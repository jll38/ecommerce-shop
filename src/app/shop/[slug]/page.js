import { ItemInformation } from './../../../components/Shop/ItemInformation';
import { products } from "@/constants/products";
export default function ShopItem({ params }) {
  const slug = params.slug;
  //Search for item in products list by slug,
  //if not found, display error and prompt to return to homepage.

  return (
    <main className="flex min-h-screen px-[16vh] py-12 bg-[#dfe6e9] gap-6 relative">
      <div className="border border-red-500 w-full flex gap-[10vh]">
        <div className="h-full w-[60vh]  border border-blue-500"></div>
        <ItemInformation slug={slug}/>
      </div>
    </main>
  );
}
