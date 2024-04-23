import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name='';
  @Input() x=1;
  @ViewChild('someVar') el:ElementRef;
  size='';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log();
    if(this.x>1){
      const tempsize= parseFloat((window.getComputedStyle(this.el.nativeElement,null).getPropertyValue('font-size')).replace('px',''));
      this.size=(tempsize*this.x).toFixed(2).toString()+"px";

    }else{
      this.size = window.getComputedStyle(this.el.nativeElement,null).getPropertyValue('font-size');

    }

  }

}
