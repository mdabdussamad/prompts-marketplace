"use server";
import prisma from "@/lib/prismaDb";

export const getTopSellers = async () => {
  try {
    const sellers = await prisma.shops.findMany({
      take: 4,  
      orderBy: {
        allProducts: 'desc',
      },
    });

    // return sellers;
    return JSON.parse(JSON.stringify(sellers));
  } catch (error) {
    console.log(error);
  }
};
