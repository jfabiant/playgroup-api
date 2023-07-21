import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import {InjectRepository} from "@nestjs/typeorm"
import { Product } from './entities/product.entity';
import {Repository} from "typeorm"
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private productRepository:Repository<Product>){}

  create(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.image = createProductDto.image;
    newProduct.updatedAt = null;
    return this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({
      id,
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productFound = await this.findOne(id);
    productFound.name = updateProductDto.name;
    productFound.description = updateProductDto.description;
    productFound.image = updateProductDto.image;
    productFound.updatedAt = new Date();
    return this.productRepository.save(productFound);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
