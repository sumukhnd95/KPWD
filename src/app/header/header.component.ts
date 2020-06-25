import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  examDate : Date= new Date(2019, 3, 11)
  NumberOfDays : number = Date.now()
  days
  hours
  constructor() { 
    let diff =  Math.floor(( Date.now() -Date.parse("2019-03-11"))/3600000) 
 
 this.days  = Math.floor(diff/24)
 this.hours = Math.floor(diff/(this.days *24) ) +10
  }

  ngOnInit() {
   // alert(Date.parse("2019-03-11"))
   // alert(this.diff)
   // alert(this.days)
   // alert(this.hours)
  }

}
