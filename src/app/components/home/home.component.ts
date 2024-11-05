import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from '../../services/notification-service.service';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decreaseCounter, increaseCounter } from '../../store/counter/counter.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  counter: Observable<number>
  // count!: number

  constructor(private store: Store<{ counter: number }>) {
    this.counter = this.store.select("counter")

    // this.counter.subscribe((newVal) => {
    //   this.count = newVal
    // })
  }

  increaseCounterVal(){
    this.store.dispatch(increaseCounter())
  }

  decreaseCounterVal(){
    this.store.dispatch(decreaseCounter())
  }
}

  // subscribtion !: Subscription
  // constructor(private _notification: NotificationServiceService) {
  // }

  // ngOnInit(): void {
    //subscribing on observable --- new way -------- map , filter are observable operators
    // this.subscribtion = this._notification.getNotifications().pipe(
    //   map((msg)=> `${msg}`),
    //   filter((msg)=> msg.startsWith('Abobakr')),
    // ).subscribe({
    //   next: (notification) => { console.log(notification) },
    //   error: (err) => { console.log(err) },
    //   complete: () => { console.log("notifications completed successfully") }
    // })
  // }

  //unsubscribe on changing the route or view ( going to another component)
  // ngOnDestroy(): void {
  //   this.subscribtion.unsubscribe();
  // }
// }

//old way
// this._notification.getNotifications().subscribe(
//   (notification) => { console.log(notification) },
//   (error) => { console.log(`---${error}---`) })
