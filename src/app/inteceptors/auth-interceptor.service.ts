import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  let ModifiedReq = req
  if (req.method == "post") {
    ModifiedReq = req.clone({
      headers: req.headers.append("language", "EN")
    })
  }

  return next(ModifiedReq).pipe(
    tap((event)=>{
      if(event.type==HttpEventType.Response){
        console.log(event);
        if (event.status == 200) {

        }
        else if (event.status == 500){

        }
      }
    })
  )
}
