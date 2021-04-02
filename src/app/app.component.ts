import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  template: "<my-employee></my-employee>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
