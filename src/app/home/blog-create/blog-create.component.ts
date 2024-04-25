import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidateService } from "../../../service/validate";
import { BaseService } from "../../../service/base";
import { API } from "../../../constraint/api";
import { ActivatedRoute, Router } from "@angular/router";
import { HelperService } from "../../../service/helper";

@Component({
  selector: "app-blog-create",
  templateUrl: "./blog-create.component.html",
  styleUrl: "./blog-create.component.scss",
})
export class BlogCreateComponent implements OnInit {
  formData: FormGroup = new FormGroup({});
  blogId: string | null = null;
  formErrors = {
    title: "",
    content: "",
    image: "",
  };
  validationMessages = {
    title: {
      required: "required",
    },
    content: {
      required: "required",
    },
    image: {
      required: "required",
    },
  };
  constructor(
    private fbd: FormBuilder,
    private validateService: ValidateService,
    private baseService: BaseService,
    private router: Router,
    private helperService: HelperService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get("blog_id");
    console.log(this.blogId);
    this.initForm();
    if (this.blogId) {
      this.getData();
    }
  }

  initForm() {
    this.formData = this.fbd.group({
      title: ["", [Validators.required]],
      content: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
    this.formData.valueChanges.subscribe((data: object) => {
      this.formErrors = this.validateService.getValidate(
        this.formData,
        this.formErrors,
        this.validationMessages,
      );
    });
  }

  getData = () => {
    this.baseService.getData(`${API.LIST_BLOG}/${this.blogId}`).subscribe(
      res => {
        this.formData.patchValue(res);
      },
      err => {},
    );
  };

  handleCreate = () => {
    if (this.formData.invalid) {
      this.formErrors = this.validateService.checkErorrNotDiry(
        this.formData,
        this.formErrors,
        this.validationMessages,
      );
      return;
    }
    if (this.formData.valid) {
      this.baseService.postData(API.LIST_BLOG, this.formData.value).subscribe(
        res => {
          alert("success");
        },
        err => {
          alert("errr");
        },
      );
    }
  };

  handleUpdate = () => {
    if (this.formData.invalid) {
      this.formErrors = this.validateService.checkErorrNotDiry(
        this.formData,
        this.formErrors,
        this.validationMessages,
      );
      return;
    }
    if (this.formData.valid) {
      this.baseService
        .putData(`${API.LIST_BLOG}/${this.blogId}`, {
          ...this.formData.value,
          id: this.blogId,
        })
        .subscribe(
          res => {
            alert("success");
          },
          err => {
            alert("errr");
          },
        );
    }
  };

  handleGetFile = async (event: any) => {
    if (!event.target.files.length) {
      return;
    }
    const base64 = await this.helperService.getBase64(event.target.files[0]);
    this.formData.patchValue({
      image: base64,
    });
  };
}
