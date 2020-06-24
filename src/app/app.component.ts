import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KPWD 2019';
  srcImage="./assets/download1.jpg" ;
  examDate : Date= new Date(2019, 3, 11)
  NumberOfDays : number = Date.now()
  
 diff =  Math.floor(( Date.now() -Date.parse("2019-03-11"))/86400000 ) 
  
  count : number = 1;
  isFirst: boolean= true; 
  IsLast : boolean = false;
  moveNext(){
    if(this.count<4){
      console.log(this.diff)
      this.count ++;
      this.srcImage="./assets/download"+this.count+".jpg"  
    } else {
      this.count = 1;
    }
  }
  
  movePrevious(){
    if(this.count>1){
      console.log(this.count)
      this.count --;
      this.srcImage="./assets/download"+this.count+".jpg"  
    } else {
      this.count = 1;
    }
  }
  
}
