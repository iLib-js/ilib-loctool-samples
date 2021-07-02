/* @@@LICENSE
*/

bool get_checking_update(AppLaunchingItem prelaunching_item,)
{
    if(UPDATE_TYPE_OPTIONAL == update_type)
    {
        // (update button)
        std::string update_label        = ResBundleAdaptor::instance().getLocString("Update"); // i18n
        // (launch button)
        std::string launch_label        = ResBundleAdaptor::instance().getLocString("Launch"); // i18n
        // (cancel button)
        std::string cancel_label         = ResBundleAdaptor::instance().getLocString("Cancel"); // i18n
    }
    else // required
    {
        description = ResBundleAdaptor::instance().getLocString("You must update this app to launch it."); // i18n
        // (yes button)
        std::string yes_label        = ResBundleAdaptor::instance().getLocString("Yes"); // i18n
        // (no button)
        std::string no_label        = ResBundleAdaptor::instance().getLocString("No"); // i18n
        // Layout: [yes] [no]
        buttons.append(yes_btn);
        buttons.append(no_btn);
    }
}