import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  visible:boolean=false;
  From:string='';
  To:string='';
  Subject:string='';
  checked:boolean=false;
  Body:string='';
  constructor() { }

  ngOnInit(): void {
  }
  showDialog():void{
    this.visible=true;
  }
  onhide():void{
    this.visible=false;
    this.From='';
    this.To='';
    this.Subject='';
    this.checked=false;
    this.Body='';
  }
  logInputValue():void{
    console.log(this.From);
    console.log(this.To);
    console.log(this.Subject);
    console.log(this.checked);
    console.log(this.Body);
    this.onhide();
  }


  clear():void{
    
  }
}
