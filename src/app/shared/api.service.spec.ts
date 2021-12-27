import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

describe('Api Service',()=>{

    let apiService: ApiService;
    let http: HttpClient;
    let httpController: HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers: [ApiService],
        });
        apiService = TestBed.inject(ApiService);
        http = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('service created',()=>{
        expect(apiService).toBeDefined()

    });
})