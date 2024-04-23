import { Component, OnInit } from '@angular/core';
import { ProductService } from '../interview.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products!: Product[];

  constructor(private ProductService: ProductService) {}

  ngOnInit() {
      this.ProductService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}