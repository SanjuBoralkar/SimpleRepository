import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title | uppercase }}
  </h1><br>
  <h2>
  {{ title2}} {{ title2.length }}
  </h2>
  Name:<input type="text" class="c">
  <button type="submit" (click)="ClickMe()">ClickMe</button>
</div>
Message: {{message}}
<app-assignment1  (messageEvent)="receiveMessage($event)"><app-assignment1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvolous infosystem';
  title2='educating for batter tomorrow';
  message:string;

  receiveMessage($event) {
    this.message = $event
  }
  public check:boolean=false;

  ClickMe()
  {
    this.title="button click";
  
  
  if(this.check=true){
    this.title="sanjay";
    this.title="tittle2 change";
  }
  else(this.check=false)
  {
    this.title="same text";
    this.title="title changing";
  }
}
}
