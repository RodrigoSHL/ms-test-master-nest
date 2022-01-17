import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
    name: string;

    shortName: string;

    hours: number;

    complete: boolean
}
