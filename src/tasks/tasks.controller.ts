import { Controller, Get, Query, Req } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get('get')
    getAllTasks(@Req() request: Request, @Query() query: any) {
        return { headers: request.headers, query: query || {} };
        // return { data: [{ 'hello': 'world' }] };
    }
}
