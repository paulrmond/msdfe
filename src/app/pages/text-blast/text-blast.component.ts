import { Component, OnInit } from '@angular/core';
import { HttpClient} from '../../services/http.services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-text-blast',
  templateUrl: './text-blast.component.html',
  styleUrls: ['./text-blast.component.scss']
})
export class TextBlastComponent implements OnInit {
  contactList;
  canSendMessage;
  emailAddressArray= []
  constructor(
    private http : HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.http.getContactsPage().subscribe( (data:any) =>{
      this.contactList = data;

    },error=> console.log(error))

  }
   postBody = []

  checkValue(event, type, contact){
    if(contact && contact.email && event.target.checked){
      this.emailAddressArray.push(contact.email)
      this.postBody.push(
        {
          id : contact.user_id,
          sms:"0",
          email:"0",
          viber:"0",
          fb:"0"

        }
      )
      let selectedIndex = this.postBody.findIndex(data => data.id === contact.user_id);
          if(type == 'email'){
            if(this.postBody.length > 0){
              if(selectedIndex >= 0){
                this.postBody[selectedIndex].email = 1;
              }
            }
          }
          else if(type == 'sms'){
            if(this.postBody.length > 0){
              if(selectedIndex >= 0){
                this.postBody[selectedIndex].sms = 1;
              }
            }
          }
    }
    else if(!event.target.checked){
        if(this.postBody.findIndex(data => data.id === contact.user_id) >= 0){
          let spliceIndex = this.postBody.findIndex(data => data.id === contact.user_id);
          let selectedIndex = this.postBody.findIndex(data => data.id === contact.user_id);

          if(type == 'email'){
            if(this.postBody.length > 0){
              if(selectedIndex >= 0){
                this.postBody[selectedIndex].email = 0;
              }
            }
          }
          else if(type == 'sms'){
            if(this.postBody.length > 0){
              if(selectedIndex >= 0){
                this.postBody[selectedIndex].sms = 0;
              }
            }
          }
          if(this.postBody[selectedIndex].sms == 0 && this.postBody[selectedIndex].email == 0){
            this.postBody.splice(spliceIndex, 1)
          }
        }
    }

  }

  openMediumModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent );
  }
  
  getMessage(){
    let messageDom = document.getElementById('textblast')
    return messageDom['value'];
  }

  postMessage(mediumModalContent){
    
    if (isEmptyObject(this.getMessage())) {
      console.log('Empty');
      this.canSendMessage = false;
    } else {
      console.log('Not empty');
      this.canSendMessage = true;
    }

    if (isEmptyObject(this.postBody)) {
      console.log('Empty list');
      this.canSendMessage = false;
    } else {
      console.log('Not empty list');
      this.canSendMessage = true;
    }
    console.log(this.getMessage());
    console.log(this.postBody);

    if(this.canSendMessage){
      this.http.postMessage(this.postBody, this.getMessage()).subscribe( (data:any) =>{
        // this.contactList = data;
      },error=> console.log(error),()=>{this.modalService.open( mediumModalContent )});
      setTimeout(() => {
        this.modalService.open( mediumModalContent );
      }, 1500);
    }else{
      //this.modalService.open( mediumModalContent );
    }

    
  }
}
