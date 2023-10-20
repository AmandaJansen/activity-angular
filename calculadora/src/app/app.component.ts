import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringToValue: string = "";
  takeInput(num:string){
    this.stringToValue = this.stringToValue + num;
    //console.log(this.stringToValue);
  }
resultOperation(){
  this.stringToValue = eval(this.stringToValue);
  //console.log(this.stringToValue);
}
clearValue(){
  this.stringToValue = "";
}
}



