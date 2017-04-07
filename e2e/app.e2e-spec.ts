import { MoviAngularPage } from './app.po';

describe('movi-angular App', () => {
  let page: MoviAngularPage;

  beforeEach(() => {
    page = new MoviAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
