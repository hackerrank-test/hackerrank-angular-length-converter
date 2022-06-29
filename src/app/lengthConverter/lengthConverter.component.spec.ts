import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LengthConverter} from './lengthConverter.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('LengthConverter', () => {
  let component: LengthConverter;
  let fixture: ComponentFixture<LengthConverter>;
  let compiled;
  let input1;
  let input2;
  let label1;
  let label2;
  let select1;
  let select2;

  const pushInputValue = async (el, value) => {
    el.value = value;
    el.dispatchEvent(new Event('change'));
    el.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };


  const pushDropdownValue = async (el, value) => {
    el.value = value;
    el.dispatchEvent(new Event('change'));
    el.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          FormsModule
        ],
        declarations: [LengthConverter],
        schemas : [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConverter);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    input1 = getByTestId('app-input1');
    input2 = getByTestId('app-input2');
    label1 = getByTestId('app-label1');
    label2 = getByTestId('app-label2');
    select1 = getByTestId('app-select1');
    select2 = getByTestId('app-select2');
    fixture.detectChanges();
  });

  it('initial UI is rendered as exptected', async() => {
    await fixture.detectChanges();
    expect(input1.value).toBeFalsy();
    expect(input2.value).toBeFalsy();
    expect(label1.innerHTML.trim()).toBe('km');
    expect(label2.innerHTML.trim()).toBe('m');
    expect(select1.selectedOptions[0].text.trim()).toBe('Kilometre');
    expect(select2.selectedOptions[0].text.trim()).toBe('Metre');
  });

  it('Typing value in Kilometres field gets correct Metres value', async() => {
      await pushInputValue(input1, 500);
      input2 = getByTestId('app-input2');
      expect(Number(input2.value)).toEqual(500000);
  });

  it('Typing value in Kilometres field gets correct Kilometres value', async() => {
    await pushDropdownValue(select2, 0);
    await pushInputValue(input1, 500);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(500);
  });

  it('Typing value in Kilometres field gets correct Centimetres value', async() => {
    await pushDropdownValue(select2, 2);
    await pushInputValue(input1, 500);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(50000000);
  });

  it('Typing value in Metres field gets correct Kilometres value', async() => {
    await pushInputValue(input2, 500);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(0.5);
  });

  it('Typing value in Metres field gets correct Metres value', async() => {
    await pushDropdownValue(select1, 1);
    await pushInputValue(input2, 500);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(500);
  });

  it('Typing value in Metres field gets correct Centimetres value', async() => {
    await pushDropdownValue(select1, 2);
    await pushInputValue(input2, 500);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(50000);
  });

  it('If input is not empty and dropdown is changed, input field should reflect new value', async() => {
    await pushDropdownValue(select1, 2);
    await pushInputValue(input2, 500);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(50000);

    await pushDropdownValue(select2, 0);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(0.5);
  });

  it('Perform series of operations', async() => {
    await pushDropdownValue(select1, 2);
    await pushInputValue(input2, 500);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(50000);

    await pushDropdownValue(select2, 1);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(500);

    await pushDropdownValue(select2, 2);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(50000);

    await pushDropdownValue(select2, 0);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(0.5);

    await pushInputValue(input1, 700);
    input2 = getByTestId('app-input2');
    expect(Number(input2.value)).toEqual(0.007);

    await pushInputValue(input2, 2);
    input1 = getByTestId('app-input1');
    expect(Number(input1.value)).toEqual(200000);
  });
});
