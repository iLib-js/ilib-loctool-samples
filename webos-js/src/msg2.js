webappResBundle = new ResBundle({
    basePath: "../resources"
});

function setButtonsOnPage(layoutCase) {
    switch (layoutCase) {
    case 0:
        createButtonOnPage(webappResBundle.getString("EXIT APP"), "ExitApp_Button", dir_head, onExitApp);
        break;
    case 1:
        createButtonOnPage(webappResBundle.getString("EXIT APP"), "ExitApp_Button", dir_head, onExitApp);
        createButtonOnPage(webappResBundle.getString("RETRY"), "Retry_Button", dir_tail, onRetryApp);
        break;
    case 2:
        createButtonOnPage(webappResBundle.getString("EXIT APP"), "ExitApp_Button", dir_head, onExitApp);
        createButtonOnPage(webappResBundle.getString("SETTINGS"), "Setting_Button", dir_tail, onLaunchGeneralSetting);
        createButtonOnPage(webappResBundle.getString("RETRY"), "Retry_Button", dir_tail, onRetryApp);
        break;
    default:
        createButtonOnPage(webappResBundle.getString("EXIT APP"), "ExitApp_Button", dir_head, onExitApp);
        createButtonOnPage(webappResBundle.getString("CLOSE"), "ExitApp_Button", dir_head, onExitApp);
        break;
    }
}