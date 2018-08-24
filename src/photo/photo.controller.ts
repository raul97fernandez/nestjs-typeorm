import { 
  Controller,
  Get, 
  HttpCode, 
  HttpStatus, 
  Post, 
  Body,
  Put,
  Delete,
  Param 
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Photo> {
    return this.photoService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() photo: Photo): Promise<Photo> {
    return this.photoService.insert(photo);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() photo: Photo): Promise<Photo> {
    return this.photoService.update(id, photo);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Photo> {
    return this.photoService.delete(id);
  }

}
