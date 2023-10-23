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
  if(this.stringToValue != ''){
    const result = eval(this.stringToValue);
    if(isFinite(result)){
      this.stringToValue = result.toString();
         
  }else{
alert(' Invalid');
  }
}
}
clearValue(){
  this.stringToValue = "";
}
}



