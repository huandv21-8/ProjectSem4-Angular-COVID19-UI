import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {SituationRequest} from '../../../../shared/model/request/situationRequest';
import {SituationService} from '../situation.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-situation',
  templateUrl: './create-situation.component.html',
  styleUrls: ['./create-situation.component.scss']
})
export class CreateSituationComponent implements OnInit {

  public Editor = ClassicEditor;
  situationForm: FormGroup;
  situationRequest: SituationRequest;

  constructor(private situationService: SituationService, private toastrService: ToastrService) {
  }


  ngOnInit(): void {
    this.situationForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    });
  }


  createSituation() {
    this.situationRequest = {
      content: this.situationForm.value.content
    };
  //  console.log(this.situationRequest);
    this.situationService.createSituation(this.situationRequest).subscribe((data) => {
        this.toastrService.success(data.message);
      },
      (error) => {
        this.toastrService.error(error);
      }
    );
 //   console.log(this.situationForm.get('content').value);
  }

}
