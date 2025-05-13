import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
import { ExpenseService } from './expense.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';

@Controller('expense')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService){}
    @Get('/incomes')
      async getIncomeAllExpense() {
        try {
            const expense = await this.expenseService.getIncomeAllExpense();
            return {
                statusCode: 200,
                success: true,
                message: "Fetch All Expense!!!",
                results: expense
            }
        } catch (error) {
            console.error(error);
            throw new HttpException(
                {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                success: false,
                message: 'Failed to fetch expenses',
                error: error.message || error,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    @Post("/create")
    async createIncomeExpense(@Body() dto: CreateExpenseDto){
        try {
            const expense = await this.expenseService.createIncomeAllExpense(dto);
            return {
                statusCode: 200,
                success: true,
                message: "Create Expense SuccessFully!!!",
                result: expense
            }
        } catch (error) {
            console.error(error);
            throw new HttpException(
                {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                success: false,
                message: 'Failed to Create expenses',
                error: error.message || error,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Put("/update/:id")
    async updateIncomeExpense(@Param("id") id: string, @Body() dto: UpdateExpenseDto){
        try {
            const expense = await this.expenseService.updateIncomeAllExpense(id, dto);
            return {
                statusCode: 200,
                success: true,
                message: "update Expense SuccessFully!!!",
                result: expense
            }
        } catch (error) {
            console.error(error);
            throw new HttpException(
                {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                success: false,
                message: 'Failed to update expenses',
                error: error.message || error,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    @Get("/income/:type")
    async getIncomeExpense(@Param("type") type: string){
        try {
            const expense = await this.expenseService.getIncomeExpense(type);
            return {
                statusCode: 200,
                success: true,
                message: "Income Expense SuccessFully!!!",
                result: expense
            }
        } catch (error) {
            console.error(error);
            throw new HttpException(
                {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                success: false,
                message: 'Failed to Income expenses',
                error: error.message || error,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    @Delete("/delete/:id")
    async deleteIncomeExpense(@Param("id") id: string){
        try {
            const expense = await this.expenseService.deleteIncomeExpense(id);
            return {
                statusCode: 200,
                success: true,
                message: "Delete Expense SuccessFully!!!",
                result: expense
            }
        } catch (error) {
            console.error(error);
            throw new HttpException(
                {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                success: false,
                message: 'Failed to Delete expenses',
                error: error.message || error,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }




}
