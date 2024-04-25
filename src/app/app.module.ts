import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SpinderModule } from "../common/spinder/spinder.module";
import { LoadingInterceptor } from "../interceptor/loading.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
    }),
    HttpClientModule,
    SpinderModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
