因為ReactNative-Cl環境建立不起來，只能使用才用Expo CLI耗時時間一天中午和晚上。

<div style="text-align:center;display:flex;">

   <img style="flex:1; padding: 0.25rem" src="https://i.imgur.com/eWQHNyZ.jpg" width="48%"/>
   <img style="flex:1; padding: 0.25rem" src="https://i.imgur.com/GaZOUR1.jpg" width="48%"/>
   
</div>

<div style="text-align:center;display:flex;">

   <img style="flex:1; padding: 0.25rem" src="https://i.imgur.com/ORbATp8.jpg" width="48%"/>
   <img style="flex:1; padding: 0.25rem" src="https://i.imgur.com/MZ6YqNA.jpg" width="48%"/>
   
</div>


### 需要設定 HOST IP
package.json scripts:start
```sh
set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.X.X
```

+ App.js
    + HomeScreen
    + backScreen
+ components/BottomTabNavigator.js
    + tab1
    + tab2

說明IOS、Android的上架流程與注意事項
需要申請開發者帳號，打包APP和準備上架資料，填寫資料注意審核內容分級，可能這樣吧?
