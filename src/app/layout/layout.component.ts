import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  activeUrl: string = '';
  menu: any[] = [];
  appName: string = '';
  isLoading: boolean = true;
  homePage: boolean = true;

  constructor() {
    debugger;
  }

  ngOnInit(): void {}
}
