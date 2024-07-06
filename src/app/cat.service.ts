import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { Cat } from '../cats/cat.type'

@Injectable({
  providedIn: 'root',
})
export class CatService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCatList(): Observable<Cat[]> {
    return this.http
      .get<Cat[]>('api/cats')
      .pipe(tap((catList) => console.table(catList)))
  }

  getCatById(catId: number): Observable<Cat> {
    return this.http
      .get<Cat>(`api/cats/${catId}`)
      .pipe(tap((cat) => console.log(cat)))
  }

  addCat() {}

  updateCat() {}

  deleteCatById() {}
}
