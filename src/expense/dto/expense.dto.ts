import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
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
    @IsPositive()
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
    @IsPositive()
    salary?: number;

    @IsOptional()
    @IsString()
    type?: string
}