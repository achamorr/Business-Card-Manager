import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business-card-app';
  cards: any = []; //for now, any type goes
  addCard(){
    this.cards.push({
      name:"Andrea"
    });
  }
}
