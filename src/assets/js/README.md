# Functions

よく使う関数を `functions.js` にまとめています。

`script.js` などで、必要に応じて呼び出すことで、利用可能になります（デフォルトでは動作しないようになってます）。

以下では、各関数の指定可能な引数や、具体的な使用方法を、関数ごとに記載します。

## slideUp

対象の要素を上にスライドさせながら非表示にします。アコーディオンメニューなどに利用できます。

**引数：**
* el : 対象の要素
* duration : 速度（単位：ms）, 省略可（省略時の初期値：300）

**使用例：**
```
const el = document.querySelector('.target_class');
const duration = 300;

slideUp(el, duration);
```



## slideDown

対象の要素を下にスライドさせながら表示します。アコーディオンメニューなどに利用できます。

**引数：**
* el : 対象の要素
* duration : 速度（単位：ms）, 省略可（省略時の初期値：300）

**使用例：**
```
const el = document.querySelector('.target_class');
const duration = 300;

slideDown(el, duration);
```



## slideToggle

対象の要素が非表示の場合、下にスライドさせながら表示します。また、対象のelementが表示されている場合、上にスライドさせながら非表示にします。

アコーディオンメニューなどに利用できます。

**引数：**
* el : 対象の要素
* duration : 速度（単位：ms）, 省略可（省略時の初期値：300）

**使用例：**
```
const el = document.querySelector('.target_class');
const duration = 300;

slideToggle(el, duration);
```



## SmoothScroll

ページ内のアンカーリンク先へ、滑らかに移動します。

Fixedなヘッダーなど、被らせたくない要素のclassを指定することで、スクロール位置を調整することも可能です。

**引数：**
* els : 対象の要素
* excArr : 被らせたくない要素のクラス名（配列で指定）

**使用例：**
```
document.addEventListener("DOMContentLoaded", function() {

    const els = document.querySelectorAll("a.smooth");
    const excArr = ['.header'];

    setSmoothScroll(els, excArr);

});
```