import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Banner } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex;

  @ViewChild(NzCarouselComponent,{static:true}) carousel;

  banners: Banner[];

  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  ngOnInit(): void {
  }

  onBeforeChange({to}){
    this.carouselActiveIndex = to;
  }

  onCarouselChangeSlide(type:string){
    console.log(type)
    this.carousel[type]();
  }

}
