import $L from '@enact/i18n/$L';
export function findMsgByCode (code) {
    switch (code) {
        case 1:
            msg.reason = $L('Hello'); // i18n : i18n comments
            break;
        case 2:
            msg.reason = $L('Thank you');
            break;
        case 3:
            msg.reason = $L('Congratulation');
            break;
        case 4:
            msg.reason = $L('Antenna NEXTGEN TV');
            break;
        default:
            msg.reason = $L('Bye');
            break;
    }
    return msg;
}