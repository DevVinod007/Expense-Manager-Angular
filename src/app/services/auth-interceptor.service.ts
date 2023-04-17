import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.append('Content-Type', 'application/json');
    const newReq = req.clone({ headers });
    console.log(newReq);
    return next.handle(newReq);
    // Handle the request
    // return next.handle(newReq).pipe(
    //   retry(3), // Retry up to 3 times
    //   catchError((error: HttpErrorResponse) => {
    //     if (error.error instanceof ErrorEvent) {
    //       console.error("A client side error occurs. The error message is " + error.message);
    //     } else {
    //       console.error(
    //         "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    //     }

    //     return throwError("Error occurred. Pleas try again");
    //   })
    // );
  }
}
