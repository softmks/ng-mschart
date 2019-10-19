import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkDashboardComponent } from './dark-dashboard/dark-dashboard.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { ModernDashboardComponent } from './modern-dashboard/modern-dashboard.component';
import { RealtimeDashboardComponent } from './realtime-dashboard/realtime-dashboard.component';



@NgModule({
  declarations: [DarkDashboardComponent, MaterialDashboardComponent, ModernDashboardComponent, RealtimeDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardsModuleModule { }
