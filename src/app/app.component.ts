import { Component } from '@angular/core';

interface Card {
  name: string;
  image: string;
  email?: string;
  phoneNumber?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business-card-app';
  cards: Card[] = []; 
  counter = 1;
  addCard(){
    this.cards.push({
      name:"Andrea",
      image:`../assets/img/business-card-${this.counter++}.JPG`
    });
  }

  editCard(){

  }
}
