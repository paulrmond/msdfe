import { Component, OnInit } from '@angular/core';

import { HttpClient} from '../../services/http.services'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  homeList = []
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.getHomePage().subscribe( (data:any) =>{
      console.log(data)

      this.homeList = Object.assign(data)

    },error=> console.log(error))


    
  }

}
