import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: AdminComponent },
    { path: 'admin', component: AdminComponent },
	{ path: 'product', component: ProductComponent },
	
	// Error page
	{ path: '**', redirectTo: '/404' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }