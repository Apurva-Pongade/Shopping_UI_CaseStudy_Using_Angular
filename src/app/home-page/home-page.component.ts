import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  img1: string = 'assets/img1.png';
  img2: string = 'assets/img2.png';

  constructor(private router: Router) {}

  openProductPage(product: any) {
    this.router.navigate(['assests/img2.png', product.id]);
  }
  navigateToNewPage() {
    this.router.navigate(['/shop-page']);
  }
  navigatetolira(){
    this.router.navigate(['/shop-page1']);
  }

  imageClicked1 = false;
  imageClicked2 = false;
  imageClicked3 = false;
  imageClicked4 = false;
  imageClicked5 = false;
  imageClicked6 = false;
  // Declare other variables for other images

  toggleImage(imageNumber: number): void {
    if (imageNumber === 1) {
      this.imageClicked1 = !this.imageClicked1;
    }
    if (imageNumber === 2) {
      this.imageClicked2 = !this.imageClicked2;
    }
    if (imageNumber === 3) {
      this.imageClicked3 = !this.imageClicked3;
    }
    if (imageNumber === 4) {
      this.imageClicked4 = !this.imageClicked4;
    }
    if (imageNumber === 5) {
      this.imageClicked5 = !this.imageClicked5;
    }
    if (imageNumber === 6) {
      this.imageClicked6 = !this.imageClicked6;
    }
    // Toggle other variables for other images
  }

  navigateToProduct(imageNumber: number): void {
    // Add navigation logic here for the clicked image
  }
}
