import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productdetail : any;
  public getProductDetail(products:any){
    console.log(products)
    this.productdetail =products;
  }
  public products= [
    {
    id: 1,
    name: 'product 1',
    price: '100',
    description:'this is a wider range card',
    url:'assets/images/home/placeimg_640_480_any.jpg',
    },
    {
    id: 2,
    name: 'product 2',
    price: '100',
    description:'this is a wider range card',
     url:'assets/images/home/placeimg_640_480_any.jpg',
    },
    {
    id: 3,
    name: 'product 3',
    price: '100',
    description:'this is a wider range card',
     url:'assets/images/home/placeimg_640_480_any.jpg',

    },
    {
    id: 4,
    name: 'product 4',
    price: '100',
    description:'this is a wider range card',
    url:'assets/images/home/placeimg_640_480_any.jpg',
    }
    ]

}
