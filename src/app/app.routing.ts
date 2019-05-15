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

export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'my/orders', component: MyOrdersComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
];
