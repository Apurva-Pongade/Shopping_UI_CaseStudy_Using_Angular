import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent {

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

}
