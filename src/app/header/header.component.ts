import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent  {

  constructor(private router: Router, public cartService: CartService) {}
  cartCount = 0;
  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  navigateToNewPage() {
    this.router.navigate(['/cart']);
  }
  navigateTologinPage() {
    this.router.navigate(['/login']);
  }

  navigateToHomePage() {
    this.router.navigate(['/homePage']);
  }
   
  }

