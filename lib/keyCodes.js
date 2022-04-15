/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

 /**
 * keyCodes
 *
 * @since 1.0.0
 * @type {Readonly<{insert: number, del: number, right: number, pageup: number, delete: number, down: number, space: number, home: number, pagedown: number, backspace: number, tab: number, esc: number, left: number, end: number, enter: number, up: number}>}
 *
 */
 var keyCodes = Object.freeze({
     enter: 13,
     tab: 9,
     delete: 46,
     esc: 27,
     space: 32,
     up: 38,
     down: 40,
     left: 37,
     right: 39,
     end: 35,
     home: 36,
     del: 46,
     backspace: 8,
     insert: 45,
     pageup: 33,
     pagedown: 34
 });

module.exports = keyCodes;