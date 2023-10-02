import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {

  monSubject : BehaviorSubject<string> = new BehaviorSubject<string>("Patoche")




  /**
   *
   */
  constructor(private _httpClient : HttpClient) {
    // this.monSubject.subscribe({
    //   next : (text : string) => {
    //     console.log('bonjour ' + text);

    //   },
    //   error : (text : string) => {
    //     console.error(text + ' CPT');
    //   },
    //   complete : () => {
    //     console.warn('complete')
    //   }
    // })

    this._httpClient.get<pokemon>('https://pokeapi.co/api/v2/pokemon/ditto').subscribe({
      next : (value : pokemon) => {
        console.log(value.name);
      },
      error : (error : HttpErrorResponse) => {
          console.log(error.status);
      }
    })

  }


  execute(){
    this.monSubject.next("Ginette")
  }

  executeWithError(){
    this.monSubject.error("Ginette")
  }

  executeWithComplete(){
    this.monSubject.complete()
  }

}


export interface pokemon{
  id : number
  name : string
  weight : number
  height : number
}
