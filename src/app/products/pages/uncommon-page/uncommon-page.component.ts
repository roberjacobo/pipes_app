import { Component } from "@angular/core";
import { Observable, interval, tap } from "rxjs";

@Component({
  selector: "app-uncommon-page",
  templateUrl: "./uncommon-page.component.html",
  styleUrls: ["./uncommon-page.component.css"],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: String = "Roberto";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  };

  changeClient(): void {
    this.name = "Melissa";
    this.gender = "female";
  }

  // i18Plural
  public clients: string[] = [
    "María",
    "Pedro",
    "Fernando",
    "Eduardo",
    "Melissa",
    "Natalia",
    "Roberto",
    "Daniela",
  ];
  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos dos clientes esperando",
    other: "tenemos # clientes esperando",
  };

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: "Roberto",
    age: 30,
    address: "Ottawa, Canada",
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log("tap: ", value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa.");
      console.log("Tenemos data en la promesa.");
    }, 3500);
  });
}
