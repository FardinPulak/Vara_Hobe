import { MyPropertyRepository } from './my-property.repository';
import { MyProperty } from './my-property.entity';
import { CreateMyPropertyDto } from './my-property.dto';
export declare class MyPropertyService {
    private myPropertyRepository;
    findAllByUser(useruserId: any): void;
    constructor(myPropertyRepository: MyPropertyRepository);
    create(createMyPropertyDto: CreateMyPropertyDto, userId: number): Promise<MyProperty>;
}
