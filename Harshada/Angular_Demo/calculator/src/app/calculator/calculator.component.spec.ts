import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture < CalculatorComponent > ;

  let inputOne: DebugElement;
  let inputTwo: DebugElement;
  let btnAdd: DebugElement;
  let btnSub: DebugElement;
  let btnMult: DebugElement;
  let btnDiv: DebugElement;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [CalculatorComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;

    inputOne = fixture.debugElement.query(By.css('#one'));
    inputTwo = fixture.debugElement.query(By.css('#two'));
    btnAdd = fixture.debugElement.query(By.css('#add'));
    btnSub = fixture.debugElement.query(By.css('#sub'));
    btnMult = fixture.debugElement.query(By.css('#mult'));
    btnDiv = fixture.debugElement.query(By.css('#div'));
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have input fields and buttons', () => {

    expect(inputOne).toBeTruthy();
    expect(inputTwo).toBeTruthy();
    expect(btnAdd).toBeTruthy();
    expect(btnSub).toBeTruthy();
    expect(btnMult).toBeTruthy();
    expect(btnDiv).toBeTruthy();

    let button = fixture.debugElement.queryAll(By.css('button'));

    expect(button[0].nativeElement.innerText).toBe('Add');
    expect(button[1].nativeElement.innerText).toBe('Sub');
    expect(button[2].nativeElement.innerText).toBe('Mult');
    expect(button[3].nativeElement.innerText).toBe('Div');

  });

  it('button should be enabled on form load', () => {
    let button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  describe('button click event', () => { 

    it('should check add is clicked', () => {
      let addFunction = spyOn(component, 'add');
      let button = fixture.debugElement.nativeElement.querySelector('#add');
      button.click();
      expect(addFunction).toHaveBeenCalled();
    });
  
    it('should check sub is clicked',() => {
      spyOn(component, 'sub');
      let button = fixture.debugElement.nativeElement.querySelector('#sub');
      button.click();
      expect(component.sub).toHaveBeenCalled();
    });
  
    it('should check mult is clicked', () => {
      spyOn(component, 'mult');
      let button = fixture.debugElement.nativeElement.querySelector('#mult');
      button.click();
      expect(component.mult).toHaveBeenCalled();
    });
  
    it('should check div is clicked', () => {
      spyOn(component, 'div');
      let button = fixture.debugElement.nativeElement.querySelector('#div');
      button.click();
      expect(component.div).toHaveBeenCalled();
    });
  });

  describe('Calculator Methods', function() {
    var calculator = new CalculatorComponent();
     
    it('contains an add method', function() {
      expect(calculator.add).toBeDefined();
    });

    it('contains an sub method', function() {
      expect(calculator.sub).toBeDefined();
    });

    it('contains an mult method', function() {
      expect(calculator.mult).toBeDefined();
    });

    it('contains an div method', function() {
      expect(calculator.div).toBeDefined();
    });
  
  });

  describe('operations on two numbers', function() {
    var calculator = new CalculatorComponent();
    var sum = 0;
 
    it('on adding correct answer is shown', function() {
      calculator.add(1, 2);
      expect(calculator.sum).toBe(3);
    });

    it('on substracting correct answer is shown', function() {
      calculator.sub(2, 1);
      expect(calculator.sum).toBe(1);
    });

    it('on Multiplication correct answer is shown', function() {
      calculator.mult(1, 2);
      expect(calculator.sum).toBe(2);
    });

    it('on Division correct answer is shown', function() {
      calculator.div(1, 1);
      expect(calculator.sum).toBe(1);
    });
  });

  it('call through add method', () => {
    let add = spyOn(component,'add').and.callThrough();
    inputOne.nativeElement.value = 1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value = 2;
    inputTwo.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    btnAdd.nativeElement.click();
    fixture.detectChanges();

    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith('1','2');
    
    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result: 3');
 
  });

  it('call through sub method', () => {
    let sub = spyOn(component, 'sub').and.callThrough();
    inputOne.nativeElement.value = 1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value = 1;
    inputTwo.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    btnSub.nativeElement.click();
    fixture.detectChanges();

    expect(sub).toHaveBeenCalled();
    expect(sub).toHaveBeenCalledWith('1','1');

    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result: 0');
  });
});
