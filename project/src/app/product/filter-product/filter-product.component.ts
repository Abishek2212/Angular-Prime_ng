import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  
  selectedCatagory: string = '';
  catagories:string[] =[];
  @Output() selectCatagory: EventEmitter<string> = new EventEmitter<string>();
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.productService.getCategories().subscribe(
      response => this.catagories =response
    )
  }
  onChangeCatagory($event: any){
    this.selectCatagory.emit($event.value)
  }
}
