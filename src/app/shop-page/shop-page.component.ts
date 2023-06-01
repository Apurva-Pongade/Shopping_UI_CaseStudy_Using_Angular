import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent {
  addToCartNotify(): void {
    // Add product to the cart

    // Increment the cart count
    this.cartService.incrementCartCount();
  }
  

  description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatum! Modi accusantium, quasi aliquam, tempore reprehenderit voluptas error adipisci, consectetur unde beatae minima. Sunt nulla sint veniam officiis. Hic, eum.' ;
    title =  'Gold Big Hoops';
    Price =  199;

    addToCart() {
      this.sharedDataService.title = 'Gold Big Hoops';
      this.sharedDataService.price = 199;
    }
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  item: any;
  
  constructor(private cartService: CartService,private sharedDataService: SharedDataService) { }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


}
