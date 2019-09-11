import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class InsertAuthTokenInterceptor implements HttpInterceptor {

  constructor(private adal: MsAdalAngular6Service) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if the endpoint is not registered then pass
    // the request as it is to the next handler
    const resource = this.adal.GetResourceForEndpoint(request.url);
    if (!resource) {
      return next.handle(request);
    }

    // if the user is not authenticated then drop the request
    if (!this.adal.userInfo.profile) {
      throw new Error('Cannot send request to registered endpoint if the user is not authenticated.');
    }

    // if the endpoint is registered then acquire and inject token
    return this.adal.acquireToken(request.url)
      .pipe(mergeMap((token: string) => {
          // clone the request and replace the original headers with
          // cloned headers, updated with the authorization
          const authorizedRequest = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token),
          });

          return next.handle(authorizedRequest);
        })
      );
  }
}

