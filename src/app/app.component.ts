import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Subscription, map, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sample';
  data: any;
  date = new Date();
  subscriptions: Subscription[] = [];
  constructor(private appService: AppServiceService) {

  }
  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe())
    }
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.appService.getData().
      subscribe((data: any) => {
        console.log(data);
        alert(data)
        this.data = data;
      }, (err: any) => { })

    )


  }



}
