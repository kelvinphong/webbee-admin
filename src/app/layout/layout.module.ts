import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@coreui/angular';
import { FooterComponent } from './footer/footer.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HeaderModule } from './header/header.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
    imports: [
        SharedModule,
        SidebarModule,
        HeaderModule,
        PerfectScrollbarModule,
        IconModule,
        RouterModule.forChild([
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: '',
                component: LayoutComponent,
                data: {
                    title: ''
                }
            }
        ])
    ],
    declarations: [
        LayoutComponent,
        FooterComponent
    ],
    providers: [ IconSetService ]
})
export class LayoutModule {
}
