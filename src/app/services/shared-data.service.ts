import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  public description: string ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatum! Modi accusantium, quasi aliquam, tempore reprehenderit voluptas error adipisci, consectetur unde beatae minima. Sunt nulla sint veniam officiis. Hic, eum.' ;
  public title : string='Gold Big Hoops';
  public price: number = 199;
  public img = 'assets/img1.png';

  public description1: string ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatum! Modi accusantium, quasi aliquam, tempore reprehenderit voluptas error adipisci, consectetur unde beatae minima. Sunt nulla sint veniam officiis. Hic, eum.' ;
  public title1 : string='Lira Earings';
  public price1: number = 99;
  public img1 = 'assets/shop-img1.png';
  

  constructor() { }
 
}
