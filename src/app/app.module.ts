import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { MatButtonModule } from '@angular/material/button';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { HomeComponent } from './Home/view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiActionModule } from '@taiga-ui/kit';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiArcChartModule } from '@taiga-ui/addon-charts';
import { TuiPieChartModule } from '@taiga-ui/addon-charts';
import { TuiBarChartModule } from '@taiga-ui/addon-charts';
import { DashboardComponent } from "./Home/Contents/Dashboard/dashboard.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from "./Loader/interceptor.service";
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';
import { workerComponent } from "./Home/Contents/Worker/worker.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { WorkerInfoComponent } from "./WorkerInfo/view.component";
import { PersonalDetailsComponent } from "./WorkerInfo/PersonalDetails/personal-details.component";
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiLabelModule } from '@taiga-ui/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    DashboardComponent,
    workerComponent,
    WorkerInfoComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiSvgModule,
    TuiActionModule,
    TuiIslandModule,
    TuiLineChartModule,
    TuiArcChartModule,
    TuiPieChartModule,
    TuiBarChartModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    TuiInputModule,
    TuiLabelModule
],schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer,multi : true},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi : true},
    DatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }