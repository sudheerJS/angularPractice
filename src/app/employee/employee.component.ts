import { Component } from "@angular/core";

@Component({
  selector: "my-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent {
  employees: any[] = [
    { code: "code1", name: "sudheer", gender: "male", dob: "10/08/1983" },
    { code: "code2", name: "Buddoda", gender: "female", dob: "10/10/1987" }
  ];
}
