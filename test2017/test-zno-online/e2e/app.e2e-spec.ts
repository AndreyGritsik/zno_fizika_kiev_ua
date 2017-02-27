import { TestZnoOnlinePage } from './app.po';

describe('test-zno-online App', function() {
  let page: TestZnoOnlinePage;

  beforeEach(() => {
    page = new TestZnoOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
