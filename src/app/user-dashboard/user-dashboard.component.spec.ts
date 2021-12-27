import { Input } from '@angular/core';
import { ComponentFixture, resetFakeAsyncZone, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDashboardComponent } from './user-dashboard.component';

describe('UserDashboardComponent', () => {
     let component: UserDashboardComponent;
    let fixture: ComponentFixture<UserDashboardComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
  
          imports:[
              RouterTestingModule
          ],
  
        declarations: [ UserDashboardComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UserDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

   
//   it('true should be true', ()=>{
//       expect(true).toBe(true);
//   })

//   it('postUserDetails should be post',()=>{
//       expect(component.getAllUsers).toBeTruthy();
//   })


});
