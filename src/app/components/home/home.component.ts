import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from '../../services/notification-service.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  subscribtion !: Subscription
  constructor(private _notification: NotificationServiceService) {
  }

  ngOnInit(): void {
    //subscribing on observable --- new way -------- map , filter are observable operators
    this.subscribtion = this._notification.getNotifications().pipe(
      map((msg)=> `${msg}`),
      filter((msg)=> msg.startsWith('Abobakr')),
    ).subscribe({
      next: (notification) => { console.log(notification) },
      error: (err) => { console.log(err) },
      complete: () => { console.log("notifications completed successfully") }
    })
  }

  //unsubscribe on changing the route or view ( going to another component)
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

//old way
// this._notification.getNotifications().subscribe(
//   (notification) => { console.log(notification) },
//   (error) => { console.log(`---${error}---`) })
