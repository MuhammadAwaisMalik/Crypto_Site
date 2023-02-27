import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real';
  hide : string = "";
  addItem(newItem: string) {
    this.hide = newItem;
    
  }
  call(){
    if(this.hide === "dark"){
      return {'dark':true}
    }
    else{
      return {'light':true}
    }
  }
}
