import { ZnoOnlineTestPage } from './app.po';

describe('zno-online-test App', () => {
  let page: ZnoOnlineTestPage;

  beforeEach(() => {
    page = new ZnoOnlineTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
