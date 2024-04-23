import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit, OnChanges {
  @Input() displayAddEditmodel:boolean=true;
  @Input() selectedProduct:any=null;
  @Output() clickClose: EventEmitter<boolean>= new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any>= new EventEmitter<any>();

  modaltype:string='Add';

  productForm =this.fb.group({
    title:["", Validators.required],
    price:[0, Validators.required],
    description:[""],
    category:["", Validators.required],
    image:["", Validators.required]
  })
  constructor(private fb:FormBuilder, private productService:ProductService, private messageService:MessageService) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.selectedProduct){
      this.productForm.patchValue(this.selectedProduct);
      this.modaltype='Edit';
    }else{
      this.productForm.reset();
      this.modaltype='Add';
    }
  }
  closeModel(){
    this.clickClose.emit(true);
    this.productForm.reset();
    this.clickClose.emit(true);
  }
  addEditProduct(){
    console.log(this.productForm.value);
    this.productService.addEditProduct(this.productForm.value, this.selectedProduct).subscribe(
      response => {
        this.clickAddEdit.emit(response);
        this.closeModel();
        const msg = this.modaltype === 'Add' ? 'Product Added' : 'Product Updated';
        this.messageService.add({severity:'success',summary:'Success',detail: msg});
      },
      error =>{
        this.messageService.add({severity:'error',summary:'Error',detail:'Error'});
        console.log('Error occured');
      }
      )
  }
}
