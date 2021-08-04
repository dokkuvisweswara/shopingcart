import { Component, OnInit } from '@angular/core';
import products from '../files/products.json';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit {
  

  // public productsList:{Brand_name:string, Product_name:string, Quantity:number, Price:number, MRF:number, Image_URL:string, Offer_Text:string, Message:string }[] = products;
  public init_product:[] = products;
  public load_json = false;
  public productsList:any=[];
  public added_products:[] = [];
  // public disableAddcart:boolean = false;
  public addToCart:any=[];
  public price: number=0;
  public qty: number=0;
  public sum:any=0;
  public messages:string="";
  popup = false;
  constructor() { }

  ngOnInit(): void {
  // console.log(this.init_product);
    this.init_product.map((e:any)=>{
      e.cart = 0;
      console.log(e);
      this.productsList.push(e);
    })
    
    
     console.log(this.productsList);
    this.load_json = true;
    
  }

  addProduct(e:any){
    e.cart = e.cart+1;
    //  console.log(e);
    //  this.disableAddcart = false;
    // console.log(this.disableAddcart);
    
  }
  showPopup(){
    this.popup = true;

  }
  closePopup(){
    this.popup = false;
  }
  removeProduct(e:any){
    e.cart = e.cart-1;
    console.log(e);
  }

  AddToCart(e:any){
    e.message = "Added Successfully";
    if(e.cart<=0){
      alert('plese seelct items click(+)button');
    
  }else{
    this.qty = e.cart;
    this.price += e.Price * e.cart;
    this.addToCart.push(e.cart);
 this.sum = this.addToCart.reduce((acc:any, cur:any) => acc + cur, 0);
    console.log(this.addToCart);
    alert(e.message);
  } 
  }
}
