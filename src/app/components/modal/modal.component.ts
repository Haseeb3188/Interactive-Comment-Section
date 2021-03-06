import { Component, ElementRef, OnDestroy, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any

  constructor( private modalService: ModalService, private elementRef: ElementRef) { 
    this.element = elementRef.nativeElement
  }

  ngOnInit(): void {
     // ensure id attribute exists
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }

    document.body.appendChild(this.element)

    this.element.addEventListener('click', elementRef => {
      if(elementRef.target.className == 'modal') {
        this.close();
      }
    })

     this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

}
