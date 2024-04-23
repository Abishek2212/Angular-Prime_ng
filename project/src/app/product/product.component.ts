import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products:Product[]=[];
  displayAddEditmodel=false;
  selectedProduct:any=null;
  constructor(private productService:ProductService, private messageService:MessageService, private confirmationService: ConfirmationService,private router: Router) { }

  ngOnInit(): void {
    this.getproductList();
  }
  getproductList(catagory?:string){
    this.productService.getproducts(catagory || "").subscribe(
      response => {
        this.Products=response;
      }
    )
  }
  showadd(){
    this.displayAddEditmodel=true;
    this.selectedProduct=null;
  }  
  hideAddModal(isClosed: boolean){
    this.displayAddEditmodel=!isClosed;
  }

  saveorUpadteProductToList(newData:any){
    if(newData.id === this.selectedProduct.id){
      const productIndex = this.Products.findIndex(data => data.id === newData.id);
      this.Products[productIndex] = newData;
    } else{
      this.Products.unshift(newData);
    }
  }
  showeditProduct(product:Product){
    this.displayAddEditmodel=true;
    this.selectedProduct=product;
  }

  deleteProduct(product:number) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.productService.deleteProduct(product).subscribe(
              Response => {
                this.Products=this.Products.filter(data => data.id !== product);
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
              }
            )
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }
  getproductsByCategory(catagory:string){
    this.getproductList(catagory);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
