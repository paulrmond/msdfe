import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '../../services/http.services'
import * as moment from 'moment';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  subfolderIndex = null;
  fileToUpload: File = null;
  documentList: any = [];
  selectedDate;
  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.http.getDocumentsPage().subscribe((data:any) =>{
      if(data && data.length > 0){
        this.documentList = Object.assign(data);
      }

    },error=> console.log(error))

    this.selectedDate = this.getCurrentDate();
    
  }

  showSubFolder(index){
    if(this.subfolderIndex == index){
      this.subfolderIndex = null;
      return;
    }
    this.subfolderIndex = index;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    console.log(this.fileToUpload)
  }

  getReadme(){
    let messageDom = document.getElementById('readme')
    return messageDom['value'];
  }

  uploadFileToActivity(mediumModalContents) {
    // let fullPath = document.getElementById('file-upload')
    // this.fileToUpload = fullPath['value'];
    if(this.fileToUpload && this.selectedDate){
      this.http.postFile(this.fileToUpload , this.selectedDate,this.getReadme()).subscribe(data => {
          // do something, if upload success
          }, error => {
            console.log(error);
          });
          setTimeout(() => {
            this.modalService.open( mediumModalContents );
          }, 1500);
          
    }
    
  }

  downloadFile(file){
    console.log(file)
    if(file){
      this.http.getDownloadFile(file.timeCreated,file.fileName,file.contentType,file.docid)
      // .subscribe((data:any) =>{
        // console.log(data)
        // // var downloadURL = URL.createObjectURL(data);
        // // let blob:any = new Blob([data.blob()], { type: 'jpg; charset=utf-8' });
        // // window.location.href = data
        // window.open(data);
      // },error=> console.log(error))
    }
   
  }

  _selectedDate(event){
    if(event && event.value){
      console.log(moment(event.value).format('YYYY-MM-DD'))
      this.selectedDate = moment(event.value).format('YYYY-MM-DD')
    }
  }

  getCurrentDate(){
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const dateString = dateLocal.toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " ");
    return dateString;
  }

}
