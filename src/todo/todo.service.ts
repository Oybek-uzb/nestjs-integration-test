import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) {}

    createTodo() {

    }

    updateTodo() {

    }
}