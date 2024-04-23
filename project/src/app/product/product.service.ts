import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproducts(catagory:string):Observable<Product[]>{
    const categoryUrl = catagory ? `/category/${catagory}` : '';
    return this.http.get<Product[]>(`https://fakestoreapi.com/products${categoryUrl}?sort=desc`);
  }

  addEditProduct(postData:any, selectedProduct:any){
    if (!selectedProduct){
      return this.http.post('https://fakestoreapi.com/products',postData);
    } else {
      return this.http.put(`https://fakestoreapi.com/products/${selectedProduct.id}`,postData);
    }
  }
  deleteProduct(ProductId: number){
    return this.http.delete(`https://fakestoreapi.com/products/${ProductId}`);
  }
  getCategories(): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}  
