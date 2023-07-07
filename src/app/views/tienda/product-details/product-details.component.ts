import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Products, ProductsResponse } from 'src/app/models/product.modul';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: Products[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    const params = this.route.snapshot.paramMap;
    const id: number = Number(String(params.get('id')))
  }


  ngOnInit() {
    this.productService.getAll().pipe(
      map((data: ProductsResponse) => {
        return data.map(item => {
          return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.description2,
            description3: item.description3,
            price1: item.price1,
            price2: item.price2,
            price3: item.price3,
            image1: item.image1,
            image2: item.image2,
            image3: item.image3
          };
        });
      })
    ).subscribe({
      next: (products: Products[] | any) => {
        this.products = products;
      }
    });
  }
}