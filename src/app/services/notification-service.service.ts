import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  notificatios: string[]
  constructor() {
    this.notificatios = [
      "you have unread messages",
      "people are reacting to your post",
      "Abobakr Sent you a friend request",
      // "",
      "your post shared successfully"
    ]
  }

  //  observer.complete() --- no new updates
  //  observer.error()    --- some error happened
  //  observer.next()     --- sending updates

  //creating observable
  getNotifications(): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0
      let notificationInterval = setInterval(() => {
        if (counter == this.notificatios.length) {
          observer.complete()
        }

        if (this.notificatios[counter] == "") {
          observer.error("that notification is empty")
        }

        observer.next(this.notificatios[counter])
        counter++
      }, 2000);

      return {
        unsubscribe: () => {
          clearInterval(notificationInterval)
        }
      }
    });
  }
}
