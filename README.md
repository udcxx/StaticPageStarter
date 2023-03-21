# 🏃‍♂️Static Page Starter🏃‍♂️

静的なWebページを簡単に作り始めることができるテンプレートです

## 🍺 How To Use

### 1. 新たに制作するサイトのディレクトリを作成する

新たに制作するサイトのディレクトリを作成します。（例：new_web_site）

### 2. Static Page Starter からコピーする

Static Page Starter から新しく制作するサイトのディレクトリへ、以下のファイル/フォルダをコピーします。

* scripts/
* src/
* package.json
* .git

### 3. 必要なパッケージをインストールする

新しく制作するディレクトリで以下のコマンドを実行し、必要なパッケージをインストールする

```
$ npm install
```

### 4. 制作する

制作作業を始める前に、以下のコマンドを実行し、自動コンパイルなどを有効にします。

```
$ npm run dev
```

制作作業は、srcディレクトリ内の HTML や JavaScript Scss ファイルを編集します。

💡 scssファイルを新たに追加した場合でも、`style.scss` を編集する必要はありません。自動的に scss ファイルを監視し、追記します。その他のscssファイルに関する注意点は、[scssディレクトリのREADME](/src/assets/scss/README.md) を参照してください。

制作終了時には、`Ctrl` `C` を同時に押して、自動コンパイルなどを終了させます。

## 🍺 History

* 2023/03/21 公開

## 🍺 Contact

お問い合わせ、ご相談は [twitter](https://twitter.com/udc_xx) からお気軽にどうぞ！

不具合などは、issue にて報告いただけますと幸いです😗