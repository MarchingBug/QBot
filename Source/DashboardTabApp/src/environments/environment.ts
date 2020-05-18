export const environment = {
    production: false,
    apiBaseUrl: "https://QBotadc.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
        clientId: "01a8e7a0-6b8f-42bf-b6c3-82ddb21659c7",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
