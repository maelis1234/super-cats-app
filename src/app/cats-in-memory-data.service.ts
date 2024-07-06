import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { CATS } from '../cats/mock-cat-list'

@Injectable({
  providedIn: 'root',
})
export class CatsInMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = CATS

    return { cats }
  }
}
