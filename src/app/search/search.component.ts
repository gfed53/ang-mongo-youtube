import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchVideo(){
  	console.log('searchVideo from search component');
  }

  ngOnInit() {
  	console.log('search component on init');
  }

}
