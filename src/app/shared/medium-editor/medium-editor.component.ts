import { Component, Input, forwardRef, ViewChild, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

declare var MediumEditor: any;

@Component({
  selector: 'app-medium-editor',
  styleUrls: ['./medium-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MediumEditorComponent),
    multi: true
  }],
  template: `<div #host></div>`
})
export class MediumEditorComponent implements OnInit, OnDestroy {
  @Input() options: any;
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter();
  editor: any;
  @ViewChild('host') host: any;

  constructor() { }

  ngOnInit() {
    this.options = (typeof this.options === 'string') ? JSON.parse(this.options)
      : (typeof this.options === 'object') ? this.options : {};
    if (this.placeholder && this.placeholder !== '') {
      Object.assign(this.options, {
        placeholder: { text: this.placeholder }
      });
    }
    this.editor = new MediumEditor(this.host.nativeElement, this.options);
    this.editor.subscribe('editableInput', (event: any, editable: any) => {
      const value = this.editor.elements[0].innerHTML;
      this.valueChange.emit(value);
    });
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
