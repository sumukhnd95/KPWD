import { Component, OnInit } from '@angular/core';
import {ImageData} from './data'

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  count : number = 0;
  isFirst: boolean= true; 
  isLast : boolean = false;
  srcImage;
  srcImages=ImageData;
  constructor() { }

  ngOnInit() {
    console.log("./assets/download1.jpg" )
    this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count]
    console.log(this.srcImages.imageData[this.count])
  }
  moveNext(){
    if(this.count<49){
      console.log(this.count)
      this.count ++;
      this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count]
      console.log(this.srcImage)
      this.isFirst = false;
    } else {
      this.isLast= true
    }
  }
  
  movePrevious(){
    if(this.count>0){
      console.log(this.count)
      this.count --;
      this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count] 
      this.isLast= false;  
    } else {
      this.isFirst = true;
    }
  }
  
}
