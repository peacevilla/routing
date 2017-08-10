import { RoutingTPage } from './app.po';

describe('routing-t App', function() {
  let page: RoutingTPage;

  beforeEach(() => {
    page = new RoutingTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
