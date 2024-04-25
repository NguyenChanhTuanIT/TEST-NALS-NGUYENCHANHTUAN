import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-panigation",
  templateUrl: "./panigation.component.html",
  styleUrl: "./panigation.component.scss",
})
export class PanigationComponent {
  @Output() clickAction = new EventEmitter();
  @Input() page: number = 1;

  pages: number[] = [1, 2, 3];

  handlePage = (page: number) => {
    this.clickAction.emit(page);
  };

  nextPage = () => {
    ++this.page;
    this.handlePage(this.page);
  };

  prevPage = () => {
    --this.page;
    if (this.page <= 0) {
      this.page = 1;
    }
    this.handlePage(this.page);
  };
}
