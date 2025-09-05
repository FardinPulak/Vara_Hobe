import { MyPropertyService } from './my-property.service';
import { CreateMyPropertyDto } from './my-property.dto';
export declare class MyPropertyController {
    private readonly myPropertyService;
    constructor(myPropertyService: MyPropertyService);
    createProperty(createMyPropertyDto: CreateMyPropertyDto, req: any): Promise<import("./my-property.entity").MyProperty>;
}
