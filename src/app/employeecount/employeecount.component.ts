import { Component } from "@angular/core";

@Component({
  selector: "employee-count",
  templateUrl: "./employeecount.component.html",
  styleUrls: ["./employeecount.component.css"]
})
export class EmployeeCountComponent {
  all: number = 10;
  male: number = 5;
  female: number = 5;
}
