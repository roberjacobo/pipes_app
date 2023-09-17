import { Component } from "@angular/core";

@Component({
  selector: "app-basics-page",
  templateUrl: "./basics-page.component.html",
  styleUrls: ["./basics-page.component.css"],
})
export class BasicsPageComponent {
  public nameUpper: string = "roberto";
  public nameLower: string = "ROBERTO";
  public fullName: string = "RoBertO JACObo";

  public customDate: Date = new Date();
}
