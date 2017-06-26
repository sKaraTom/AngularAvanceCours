import { ProjetAngularAvancePage } from './app.po';

describe('projet-angular-avance App', () => {
  let page: ProjetAngularAvancePage;

  beforeEach(() => {
    page = new ProjetAngularAvancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
