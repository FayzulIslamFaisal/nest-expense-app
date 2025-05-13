import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
enum ExpenseType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export class CreateExpenseDto {
    @IsNotEmpty()
    @IsString()
    source: string;

    @IsNotEmpty()
    @IsNumber()
    salary: number;

    @IsOptional()
    @IsEnum(ExpenseType)
    type?: ExpenseType
}

export class UpdateExpenseDto {
    @IsOptional()
    @IsString()
    source?: string;

    @IsOptional()
    @IsNumber()
    salary?: number;

    @IsOptional()
    @IsString()
    type?: string
}