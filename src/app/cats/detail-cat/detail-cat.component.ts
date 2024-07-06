import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Cat } from '../../../cats/cat.type'
import { CatService } from '../../cat.service'

@Component({
  selector: 'app-detail-cat',
  standalone: true,
  imports: [],
  templateUrl: './detail-cat.component.html',
  styleUrl: './detail-cat.component.css',
})
export class DetailCatComponent implements OnInit {
  cat: Cat | undefined

  constructor(
    private catService: CatService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const catId = this.route.snapshot.paramMap.get('id')

    if (catId) {
      this.catService.getCatById(+catId).subscribe((cat) => (this.cat = cat))
    }
  }

  deleteCat() {}
}
