
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km',
      val: 100000
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm',
      val: 100
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm',
      val: 1
    }
  ];

  select1Val = 0;
  input1Val = '';
  select2Val = 1;
  input2Val = '';

  val = 0;

  handleChangeInput1(value: string | null) {
    this.val = parseFloat(value) * this.lengthOptions[this.select1Val].val;
    this.input2Val = (this.val / this.lengthOptions[this.select2Val].val).toString();
  }

  handleChangeInput2(value: string | null) {
    this.val = parseFloat(value) * this.lengthOptions[this.select2Val].val;
    this.input1Val = (this.val / this.lengthOptions[this.select1Val].val).toString();
  }

  handleChangeSelect1(value: number | null) {
    this.input1Val = (this.val / this.lengthOptions[value].val).toString();
  }

  handleChangeSelect2(value: number | null) {
    this.input2Val = (this.val / this.lengthOptions[value].val).toString();
  }

  ngOnInit() {

  }
}
