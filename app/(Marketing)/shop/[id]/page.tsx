import Review from "@/components/ShopDetail/Review";
import { BreadcrumbShopDetail } from "../../../../components/ShopDetail/Breadcrumb";
import Description from "../../../../components/ShopDetail/Description";
import Product from "../../../../components/ShopDetail/Product";
import OtherProduct from "@/components/ShopDetail/OtherProduct";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-[80px]">
      <BreadcrumbShopDetail id={params.id} />
      <Product />
      <Description />
      <Review />
      <OtherProduct />
    </div>
  );
}
