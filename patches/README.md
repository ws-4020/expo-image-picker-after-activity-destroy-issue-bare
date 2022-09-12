# ライブラリへのパッチ

## Expo ImagePickerのエラー対応

`expo-image-picker`を使用した場合、以下の手順でカメラが起動しない事象が発生します。

- アプリでカメラを起動
- カメラで撮影終了（カメラ撮影のIntent終了）
- アプリをバックグラウンドに移動
- OSの判断で（他のアプリとの併用によりメモリ逼迫などで）アプリのActivityが再生成
- アプリをフォアグラウンドに移動
- アプリでカメラを起動 <- 起動しない

原因としては、ExpoのImagePickerは、[Module APIのOnCreate](https://docs.expo.dev/modules/module-api/#oncreate)でカメラを起動するための準備（[Activity Result APIのregisterForActivityResult](https://developer.android.com/training/basics/intents/result?hl=ja)の呼び出し）を実施しています。
Module APIの`OnCreate`は、Applicationの（再）生成時に呼び出されますが、Activityの（再）生成時には呼び出されません。
そのため、カメラを起動するための準備が整わず、カメラが起動しない事象が発生します。

上記エラーに対応するため、アプリでカメラを起動する直前にActivity Result APIの`registerForActivityResult`を都度呼び出すパッチを当てています。