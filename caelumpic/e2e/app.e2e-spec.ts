import { CaelumpicPage } from './app.po';

describe('caelumpic App', () => {
  let page: CaelumpicPage;

  beforeEach(() => {
    page = new CaelumpicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
