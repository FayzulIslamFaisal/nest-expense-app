import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';

@Injectable()
export class ExpenseService {
    constructor(private readonly prisma: PrismaService){}
    async getIncomeAllExpense() {
        const allExpense = await this.prisma.expense.findMany({
            select: {
                id:true,
                salary:true,
                source: true
            }
        });

        if (!allExpense || allExpense.length===0) {
            throw new NotFoundException("No Expense Data Found!!!")
        }

        return allExpense;

    }

    async createIncomeAllExpense(dto: CreateExpenseDto) {
        const { source, salary, type} = dto
        const existing = await this.prisma.expense.findFirst({
            where: {
            source,
            salary,
            },
        });

        if (existing) {
            throw new BadRequestException('Expense with same source and salary already exists');
        }

        const newExpense = await this.prisma.expense.create({
            data: {
                source, salary
            }
        });
        return newExpense;
    }

    async updateIncomeAllExpense(id: string, dto:UpdateExpenseDto){
        const { salary, source} = dto;
        const findExpense = await this.prisma.expense.findUnique({
            where: {
                id
            }
        });

        if (!findExpense) {
            throw new NotFoundException("Id Not Found")
        };

        const updateExpense = await this.prisma.expense.update({
            where:{
                id
            },
            data:{
                source,
                salary
            },
            select: {
                id: true,
                source: true,
                salary: true,
            }
        });
        if (!updateExpense) {
            throw new BadRequestException()
        };
        return updateExpense;

    }
    async getIncomeExpense(type: string){
        return "Single expenses...";
    }
    async deleteIncomeExpense(id: string){
        return "Delete expenses...";
    }
    
}
