import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

//  /blog -> findAll method from blog service
// /blog/:id -> findById method from blog service
// /blog/key/:key -> findByUniqueKey
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  findAll() {
    return this.blogService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.blogService.findId(+id);
  }

  @Get('by-unique-key/:key')
  findByBlogUniqueKey(@Param('key') key: string) {
    return this.blogService.findByUniqueKey(key);
  }
}
