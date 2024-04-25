import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseService } from "../../../service/base";
import { API } from "../../../constraint/api";
import { MediaInterface } from "../../../interface/media";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrl: "./blog-detail.component.scss",
})
export class BlogDetailComponent implements OnInit {
  blogId: string | null = null;
  data: MediaInterface = <MediaInterface>{};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private baseService: BaseService,
  ) {}

  ngOnInit() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get("blog_id");
    if (this.blogId) {
      this.getData();
    }
  }

  getData = () => {
    this.baseService.getData(`${API.LIST_BLOG}/${this.blogId}`).subscribe(
      res => {
        this.data = res;
      },
      err => {},
    );
  };

  handleBack() {
    this.router.navigateByUrl("/");
  }
}
