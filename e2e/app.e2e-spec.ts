import { AngularChangeDetectionPage } from './app.po';

describe('angular-change-detection App', () => {
  let page: AngularChangeDetectionPage;

  beforeEach(() => {
    page = new AngularChangeDetectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
