import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductsComponent} from './pages/products/products.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './pages/check-out/check-out.component';
import {OrderSuccessComponent} from './pages/order-success/order-success.component';
import {LoginComponent} from './pages/login/login.component';
import {AdminProductsComponent} from './pages/admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './pages/admin/admin-orders/admin-orders.component';
import {MyOrdersComponent} from './pages/my-orders/my-orders.component';
import {AuthGuardService} from './services/auth-guard.service';

export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
];
