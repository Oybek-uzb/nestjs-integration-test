import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {PrismaClient} from "@prisma/client/scripts/default-index";

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get<string>('DATABASE_URL'),
                },
            },
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$desconnect();
    }

    async cleanDatabase() {
        if (process.env.NODE_ENV === 'production') return;
        const models = Reflect.ownKeys(this).filter(key => key[0] !== '_');

        // @ts-ignore
        return Promise.all(models.map(modelKey => this[modelKey].deleteMany()))
    }
}