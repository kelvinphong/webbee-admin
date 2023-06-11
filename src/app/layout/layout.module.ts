import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
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
    ]
})
export class LayoutModule {
}
