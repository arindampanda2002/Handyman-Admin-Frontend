import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap,tap,catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { TuiDay } from '@taiga-ui/cdk';
import {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR} from '@taiga-ui/cdk';
import { WorkerDataService } from 'src/assets/Shared/workerData.service';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ {
    provide: TUI_VALIDATION_ERRORS,
    useValue: {
        required: 'This is a required field!',
        email: 'Enter a valid Id',
    },
},
    {provide: TUI_DATE_FORMAT, useValue: 'DMY'},
    {provide: TUI_DATE_SEPARATOR, useValue: '-'},
],
})

export class KycComponent implements OnInit {

    constructor(
        private _formBuilder: FormBuilder,
        private _httpClient: HttpClient,
        private _activatedRoute:ActivatedRoute,
        private _router: Router,
        private _datePipe: DatePipe,
        private _workerData:WorkerDataService
    ){

    }


    ngOnInit(): void {
        
    }
}