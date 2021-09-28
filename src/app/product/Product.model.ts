export class Product
{
  id:number;
  ISBN:string;
  title:string;
  description:string;
  qty:number;
  author:string;
  price:number;
  imageUrl:string;

  constructor(id:number=1,imageUrl:string="",qty:number=0,title:string="",description:string="",author:string="",isbn:string="",price:number=0)
  {
    this.id=id;
    this.title=title;
    this.qty=qty;
    this.author=author;
    this.description=description;
    this.price=price;
    this.imageUrl=imageUrl;
    this.ISBN=isbn;
  }

}
