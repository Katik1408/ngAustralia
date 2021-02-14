import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]',
})
export class CustomifDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appCustomif(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
/**
 *
 *
 * Component Receives any data with the help of Input variable
 *
 * Template is the entire html component which we see
 *
 * ViewContainer ---> Is the one which contains one particular html element
 *
 *
 */
