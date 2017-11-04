import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	constructor(private _http: Http){}

	//Will use backend to make API requests
	getVideos(q){
		console.log('q',q);

	}

}


