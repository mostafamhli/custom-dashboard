import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { DashboardService } from 'src/app/modules/dashboard.service';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
