# expo-image-picker-after-activity-destroy-issue

以下の手順でカメラが起動しないことを確認

* Androidの開発者オプションで、「Don't keep activities」を有効にする
* `npx react-native run-android`でアプリ起動
* カメラ起動
* アプリをバックグラウンドに移動
* アプリをフォアグラウンドに移動
* カメラ起動 <- ここでエラーが発生

## 検証ページを作成するまでに実施したこと

* `expo init`でPJ作成
  * templateは、`bare-minimum`を選択
* `expo install expo-image-picker`を実行してexpo-image-pickerをインストール
* `npx pod-install`を実行


## エラーログ

```text
Possible Unhandled Promise Rejection (id: 0):
Error: Call to function 'ExponentImagePicker.launchCameraAsync' has been rejected.
→ Caused by: java.lang.IllegalStateException: Attempting to launch an unregistered ActivityResultLauncher with contract expo.modules.imagepicker.contracts.CameraContract@9e65558 and input CameraContractOptions(uri=content://com.imagepickerbareexample.ImagePickerFileProvider/cached_expo_files/ImagePicker/b4f4ed73-984c-47a5-b8b0-238b158763ae.jpeg, options=expo.modules.imagepicker.ImagePickerOptions@f2356b1). You must ensure the ActivityResultLauncher is registered before calling launch()
promiseMethodWrapper@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:23526:45
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:113950:46
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:119775:66
generatorResume@[native code]
asyncGeneratorStep@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25076:26
_next@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25098:29
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25105:14
tryCallTwo@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30617:9
doResolve@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30781:25
Promise@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30640:14
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25094:25
_launchCameraAsync@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:119777:36
launchCameraAsync@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:119764:36
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:119532:57
generatorResume@[native code]
asyncGeneratorStep@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25076:26
_next@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25098:29
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25105:14
tryCallTwo@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30617:9
doResolve@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30781:25
Promise@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:30640:14
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:25094:25
pickImage@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:119546:26
_performTransitionSideEffects@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:67459:22
_receiveSignal@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:67401:45
onResponderRelease@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:67241:34
invokeGuardedCallbackProd@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3113:21
invokeGuardedCallback@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3217:42
invokeGuardedCallbackAndCatchFirstError@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3221:36
executeDispatch@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3297:48
executeDispatchesInOrder@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3317:26
executeDispatchesAndRelease@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4666:35
forEach@[native code]
forEachAccumulated@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:3847:22
runEventsInBatch@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4690:27
runExtractedPluginEventsInBatch@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4770:25
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4745:42
batchedUpdates$1@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:17155:20
batchedUpdates@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4652:36
_receiveRootNodeIDEvent@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4744:23
receiveTouches@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:4798:34
__callFunction@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:24035:36
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:23763:31
__guard@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:23989:15
callFunctionReturnFlushedQueue@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.imagepickerbareexample&modulesOnly=false&runModule=true:23762:21
callFunctionReturnFlushedQueue@[native code]
```