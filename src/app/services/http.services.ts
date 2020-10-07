import { Injectable, PLATFORM_ID, Inject, APP_ID, Injector } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Location, isPlatformServer } from '@angular/common';
import { map, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class HttpClient {
    
    BASE_URL = 'https://localhost:44329/api/'


	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		@Inject(APP_ID) private appId: string,
		private injector: Injector,
		private http: Http,
		) {
		this.http = http;
		
	}

	

	createAuthorizationHeader(headers: Headers) {
		headers.append('X-Api-Key', '');
	}


	get(url, headers?: Headers) {


		let query;
		
		return this.http.get(url, { headers: headers });
	}


	post(url, data, xauth = false) {
		let headers;
		headers = new Headers();
		

		return this.http.post(url, data, { headers: headers });
		

	}

	put(url, data) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.put(url, data, {
			headers: headers
		});
	}

	delete(url) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.delete(url, {
			headers: headers
		});
    }
    

    getHomePage(){
        return this.get(this.BASE_URL+ 'home').pipe(map(resp =>  resp.json()));
    }

    getDocumentsPage(){
        return this.get(this.BASE_URL+ 'documents').pipe(map(resp =>  resp.json()));
    }

    getContactsPage(){
        return this.get(this.BASE_URL+ 'contacts').pipe(map(resp =>  resp.json()));
    }
    

    postFile(filePath, eventDate,readme){

        let body = {
            EventDate: eventDate,
        	ObjectPath: filePath ? filePath : '',
        	Filename:"",
        	ContentType: ""

            
        }
        console.log(filePath)
        let formData = new FormData();
        formData.append('file', filePath)
        formData.append('EventDate',eventDate)
        formData.append('Readme',readme)
        return this.post(this.BASE_URL+ 'upload', formData).pipe(map(resp =>  resp.json()));
    }

    getDownloadFile(eventDate, fileName, contentType,docid){
        //let queryString ="?EventDate=" + eventDate + "&Filename=" + fileName + "&ContentType=" + contentType;
        let queryString ="?id=" + docid;
        // let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
        // let headers;
        // headers = new Headers();
        // headers.append("responseType", "blob")
        window.open(this.BASE_URL+ 'download' + queryString)
        // return this.get(this.BASE_URL+ 'download' + queryString, headers)
    }


    postEmail(emailArray,emailBody, emailSubject="text blast"){

        let body = {
            EmailAddress: emailArray, //["list","of","string"],
            EmailBody: emailBody,
            EmailSubject: emailSubject


        }
        return this.post(this.BASE_URL+ 'messages/email', body).pipe(map(resp =>  resp.json()));
    }

    postMessage(contactArray = [],emailBody, emailSubject="Message blast"){

        let body = {
            MessageElements: contactArray,
        	Message: emailBody,
        	Subject: emailSubject



        }
        return this.post(this.BASE_URL+ 'messages', body).pipe(map(resp =>  resp.json()));
    }

}
