import { Component } from "@angular/core";
import { Color, Hero } from "src/app/interfaces/hero.interfaces";

@Component({
  selector: "products-order",
  templateUrl: "./order.component.html",
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | "" = "";

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue,
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.blue,
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red,
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.green,
    },
    {
      name: "Linterna Verde",
      canFly: true,
      color: Color.green,
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
    console.log(this.isUpperCase);
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
