let page;

afterEach(async() => {
   await page.close();
 });

describe("Github page tests", () => {
  beforeEach(async () => {
   page = await browser.newPage();
   await page.goto("https://github.com/team");
});

  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(3000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(2000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(2000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });


describe("Actions Page", () => {
  beforeEach(async () => {
  page = await browser.newPage();
        await page.goto("https://github.com/features/actions");
  });

  test("Header Menu Text", async () => {
     const headerElement = await page.waitForXPath("//a[contains(@class, 'active')]");
     const elementText = await headerElement.evaluate (el => el.textContent);
     expect(elementText).toEqual("Actions");
  });
});