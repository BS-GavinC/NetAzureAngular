import { Component, WritableSignal } from '@angular/core';
import { FakeAuthExos5Service } from 'src/app/exos/exos5/fake-auth-exos5.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {



  
  //partie liée a la demos exos 5 fake auth
  isConnect : WritableSignal<boolean>

  constructor(private exis5FakeAuth : FakeAuthExos5Service){
    this.isConnect = this.exis5FakeAuth.isConnect;
  }
}
