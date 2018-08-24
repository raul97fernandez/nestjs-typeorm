import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findById(id: number): Promise<Photo> {
    return await this.photoRepository.findOneById(id);
  }

  async insert(photo: Photo): Promise<Photo> {
    await this.photoRepository.save(photo);
    return photo;
  }

  async update(id: number, photo: Photo): Promise<Photo> {
    try {
      await this.photoRepository.updateById(id, photo);
      return photo;
    } catch (e) {

    }
  }

  async delete(id:number): Promise<Photo> {
    try {
      const toDelete = this.photoRepository.findOneById(id);
      await this.photoRepository.deleteById(id);

      return toDelete;
    } catch (e) {

    }
  }

}
