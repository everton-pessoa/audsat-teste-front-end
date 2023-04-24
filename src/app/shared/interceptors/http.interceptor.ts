import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS
  } from "@angular/common/http";
  import { Injectable, NgModule } from "@angular/core";
  import { Observable } from "rxjs";
  import { finalize } from "rxjs/operators";
import { LoadingService } from "../services/loading.service";
  
  
  @Injectable({
    providedIn: "root"
  })
  export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
      public loadingService: LoadingService,
    ) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      this.loadingService.isLoadingProgress.next(true);
  
      return next.handle(req).pipe(
        finalize(() => {
          this.loadingService.isLoadingProgress.next(false);
          
        })
      );
    }
  }
  
  @NgModule({
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true
      }
    ]
  })
  export class InterceptorModule {}
  