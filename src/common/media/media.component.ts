import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MediaInterface } from "../../interface/media";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrl: "./media.component.scss",
})
export class MediaComponent {
  @Input() data: MediaInterface = <MediaInterface>{};
  @Output() clickAction = new EventEmitter();

  handleClick() {
    this.clickAction.emit(this.data);
  }
}
