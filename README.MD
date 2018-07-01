# Uix MatNumberSpinner

A better way to manage input spinner elements for number input, extending angular material for angular 6. You just have to use Angular material.

This component hides the native spinners from browsers. (you also can do it by using css)

This component is an extension from angular material [https://material.angular.io/](https://material.angular.io/)


#### Examples

##### Using standar input from angular material
![Alt text](https://raw.githubusercontent.com/thiswallz/mat-number-spinner/master/demo.gif?raw=true 'Example 1')

##### Using outline input from angular material

![Alt text](https://raw.githubusercontent.com/thiswallz/mat-number-spinner/master/demo2.gif?raw=true 'Example 2')



## Quick Start

### Install

```bash
npm i --save uix-mat-number-spinner
```


### Import the module

```ts
// app.module.ts...
import { UixMatNumberSpinnerModule } from "uix-mat-number-spinner";
// ...
@NgModule({
  imports: [
    //...
    UixMatNumberSpinnerModule
  ],
})
export class AppModule {}
```

### Place the `UixMatNumberSpinnerComponent` in your app component

Put `<uix-mat-number-spinner></uix-mat-number-spinner>` somewhere.

```html
<!-- OUTLINE INPUT app.component.html -->
<mat-form-field appearance="outline" class="mat-cell-input-number" >
  <uix-mat-number-spinner increase="0.5" decrease="0.15" fix="2" type="outline" [(value)]="number1"></uix-mat-number-spinner>
	<input matInput value="0" type="number" [(ngModel)]="number1" >
</mat-form-field>


<!-- DEFAULT INPUT app.component.html -->
<mat-form-field class="mat-cell-input-number" >
  <uix-mat-number-spinner increase="0.5" decrease="0.15" fix="2"  [(value)]="number1"></uix-mat-number-spinner>
	<input matInput value="0" type="number" [(ngModel)]="number1" >
</mat-form-field>
```

## Authors

- **Mauricio Joost Wolff** - _Initial work_ - [GitHub](https://github.com/thiswallz)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details