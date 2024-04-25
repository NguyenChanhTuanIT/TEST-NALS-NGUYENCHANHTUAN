import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpinderComponent } from "./spinder.component";

describe("SpinderComponent", () => {
  let component: SpinderComponent;
  let fixture: ComponentFixture<SpinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
