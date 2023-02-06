import { TTMpWebSocket, ttMpStorage, TTRequest } from '@maoyan/cloudbase-adapter-tt_mp';
import { SDKAdapterInterface, WebSocketContructor, StorageType } from '@cloudbase/adapter-interface';

declare const tt;
declare const GameGlobal;

function isMatch() {
    if (typeof tt === 'undefined') {
        return false;
    }
    if (typeof GameGlobal === 'undefined') {
        return false;
    }
    if (!tt.onHide) {
        return false;
    }
    if (!tt.offHide) {
        return false;
    }
    if (!tt.onShow) {
        return false;
    }
    if (!tt.offShow) {
        return false;
    }
    if (!tt.getSystemInfoSync) {
        return false;
    }
    if (!tt.getStorageSync) {
        return false;
    }
    if (!tt.setStorageSync) {
        return false;
    }
    if (!tt.connectSocket) {
        return false;
    }
    if (!tt.request) {
        return false;
    }
    try {
        if (!tt.getSystemInfoSync()) {
            return false;
        }
    }
    catch (e) {
        return false;
    }
    return true;
}
function genAdapter() {
    var adapter: SDKAdapterInterface = {
        root: GameGlobal,
        reqClass: TTRequest,
        wsClass: TTMpWebSocket as WebSocketContructor,
        localStorage: ttMpStorage,
        primaryStorage: StorageType.local,
        getAppSign: function () {
            return '';
        }
    };
    return adapter;
}
var adapter = {
    genAdapter: genAdapter,
    isMatch: isMatch,
    runtime: 'tt_game'
};
try {
    window['adapter'] = adapter;
    GameGlobal.adapter = adapter;
}
catch (e) { }
export { adapter };
export default adapter;
