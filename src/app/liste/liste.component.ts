import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
tableliste! : any[] ;
page = 1;
pageSize = 5;
collectionSize!:number;


constructor(private listeService : ListeService  ) {}

  ngOnInit(): void {
    this.refreshMateriels();

  }


  refreshMateriels() {
    this.tableliste = this.listeService.getAllListe();
    this.collectionSize = this.tableliste!.length
		this.tableliste = this.tableliste.map((materiel, i) => ({ id: i + 1, ...materiel })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
