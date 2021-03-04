import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() placeholder: string;
  @Input() type: string;
  public isDisabled: boolean = false;
  public value = new FormControl(null);

  private onChange: (value: string) => void;
  private destroyed$ = new Subject<boolean>();

  public ngOnInit(): void {
    this.value.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => {
        this.onChange(value);
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public writeValue(value: string): void {
    this.value.setValue(value, { emitEvent: false });
  }

  public registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  public registerOnTouched() {}

  public setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}



