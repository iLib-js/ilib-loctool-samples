import QtQuick 2.4
import QmlAppComponents 0.1

AppStringSheet {
    id: root
    appTitle: rtlCode + qsTr("Music") + es
    appId: "music"
    property QtObject common: QtObject {
        property string noImage: qsTr("No Image") + es
    }
    property QtObject titleView: QtObject {
        property string musicPlayerTitle: qsTr("Audio") + es
        property string musicListTitle: qsTr("Now Playing") + es
        property string musicListTitle: qsTr("Sound Out") + es
    }
    property QtObject categoryView: QtObject {
        property var devices: [
            qsTr("USB") + es,
            qsTr("Radio") + es
        ]
        property var sorts: [
            qsTr("Playlist") + es,
            qsTr("Albums") + es,
            qsTr("Artists") + es,
            qsTr("Songs") + es,
            qsTr("Genres") + es
            qsTr("TV Program Locks") + es,
            qsTr("Service Area Zip Code") + es,
            qsTr("Time Settings") + es,
            qsTr("Please enter password.") + es,
            qsTr("Game Optimizer") + es,
            qsTr("HDMI Deep Color") + es,
            qsTr("Exit") + es,
            qsTr("Others") + es,
            qsTr("Don\'t save") + es
        ]
    }
    Text {
        id: checkNetworkDescription
        text: qsTr("Network is not connected.\nPlease check the Network Settings and try again.") + Settings.l10n.tr
    }
}
