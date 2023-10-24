import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTokenUserDB(id)  {
    return prisma.tokens.findUnique({
        where: {
            id: id
        }
    });
}

export async function generateTokenDB(name, credential_level)  {
    const result = await prisma.tokens.create({
        data: {
            name: name,
            credential_level: credential_level
        }
    });

    return result.id;
}