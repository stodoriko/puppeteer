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

  test("Check Description Text", async () => {
      await page.setDefaultTimeout(4000);
      const p = await "p f3-mktg color-fg-muted";
      const text = await page.$eval(p, el => el.textContent);
      expect(text).toEqual("GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.");
    });

  test("Check Button Text", async () => {
      await page.setDefaultTimeout(2000);
      const button = await "a btn-mktg btn-large-mktg";
      const buttonText = await page.$eval(button, el => el.textContent);
      expect(buttonText).toEqual("Get started with Actions");
  });

});