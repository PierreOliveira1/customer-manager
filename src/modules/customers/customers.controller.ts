import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
	constructor(private readonly customersService: CustomersService) {}

	@Post()
	create(@Body() data: CreateCustomerDto) {
		return this.customersService.create(data);
	}

	@Patch(':customerId')
	update(
		@Param('customerId') customerId: string,
		@Body() data: UpdateCustomerDto,
	) {
		return this.customersService.update(customerId, data);
	}
}