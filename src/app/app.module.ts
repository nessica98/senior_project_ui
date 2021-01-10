import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GoogleMapsModule } from '@angular/google-maps'

//import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { NodelistComponent } from './nodelist/nodelist.component';
import { VisualizePageComponent } from './visualize-page/visualize-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogbookPageComponent } from './logbook-page/logbook-page.component';
import { LoginLoggingSystemComponent } from './login-logging-system/login-logging-system.component';
import { VisualizeModalComponent } from './visualize-modal/visualize-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { VisualizePageNewComponent } from './visualize-page-new/visualize-page-new.component';
import { VisualizeEachNodeComponent } from './nodes/visualize-each-node/visualize-each-node.component';
import { VisualizeEachFullComponent } from './visualize-each-full/visualize-each-full.component';
import { VisualizePageEachnodeComponent } from './visualize-page-eachnode/visualize-page-eachnode.component';



@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    NodelistComponent,
    VisualizePageComponent,
    HomepageComponent,
    LogbookPageComponent,
    LoginLoggingSystemComponent,
    VisualizeModalComponent,
    DashboardComponent,
    VisualizePageNewComponent,
    VisualizeEachNodeComponent,
    VisualizeEachFullComponent,
    VisualizePageEachnodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
