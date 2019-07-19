// sqliteを使用するDatabase Serviceクラス.
// 「Cordovaプラグインの管理」から追加ができなかったため下記コマンドを実行してプラグインを追加
// cordova plugin add https://github.com/xpbrew/cordova-sqlite-storage.git

import {Injectable} from '@angular/core';

declare let sqlitePlugin :any;

@Injectable()
export class DatabaseService {
    // Database Ojbect
    db: any = null;

    // Database Parameter
    databaseParam = {
        name: 'cesmo.db',
        location: 'default',
    };

    initialize = async () => {
        document.addEventListener("deviceready", () => {
            this.db = sqlitePlugin.openDatabase(this.databaseParam);
        });
    }

    executeDDL = (sql: String): any => {
        this.db.transaction((tr: any) => {
            tr.executeSql(sql, (tr: any, rs: any) => {
              console.log("result : " + JSON.stringify(rs));
              return true;
            }, (tr: any, error: any)=>{
              console.log("sql error: " + error.message);
              return false;
            })
        }, (error: any) => {
          console.log("transaction error: " + error.message);
          return false;
        }, () => {
          console.log("transaction ok.");
        });
    }

    executeIUD = (sql: String, param: String[]): any => {
        this.db.transaction((tr: any) => {
            tr.executeSql(sql, (tr: any, rs: any) => {
              console.log("result : " + JSON.stringify(rs));
              return true;
            }, (tr: any, error: any)=>{
              console.log("sql error: " + error.message);
              console.log("sql   : " + sql);
              console.log("param : " + param);
              return false;
            })
        }, (error: any) => {
          console.log("transaction error: " + error.message);
          return false;
        }, () => {
          console.log("transaction ok.");
        });
    }

    executeSelect = (sql: String, param: String[]): any => {
        this.db.transaction((tr: any) => {
            tr.executeSql(sql, (tr: any, rs: any) => {
              console.log("result : " + JSON.stringify(rs));
              return rs;
            }, (tr: any, error: any)=>{
              console.log("sql error: " + error.message);
              console.log("sql   : " + sql);
              console.log("param : " + param);
              return false;
            })
        }, (error: any) => {
          console.log("transaction error: " + error.message);
          return false;
        }, () => {
          console.log("transaction ok.");
        });
    }
}
