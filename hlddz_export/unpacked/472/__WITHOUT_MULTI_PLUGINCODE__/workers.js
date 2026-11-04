
	define("workers/response/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			


var messageType = {
  config: 0,
  writeFile: 1
};
var _worker = worker,
  createSharedArrayBuffer = _worker.createSharedArrayBuffer,
  getFileSystemManager = _worker.getFileSystemManager;
var fs = getFileSystemManager ? getFileSystemManager() : null;
function compareVersion(_v1, _v2) {
  return _v1.split('.').map(function (v) {
    return v.padStart(2, '0');
  }).join('') >= _v2.split('.').map(function (v) {
    return v.padStart(2, '0');
  }).join('');
}
worker.onMessage(function (res) {
  var type = res.type,
    payload = res.payload;
  if (type === messageType.writeFile) {
    var filePath = payload.filePath,
      data = payload.data,
      isSharedBuffer = payload.isSharedBuffer;
    var content = data;
    isSharedBuffer && (content = data.buffer);
    if (!fs) {
      console.error('getFileSystemManager不存在');
      return;
    }
    fs.writeFile({
      filePath: filePath,
      data: content,
      success: function success() {
        worker.postMessage({
          type: messageType.writeFile,
          payload: {
            isok: !0,
            filePath: filePath
          }
        });
      },
      fail: function fail(err) {
        worker.postMessage({
          type: messageType.writeFile,
          payload: {
            isok: !1,
            filePath: filePath,
            err: err
          }
        });
      }
    });
  }
  if (type === messageType.config) {
    var systemInfo = payload.systemInfo;
    var platform = systemInfo.platform,
      version = systemInfo.version;
    var isAndroid = 'android' === platform.toLocaleLowerCase();
    var isClientValid = compareVersion(version, '8.0.18');
    worker.postMessage({
      type: messageType.config,
      payload: {
        supportWorkerFs: isAndroid && !!fs && isClientValid,
        supportSharedBuffer: isAndroid && !!createSharedArrayBuffer
      }
    });
  }
}); 
 			});
 	