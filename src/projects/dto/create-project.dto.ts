import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    name: string;

    shortName: string;

    hours: number;

    complete: boolean
}
