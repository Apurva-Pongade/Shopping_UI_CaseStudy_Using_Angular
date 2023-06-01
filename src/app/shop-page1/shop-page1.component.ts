import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-shop-page1',
  templateUrl: './shop-page1.component.html',
  styleUrls: ['./shop-page1.component.css']
})
export class ShopPage1Component {
item: any;

  constructor (public sharedDataService:SharedDataService, public cartService:CartService){}
  addToCartNotify(): void {
    this.cartService.incrementCartCount();
  }
  description1 ='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laboriosam. Distinctio repudiandae, dolorem deserunt esse minima similique vitae unde deleniti porro necessitatibus voluptates expedita obcaecati itaque modi amet illum? Ipsa?' ;
    title1 =  'Lira Earings';
    Price1 =  99;

    addtocart(item: any){
      this.cartService.addtoCart(item);
      this.sharedDataService.title1 = 'Lira Earings';
      this.sharedDataService.price1 = 99;
      this.sharedDataService.img1='assets/shop-img1';
    }
   
}
