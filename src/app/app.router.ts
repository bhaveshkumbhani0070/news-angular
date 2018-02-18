import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponentComponent
    },
    {
      path: 'content',
      component: ContentComponentComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);