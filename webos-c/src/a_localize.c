
/** @file a_localize.c
*/

#include "a_localize.h"

const char* file = "cstrings.json";
ResBundleC* _gResBundle = NULL;

const char* xpa_localize_getButtonLabel(BUTTON_LABEL_TYPE button)
{
    char* localeString = NULL;
    switch (button)
    {
        case BUTTON_LABEL_TYPE_NO:
        {
            if (_gResBundle != NULL)
            {
                localeString = (char*) resBundle_getLocString(_gResBundle, "No"); // i18n
                STR_NCPY(_gAlertButton_NO, localeString, LABEL_LEN);
                STR_FREE(localeString);
            }
            return _gAlertButton_NO;
        }
s        case BUTTON_LABEL_TYPE_YES:
        {
            if (_gResBundle != NULL)
            {
                localeString = (char*) resBundle_getLocString(_gResBundle, "Yes"); // i18n
                STR_NCPY(_gAlertButton_YES, localeString, LABEL_LEN);
                STR_FREE(localeString);
            }
            return _gAlertButton_YES;
        }
        case BUTTON_LABEL_TYPE_OK:
        {
            if(_gResBundle != NULL)
            {
                localeString = (char*) resBundle_getLocString(_gResBundle, "OK"); // i18n
                STR_NCPY(_gAlertButton_OK, localeString, LABEL_LEN);
                STR_FREE(localeString);
            }
            return _gAlertButton_OK;
        }
        case BUTTON_LABEL_TYPE_CANCEL:
        {
            if(_gResBundle != NULL)
            {
                localeString = (char*) resBundle_getLocString(_gResBundle, "Cancel"); // i18n
                STR_NCPY(_gAlertButton_CANCEL, localeString, LABEL_LEN);
                STR_FREE(localeString);
            }
            return _gAlertButton_CANCEL;
        }
        default:
            return "UNKNOWN";
    }
}