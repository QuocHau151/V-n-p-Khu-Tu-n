"use server";

import { db } from "@/lib/db";

export const fetchProduct = async () => {
  try {
    const products = await db.product.findMany();

    return products;
  } catch (error) {
    return "failed to fetch product";
  }
};
export const deleteProduct = async (id: string) => {
  try {
    await db.product.delete({
      where: {
        id,
      },
    });

    return "Xoá sản phẩm thành công";
  } catch (error) {
    return "failed to delete product";
  }
};
export const getProductById = async (id: string) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    return "failed to fetch product";
  }
};
export const updateProduct = async (id: string, data: UpdateProductData) => {
  try {
    await db.product.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        brand: data.brand,
        tags: {
          update: data.tags.map((tagName) => ({
            where: {
              id: tagName, // Assuming `tagName` contains the unique identifier for the tag
            },
            data: {
              name: tagName,
            },
          })),
        },
        price: data.price,
        description: data.description,
        image: {
          update: data.image.map((imageUrl) => ({
            where: {
              // Similarly, specify how to uniquely identify the image to update.
              // This might be an ID or another unique field.
              id: imageUrl,
            },
            data: {
              url: imageUrl,
            },
          })),
        },
      },
    });

    return { success: "Cập nhật sản phẩm thành công" };
  } catch (error) {
    return { error: "failed to update product" };
  }
};
export const addProduct = async (data: AddProductData) => {
  try {
    await db.product.create({
      data: {
        id_product: data.id_product,
        name: data.name,
        brand: data.brand,
        category: data.category,
        // Transform the array of tag names into the expected structure
        tags: {
          create: data.tags.map((tagName) => ({
            name: tagName, // Assuming 'name' is the field in your Tag entity where you store the tag name
          })),
        },
        price: data.price,
        description: data.description,
        image: {
          create: data.image.map((imageUrl) => ({
            url: imageUrl, // Assuming 'url' is a field in your Image entity
          })),
        },
      },
    });

    return { success: "Thêm sản phẩm thành công" };
  } catch (error) {
    return { error: "failed to add product" };
  }
};
