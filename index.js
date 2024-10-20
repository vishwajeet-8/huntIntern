import puppeteer from "puppeteer";

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the landing page
  await page.goto("https://ck.hdm3.in/lp.php?sid=085aaaf6&txnid={uniqueid}");

  // Fill out the form fields and data to be submitted
  const data = {
    "lead_data[name]": await page.type(".form-control", "vishu"),
    "lead_data[email]": await page.type("#ilt0z", "vishu08@gmail.com"),
    "lead_data[contact_no]": await page.type("#imim6l", "9654417677"),
  };

  // Convert data object to URL-encoded string
  const formBody = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  // URL which includes lead data
  const urlWithParams =
    "https://ck.hdm3.in/lp.php?_save_form=true&hid=36695f50j6fd6ke1ec856ed2zf23c3x3353aa82&sid=085aaaf6&" +
    formBody;

  // Navigate to the URL with query parameters (GET request)
  await page.goto(urlWithParams);

  // await page.waitForNavigation();

  const url = page.url();
  if (url === urlWithParams) {
    console.log("data send successfully");
  } else {
    console.log("data not send");
  }
  // Close the browser
  await browser.close();
})();
