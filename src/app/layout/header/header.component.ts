import { Component, Input, OnInit } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { cilMenu } from '@coreui/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  @Input() appUrl: string = '';
  
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  
  icons: any = {};

  constructor(private classToggler: ClassToggleService) {
    super();
    this.icons = {
      menu: cilMenu
    }
  }

  ngOnInit(): void {
      
  }
}
