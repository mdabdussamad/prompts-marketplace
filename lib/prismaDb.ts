import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prismadb: PrismaClient | undefined
}

const prisma = globalForPrisma.prismadb || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalForPrisma.prismadb = prisma;

export default prisma;