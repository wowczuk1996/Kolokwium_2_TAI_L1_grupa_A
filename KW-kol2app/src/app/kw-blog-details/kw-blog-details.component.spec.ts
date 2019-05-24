import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KWBlogDetailsComponent } from './kw-blog-details.component';

describe('KWBlogDetailsComponent', () => {
  let component: KWBlogDetailsComponent;
  let fixture: ComponentFixture<KWBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KWBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KWBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
