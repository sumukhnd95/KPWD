import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  examDate : Date= new Date(2019, 3, 11)
  NumberOfDays : number = Date.now()
  
 diff =  Math.floor(( Date.now() -Date.parse("2019-03-11"))/3600000) 
 
 days  = Math.floor(this.diff/24)
 hours = Math.floor(this.diff/(this.days *24) ) +10
  constructor() { }

  ngOnInit() {
   // alert(Date.parse("2019-03-11"))
   // alert(this.diff)
   // alert(this.days)
   // alert(this.hours)
  }

}
