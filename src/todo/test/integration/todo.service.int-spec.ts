import { Test } from "@nestjs/testing";
import {PrismaService} from "../../../prisma/prisma.service";
import {AppModule} from "../../../app.module";

describe('TodoService Int', () => {
    let prismaService: PrismaService;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        prismaService = moduleRef.get(PrismaService)
        await prismaService.cleanDatabase();
    })

    it.todo('should pass')
})