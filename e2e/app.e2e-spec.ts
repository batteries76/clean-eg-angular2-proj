import { EgProjectPage } from './app.po';

describe('eg-project App', function() {
  let page: EgProjectPage;

  beforeEach(() => {
    page = new EgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
