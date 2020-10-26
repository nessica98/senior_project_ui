import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DashboardComponent
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
