import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DefaultHeaderComponent } from "./header.component";
import {
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    DropdownModule,
    HeaderModule as DefaultHerderModule,
    GridModule,
    NavModule,
    SidebarModule
} from "@coreui/angular";
import { IconModule, IconSetService } from "@coreui/icons-angular";

@NgModule({
    imports: [
        SharedModule,
        NavModule,
        SidebarModule,
        DropdownModule,
        BadgeModule,
        GridModule,
        DefaultHerderModule,
        AvatarModule,
        BreadcrumbModule,
        IconModule
    ],
    declarations: [ DefaultHeaderComponent ],
    exports: [DefaultHeaderComponent],
    providers: [IconSetService ]
})
export class HeaderModule {
}