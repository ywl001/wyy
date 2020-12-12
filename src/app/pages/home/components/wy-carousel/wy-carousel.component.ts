import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {

  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>

  @Input() activeIndex;

  @Output() changeSlide: EventEmitter<string> = new EventEmitter<'pre' | 'next'>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type)
  }
}
