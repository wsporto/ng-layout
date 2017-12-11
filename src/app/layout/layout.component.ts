import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import SimpleBar from 'SimpleBar';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('scrolling') scroll1: ElementRef;
  @ViewChild('scrolling2') scroll2: ElementRef;
  

  ngAfterViewInit(): void {
    new SimpleBar(this.scroll1.nativeElement);
    new SimpleBar(this.scroll2.nativeElement);
  }

}
