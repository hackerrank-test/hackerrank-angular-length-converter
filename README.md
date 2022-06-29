# Length Converter

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/dLpJcGyZEHeVe070aL17aw/length-converter.gif)

## Functionality Requirements

The component should have the following functionalities:

- It has 2 input set. Each input set has the following:
  - An input field to type the number which has a label defining unit of measurement selected.
  - A dropdown that has 3 options - Kilometre, Metre, Centimetre. The array containing the objects of all possible values in the dropdown is below. Use the `id` property of each object to pass the value to each option as that is used for testing.

  ```
    [
      {
        id: 0,
        label: 'Kilometre',
        unit: 'km'
      },
      {
        id: 1,
        label: 'Metre',
        unit: 'm'
      },
      {
        id: 2,
        label: 'Centimetre',
        unit: 'cm'
      }
    ]
  ```

- Initially, both the input fields are empty. The first dropdown should have `Kilometre` selected on app load and the second dropdown should have `Metre` selected on app load. Therefore, first input should have the label as `km` and second input should have the label as `m`.

- As and when a value is typed in either input field, convert it to unit selected in the other input set and update the value of other input field. 

- Please note, when input fields have values, changing unit from dropdown should update the value of respective input field.

- Example - first dropdown has Kilometres selected and second dropdown has Metres selected. Any value in typed in first input field should render the converted Metre value in second input field.

- Use the following conversions:

```
  1 Kilometre = 1000 Metres
  1 Metre = 100 Centimetres
```

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- In the first input set -
  - Input field has data-test-id attribute `app-input1`.
  - Label has data-test-id attribute `app-label1`.
  - Select has data-test-id attribute `app-select1`.

- In the second input set -
  - Input field has data-test-id attribute `app-input2`.
  - Label has data-test-id attribute `app-label2`.
  - Select has data-test-id attribute `app-select2`.

## Project Specifications

**Read-only Files**
- src/app/lengthConverter/lengthConverter.component.spec.ts
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
