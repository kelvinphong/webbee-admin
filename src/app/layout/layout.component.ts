import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { navItems } from './admin/_nav';
import { AppConfigService } from '../shared/services/app-config.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LayoutComponent implements OnInit {

  activeUrl: string = '';
  menu: any[] = [];
  appName: string = '';
  isLoading: boolean = true;
  homePage: boolean = true;
  appUrl: string = '';
  brandFull: any = {};
  brandNarrow: any = {};

  public navItems: any[];
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private appConfig: AppConfigService) {
    this.navItems = navItems;
    this.appUrl = appConfig.config.appUrl;
  }

  ngOnInit(): void {
    this.brandFull = {
      src: `${this.appUrl}/assets/img/brand/coreui-angular.svg`,
      width: 200,
      height: 46,
      alt: 'CoreUI Logo'
    };

    this.brandNarrow = {
      src: `${this.appUrl}/assets/img/brand/coreui-signet-white.svg`,
      width: 46,
      height: 46,
      alt: 'CoreUI Logo'
    }
  }
}
