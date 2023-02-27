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
        std::string cancel_label        = ResBundleAdaptor::instance().getLocString("Cancel"); // i18n
        std::string sound_label        = ResBundleAdaptor::instance().getLocString("Sound Out");
        std::string other_label        = ResBundleAdaptor::instance().getLocString("Others");
        std::string ivory_label        = ResBundleAdaptor::instance().getLocString("Ivory Coast");
        std::string game_label        = ResBundleAdaptor::instance().getLocString("Game Optimizer");
        std::string hdmi_label        = ResBundleAdaptor::instance().getLocString("HDMI Deep Color");

    }
    else // required
    {
        description = ResBundleAdaptor::instance().getLocString("You must update this app to launch it."); // i18n
        // (yes button)
        std::string yes_label          = ResBundleAdaptor::instance().getLocString("Yes"); // i18n
        // (no button)
        std::string no_label           = ResBundleAdaptor::instance().getLocString("No"); // i18n
        std::string exit_label           = ResBundleAdaptor::instance().getLocString("Exit");
        std::string ok_label           = ResBundleAdaptor::instance().getLocString("OK");
        std::string agree_label        = ResBundleAdaptor::instance().getLocString("Agree");
        std::string program_label      = ResBundleAdaptor::instance().getLocString("Programme");
        std::string ivory_label        = ResBundleAdaptor::instance().getLocString("Ivory Coast");
        std::string test1_label        = ResBundleAdaptor::instance().getLocString("TV Program Locks");
        std::string test2_label        = ResBundleAdaptor::instance().getLocString("Service Area Zip Code");
        std::string test3_label        = ResBundleAdaptor::instance().getLocString("Time Settings");
        std::string test4_label        = ResBundleAdaptor::instance().getLocString("Please enter password.");
        // Layout: [yes] [no]
        buttons.append(yes_btn);
        buttons.append(no_btn);
    }
}