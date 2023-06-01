import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public title : string;
  public description  : string;
  public price : number;
  public img :any;

  constructor(private cartService : CartService, private sharedDataService: SharedDataService,private router: Router) { 
    this.title = this.sharedDataService.title;
    this.description = this.sharedDataService.description;
    this.price = this.sharedDataService.price;
    this.img= this.sharedDataService.img;
  }

  ngOnInit(): void {


    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  
  removeItem(item: any){
    this.cartService.removeItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  navigateToNewPage() {
    this.router.navigate(['homePage']);
  }
  
}
