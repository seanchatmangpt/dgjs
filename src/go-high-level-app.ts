/*you provided is a TypeScript code that sets up an Express server and defines several routes
for handling HTTP requests. */
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { GHL } from "./ghl";

const path = __dirname + "/ui/dist/";

dotenv.config();
export const app: Express = express();
app.use(json({ type: "application/json" }));

/*`app.use(express.static(path));` is setting up a middleware in the Express server. The
`express.static` middleware is used to serve static files such as HTML, CSS, JavaScript, and images. */
app.use(express.static(path));

/* The line `const ghl = new GHL();` is creating a new instance of the `GHL` class. It is assigning
this instance to the variable `ghl`. This allows you to use the methods and properties defined in
the `GHL` class to interact with the GoHighLevel API. */
const ghl = new GHL();

const port = process.env.PORT;

const CLIENT_ID = process.env.GHL_APP_CLIENT_ID || "";
const REDIRECT_URI = "http://localhost:3000/authorize-handler";
const SCOPES = [
  "conversations/message.readonly",
  "conversations/message.write",
  "users.readonly",
];

/**
 * Constructs the authorization URL with predefined scopes.
 * @returns {string} - The constructed authorization URL.
 */
function constructAuthUrl(): string {
  const baseUrl = "https://marketplace.gohighlevel.com/oauth/chooselocation";
  const params = new URLSearchParams({
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    scope: SCOPES.join(" "),
  });
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Endpoint to generate the authorization URL with predefined scopes.
 */
app.get("/generate-auth-url", (req: Request, res: Response) => {
  try {
    const authUrl = constructAuthUrl();
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).send("Failed to generate authorization URL.");
  }
});

/*`app.get("/authorize-handler", async (req: Request, res: Response) => { ... })` sets up an example how you can authorization requests */
app.get("/authorize-handler", async (req: Request, res: Response) => {
  const { code } = req.query;
  await ghl.authorizationHandler(code as string);
  res.redirect("https://app.gohighlevel.com/");
});

/*`app.get("/example-api-call", async (req: Request, res: Response) => { ... })` shows you how you can use ghl object to make get requests
 ghl object in abstract would handle all of the authorization part over here. */
app.get("/example-api-call", async (req: Request, res: Response) => {
  const request = await ghl
    .requests(req.query.companyId as string)
    .get(`/users/search?companyId=${req.query.companyId}`, {
      headers: {
        Version: "2021-07-28",
      },
    });
  return res.send(request.data);
});

/*`app.get("/example-api-call-location", async (req: Request, res: Response) => { ... })` shows you how you can use ghl object to make get requests
 ghl object in abstract would handle all of the authorization part over here. */
app.get("/example-api-call-location", async (req: Request, res: Response) => {
  try {
    const locationId = req.query.locationId as string | undefined;
    if (!locationId) {
      return res.status(400).send("locationId is required");
    }

    if (ghl.checkInstallationExists(locationId)) {
      const request = await ghl
        .requests(locationId)
        .get(`/contacts/?locationId=${locationId}`, {
          headers: {
            Version: "2021-07-28",
          },
        });
      return res.send(request.data);
    } else {
      await ghl.getLocationTokenFromCompanyToken(
        req.query.companyId as string,
        locationId,
      );
      const request = await ghl
        .requests(locationId)
        .get(`/contacts/?locationId=${locationId}`, {
          headers: {
            Version: "2021-07-28",
          },
        });
      return res.send(request.data);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

/*`app.post("example-webhook-handler",async (req: Request, res: Response) => {
    console.log(req.body)
})` sets up a route for handling HTTP POST requests to the "/example-webhook-handler" endpoint. The below POST
api can be used to subscribe to various webhook events configured for the app. */
app.post("/example-webhook-handler", async (req: Request, res: Response) => {
  console.log(req.body);
});

/* The `app.post("/decrypt-sso",async (req: Request, res: Response) => { ... })` route is used to
decrypt session details using ssoKey. */
app.post("/decrypt-sso", async (req: Request, res: Response) => {
  const { key } = req.body || {};
  if (!key) {
    return res.status(400).send("Please send valid key");
  }
  try {
    const data = ghl.decryptSSOData(key);
    res.send(data);
  } catch (error) {
    res.status(400).send("Invalid Key");
    console.log(error);
  }
});

/*`app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});` sets up a route for the root URL ("/") of the server.  This is
 used to serve the main HTML file of a web application. */
app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

/*`app.listen(port, () => {
  console.log(`GHL app listening on port `);
});` is starting the Express server and making it listen on the specified port. */
app.listen(port, () => {
  console.log(`GHL app listening on port ${port}`);
});
