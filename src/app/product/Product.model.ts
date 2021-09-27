export class Product
{
  ISBN:string;
  title:string;
  qty:number;
  author:string;
  price:number;
  imageUrl:string;

  constructor(imageUrl:string="",qty:number=0,title:string="",author:string="",isbn:string="",price:number=0)
  {
    this.title=title;
    this.qty=qty;
    this.author=author;
    this.price=price;
    this.imageUrl=imageUrl;
    this.ISBN=isbn;
  }

}
