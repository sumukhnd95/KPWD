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
  isLast : boolean = true;
  srcImage;
  srcImages=ImageData;
  isVideo : boolean ;
  //teststring : string = "ಸುಮಾರು ಒಂದು ವರ್ಷದಿಂದ ಲೋಕೋಪಯೋಗಿ"
  constructor() { }

  ngOnInit() {
    this.checkForVideo();
    this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count]
    console.log(this.srcImages.imageData[this.count])
  }


  moveNext(){
    this.count ++;
    this.checkForVideo();
    //console.log(this.srcImages.imageData.length)
    if(this.count<this.srcImages.imageData.length){
      
      this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count]
      //console.log(this.srcImage)
      this.isFirst = false;
    } else {
      this.isLast= true; 
    //  this.count = 0
    }
  }
  
  movePrevious(){
    this.count --;

    this.checkForVideo();
    
    if(this.count>-1){
     // console.log(this.count)
      
      this.srcImage="./assets/Jfps/"+this.srcImages.imageData[this.count] 
      this.isLast= false;  
    } else {
      this.isFirst = true;
     // this.count= this.srcImages.imageData.length-1
      
    }
  }

  checkForVideo(){
    if(this.count<0){
    this.count = this.srcImages.imageData.length-1
    } else if (this.count>=this.srcImages.imageData.length){
    this.count = 0;
    }
    if(this.srcImages.imageData[this.count].includes('.mp4')){
      this.isVideo= true;
    } else {
      this.isVideo= false;
    }
  }
  
}
