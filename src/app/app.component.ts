import { Component, OnInit } from '@angular/core';
import { ListeService } from './services/liste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'dashboard';
 
}
