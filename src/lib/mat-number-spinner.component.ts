import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { NUMBER_FORMAT_REGEXP } from "@angular/common/src/i18n/format_number";

@Component({
  selector: "uix-mat-number-spinner",
  template: `
  <div class="uix-spinner-arrows">
    <div [ngClass]="['uix-spinner-'+classSpinner]">
      <i class="uix-spinner-up" (click)="up()">
        <div class="uix-spinner-arrow uix-spinner-arrow-up"></div>
      </i>
      <i class="uix-spinner-down" (click)="down()">
        <div class="uix-spinner-arrow uix-spinner-arrow-down"></div>
      </i>
    </div>
  </div>
  `,
  styleUrls: ["./mat-number-spinner.component.scss"]
})
export class MatNumberSpinnerComponent implements OnInit {
  @Input("type") classSpinner: string = "";
  @Input() value: number;
  @Output() valueChange = new EventEmitter();
  @Input() increase: number = 1;
  @Input() decrease: number = 1;
  @Input() fix: number = 1;

  add = (a, b) => a + b;
  substract = (a, b) => a - b;
  parse = (...args) => args.map(value => this.handleParse(value));
  operation = (f, g) => (...args) => this.handleParse(g(...f(...args)));

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.detectChanges();
  }

  up() {
    const result = this.operation(this.parse, this.add);
    this.value = result(this.value, this.increase);
    this.valueChange.emit(this.value);
  }

  down() {
    const result = this.operation(this.parse, this.substract);
    this.value = result(this.value, this.decrease);
    this.valueChange.emit(this.value);
  }

  handleParse(value: any): number {
    return +parseFloat(value).toFixed(this.fix);
  }
}
