import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


  
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  isSidebarHidden:boolean = true;
  title:string = "Клиенты";

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 1000px)"]).subscribe((res) => {
      if (res.matches) {
        this.isSidebarHidden = true;
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.isSidebarHidden = false;
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }
}
