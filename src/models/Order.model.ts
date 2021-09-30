export class Order{
  id:number;
  title:string;
  qty:number;
  author:string;
  orderDate:string;
  price:number;
  imageUrl:string;
  name:string;
  contact:number;
  email:string;
  address:string;

  constructor(id: number = 1,
     imageUrl: string = "", 
     qty: number = 0, 
     title: string = "", 
     author: string = "", 
     orderDate: string,
     price:number = 0, 
     address: string="",
     name:string="",
     contact:number=0,
     email:string=""
     
     )
  {
    this.id=id;
    this.title=title;
    this.qty=qty;
    this.author=author;
    this.orderDate=orderDate;
    this.price=price;
    this.imageUrl=imageUrl;
    this.address=address;
    this.name=name;
    this.contact=contact;
    this.email=email;
   
  }
}