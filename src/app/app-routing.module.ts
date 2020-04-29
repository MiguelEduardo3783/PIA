import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:'inicio', pathMatch:'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./Pages/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./Pages/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./Pages/page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
