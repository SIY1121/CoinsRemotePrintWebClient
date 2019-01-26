<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="pa-3">
        <h1>このサイトについて</h1>
        <p>
          筑波大学情報学群情報科学類 (coins) に設置されているプリンターを自分のPC、スマホから利用するためのサービスです。
        </p>
        <h1>注意事項、免責事項</h1>
        <p>
          このサービスは非公式です。自己責任でお使いください。また、予告なくサービスを終了することがあります。
        </p>
        <h1>個人情報の管理について</h1>
        <p>
          このサイトではユーザーの情報を入力する必要があります。<br>
          個人情報はサーバーに一切記録されないようになっています。
          ソースコードを公開していますので、興味のある方は開発者向け情報を参照してください。
        </p>
        <h1>管理者</h1>
        <p>このサイトは <a href="https://twitter.com/SIY1121">@SIY1121</a>が制作、管理を行っています。</p>
        <p>意見等あればご連絡ください。</p>
        <h1>開発者向け情報</h1>
        このサービスは、Nuxt.js で生成されたフロントエンドと、coinsサーバーに設置されたphpで記述されたAPIから成っています。
        どちらもオープンソースで公開しています。APIを利用してネイティブアプリを作っていただいても構いませんし、本体へのコントリビュートもお待ちしています。
        <v-layout>
          <v-flex>
            Coins Remote Print API
          </v-flex>
          <v-flex>
            Coins Remote Print Web Client
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
