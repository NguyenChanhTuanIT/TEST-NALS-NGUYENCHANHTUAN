import { Component, OnInit } from "@angular/core";
import { BaseService } from "../../service/base";
import { QueryList } from "../../interface/parameters";
import { SORT } from "../../constraint/sort";
import { API } from "../../constraint/api";
import { HelperService } from "../../service/helper";
import { MediaInterface } from "../../interface/media";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  qparams: QueryList = {
    page: 1,
    limit: 10,
    search: "",
    sortBy: "id",
    order: SORT.ASC,
  };
  mediaList: MediaInterface[] = [];
  constructor(
    private baseService: BaseService,
    private helperServicec: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(qparam => {
      if (Object.keys(qparam).length) {
        this.qparams = {
          page: Number(qparam["page"]),
          limit: Number(qparam["limit"]),
          search: qparam["search"],
          sortBy: qparam["sortBy"],
          order: qparam["order"],
        };
      }

      this.getData(this.qparams);
    });
  }

  handleGetMediaItem = (event: MediaInterface) => {
    this.router.navigateByUrl(`blog/${event.id}`);
  };

  handleGetPage = (event: number) => {
    this.qparams.page = event;
    this.updateQuerySearch();
  };

  getData = (qparams: QueryList) => {
    const queryPath = this.helperServicec.objToQueryString(qparams);
    this.baseService.getData(`${API.LIST_BLOG}?${queryPath}`).subscribe(
      res => {
        this.mediaList = res.map((e: MediaInterface) => e);
      },
      err => {},
    );
  };

  updateQuerySearch() {
    this.router.navigate([], {
      queryParams: this.qparams,
    });
  }

  selectChangeSortBy(event: string) {
    this.qparams.sortBy = event;
  }
  selectChangeOrder(event: string) {
    this.qparams.order = event;
  }
}
