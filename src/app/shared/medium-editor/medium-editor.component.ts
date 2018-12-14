import { Component, Input, forwardRef, ElementRef, ViewChild, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

declare var MediumEditor: any;

@Component({
  selector: 'app-medium-editor',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MediumEditorComponent),
    multi: true
  }],
  template: `<div #host></div>`
})
export class MediumEditorComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
  @Input() options: any;
  @Input() placeholder: string;
  el: ElementRef;
  editor: any;
  @ViewChild('host') host: any;
  propagateChange = (_: any) => { };

  constructor(el: ElementRef) {
    this.el = el;
  }

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
      this.ngOnChanges(value);
    });
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  ngOnChanges(changes: any) {
    this.propagateChange(changes);
  }

  writeValue(value: any) {
    if (this.editor) {
      if (value && value !== '') {
        this.editor.setContent(value);
      }
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any) { }

}
