import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Cat } from '../../../cats/cat.type'
import { CatService } from '../../cat.service'

@Component({
  selector: 'app-list-cat',
  standalone: true,
  imports: [],
  templateUrl: './list-cat.component.html',
  styleUrl: './list-cat.component.css',
})
export class ListCatComponent implements OnInit {
  catList: Cat[] = []
  displayedColumns = [
    'id',
    'name',
    'race',
    'couleurs',
    'année de naissance',
    'lieu de naissance',
  ]
  cat: Cat | undefined

  constructor(private catService: CatService, private router: Router) {}

  ngOnInit() {
    this.catService
      .getCatList()
      .subscribe((catList) => (this.catList = catList))
  }

  goToDetailCat(cat: Cat) {
    this.router.navigate([`/cats/${cat.id}`])
  }
}
