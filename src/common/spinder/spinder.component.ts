import { Component } from "@angular/core";
import { LoaderService } from "../../service/loader";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-spinder",
  templateUrl: "./spinder.component.html",
  styleUrl: "./spinder.component.scss",
})
export class SpinderComponent {
  constructor(public loaderService: LoaderService) {}
}
