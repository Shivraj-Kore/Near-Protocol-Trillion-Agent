/**
 *
 * NAME: getprivatekey
 *
 */
import { LitActions } from "@lit-protocol/lit-node-client";

"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // lit_actions/src/getprivatekey.action.ts
  var require_getprivatekey_action = __commonJS({
    "lit_actions/src/getprivatekey.action.ts"(exports) {
      (() => __async(exports, null, function* () {
        const sigShare = yield LitActions.signEcdsa({
          toSign: new Uint8Array([1, 2, 3, 4, 5]),
          publicKey,
          // <-- You should pass this in jsParam
          sigName
        });
        LitActions.setResponse({
          response: JSON.stringify({
            foo: "bar"
          })
        });
      }))();
      (() => __async(exports, null, function* () {
        const encryptedKey = "STORED_ENCRYPTED_KEY";
        const decryptedKey = yield LitActions.decrypt({
          encryptedData: encryptedKey,
          publicKey
          // Pass in jsParam
        });
        LitActions.setResponse({
          response: JSON.stringify({
            privateKey: decryptedKey
          })
        });
      }))();
    }
  });
  require_getprivatekey_action();
})();

export const yourPrivateKey = '41d5427ffeb3b2babd6c3d26713e4ec92a653570de26f6741f75e83fd75ceb60';