import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeApp } from '../models/liste.model';
import { ListeService } from '../services/liste.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  elements! : ListeApp[] | any ;

  constructor(private listeService : ListeService , private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = this.route.snapshot.params['id']
    this.elements = this.listeService.getlisteById(+id)
  }

}






