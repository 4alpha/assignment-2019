import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // console.log(element(by.cssContainingText('div','Result')).getText());
    expect(page.getTitleText()).toEqual('Welcome to calculator!');
    debugger;
  });

  it('initially result should be 0', ()=> {
    expect(page.getAnswer()).toEqual('Result:0');
  

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  afterAll( ()=> {
    browser.pause();
  })
});
