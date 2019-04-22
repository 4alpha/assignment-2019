import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

class MockCalcService {
  sum: number = 0;
  
  add(one: number, two: number): number {
    this.sum = +one + +two;
    return this.sum;
  }

  sub(one: number, two: number): number {
    this.sum = +one - +two;
    return this.sum;
  }

  mult(one: number, two: number): number {
    this.sum = +one * +two;
    return this.sum;
  }

  div(one: number, two: number): number {
    if (two == 0) {
      return 0;
    }
    this.sum = +one / +two;
    return this.sum;
  }
}

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

  // describe('Calculator Methods', function() {
  //   var calculator = new CalculatorComponent();
     
  //   it('contains an add method', function() {
  //     expect(calculator.add).toBeDefined();
  //   });

  //   it('contains an sub method', function() {
  //     expect(calculator.sub).toBeDefined();
  //   });

  //   it('contains an mult method', function() {
  //     expect(calculator.mult).toBeDefined();
  //   });

  //   it('contains an div method', function() {
  //     expect(calculator.div).toBeDefined();
  //   });
  
  // });

  describe('service testing', ()=> {
    let component: CalculatorComponent;
    let service: MockCalcService;

    beforeEach(() => { (2)
      service = new MockCalcService();
      component = new CalculatorComponent(service);
    });
  
    afterEach(() => {
      service = null;
      component = null;
    });

    it('Methods are defined', () => {
      expect(service.add(1,2)).toBeTruthy();
      expect(service.sub(1,2)).toBeTruthy();
      expect(service.mult(1,2)).toBeTruthy();
      expect(service.div(1,2)).toBeTruthy();

      expect(service.add(1,2)).toBeDefined();
      expect(service.sub(1,2)).toBeDefined();
      expect(service.mult(1,2)).toBeDefined();
      expect(service.div(1,2)).toBeDefined();
    });
  
  });


  describe('operations on two numbers', function() {
    let component: CalculatorComponent;
    let service: MockCalcService;

    beforeEach(() => { (2)
      service = new MockCalcService();
      component = new CalculatorComponent(service);
    });
  
    afterEach(() => {
      service = null;
      component = null;
    });

    var sum = 0;
 
    it('on adding correct answer is shown', function() {
      service.add(1, 2);
      expect(service.sum).toBe(3);
    });

    it('on substracting correct answer is shown', function() {
      service.sub(2, 1);
      expect(service.sum).toBe(1);
    });

    it('on Multiplication correct answer is shown', function() {
      service.mult(1, 2);
      expect(service.sum).toBe(2);
    });

    it('on Division correct answer is shown', function() {
      service.div(1, 1);
      expect(service.sum).toBe(1);
    });
  });

  it('call through add method', () => {
    let add = spyOn(component,'add').and.callThrough();
    inputOne.nativeElement.value = 1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value = 2;
    inputTwo.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    //btn Add not called yet
    expect(add.calls.any()).toEqual(false);
    
    btnAdd.nativeElement.click();
    //btn Add is called
    expect(add.calls.any()).toEqual(true);
  
    fixture.detectChanges();

    expect(add).toHaveBeenCalled();
    //arguments passed to call
    expect(add.calls.argsFor(0)).toEqual(['1', '2']);
    
    expect(add).toHaveBeenCalledWith('1','2');
    
    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result:3');
 
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

    expect(inputOne).toBeGreaterThan(inputTwo.nativeElement.value);
    expect(sub).toHaveBeenCalled();
    expect(sub).toHaveBeenCalledWith('1','1');

    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result:0');
  });

  it('call through mult method', () => {
    let mult = spyOn(component, 'mult').and.callThrough();
    inputOne.nativeElement.value = 1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value = 2;
    inputTwo.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    btnMult.nativeElement.click();
    fixture.detectChanges();

    expect(mult).toHaveBeenCalled();
    expect(mult).toHaveBeenCalledWith('1','2');
    
    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result:2');
 
  });

  it('call through div method', () => {
    let div = spyOn(component, 'div').and.callThrough();
    inputOne.nativeElement.value = 1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value = 2;
    inputTwo.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    btnDiv.nativeElement.click();
    fixture.detectChanges();

    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledWith('1','2');
    
    let result = fixture.debugElement.nativeElement.querySelector('#result');
    expect(result.innerText).toEqual('Result:0.5');
 
  });

  it('Throw error for divide by 0', () =>{
    let div = spyOn(component, 'div').and.callThrough();
    inputOne.nativeElement.value=1;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    inputTwo.nativeElement.value=0;
    inputOne.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    btnDiv.nativeElement.click();
    fixture.detectChanges();

    expect(div).toThrow();
  });
  

});
