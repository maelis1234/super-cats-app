import { Routes } from '@angular/router'
import { DetailCatComponent } from './cats/detail-cat/detail-cat.component'
import { ListCatComponent } from './cats/list-cat/list-cat.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
  },
  {
    path: 'cats',
    component: ListCatComponent,
  },
  { path: 'cats/:id', component: DetailCatComponent },
]
