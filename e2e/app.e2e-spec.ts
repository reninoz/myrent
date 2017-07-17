import { Rent3Page } from './app.po';

describe('rent3 App', () => {
  let page: Rent3Page;

  beforeEach(() => {
    page = new Rent3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
