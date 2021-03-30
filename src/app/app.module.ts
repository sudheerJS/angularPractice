import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeCountComponent } from "./employeecount/employeecount.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    EmployeeCountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
