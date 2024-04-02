import { Component, OnInit } from '@angular/core';
import { product } from './products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public pageTitle : string = "Product List";
public showImage : boolean = false;
private _filterValue : string = "";

get filterValue() : string {
  return this._filterValue;
}

set filterValue(value : string){
  this._filterValue = value;
  this.filteredProductList = this.performFilter(value);
}
public products : product[] = [];
public filteredProductList : product[] = this.products;

constructor (private productService : ProductServiceService) { }

performFilter(filterBy:string) : product[] {
filterBy = filterBy.toLowerCase(); 
return this.products.filter((product : product) => 
product.productCode.toLowerCase().includes(filterBy));
}

toggleImage() : void {
  this.showImage = !this.showImage;
}

ngOnInit(): void {
  this.products = this.productService.getProducts();
  this.filteredProductList = this.products;
}

onStarClicked(e: any) : void {
  alert(`You can't change the rating from ${e}`);
}
}
