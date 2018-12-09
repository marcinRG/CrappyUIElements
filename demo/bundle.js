(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list11 = [
    {
        id: '1',
        name: 'blue',
        value: '#1515b6',
    },
    {
        id: '1',
        name: 'white',
        value: '#d3e3ff',
    },
    {
        id: '1',
        name: 'back',
        value: '#000',
    },
    {
        id: '1',
        name: 'grey',
        value: '#555555',
    },
    {
        id: '1',
        name: 'red',
        value: '#ff2121',
    },
    {
        id: '1',
        name: 'yellow',
        value: '#fffc1b',
    },
];
// const txtArray11 = new PlainTextArrayWithFilterSingleSelection(list11, 'element 1');
// const comboBox = new ComboBox({
//     elementClass: 'combo-box-cuie',
//     querySelectorString: '.combo-box-1',
//     listElementClass: 'li-elem',
//     maxSize: 5,
// }, txtArray11);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3RzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLElBQU0sTUFBTSxHQUFhO0lBQ3JCO1FBQ0ksRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ25CO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFDRDtRQUNJLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsTUFBTTtLQUNoQjtJQUNEO1FBQ0ksRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ25CO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxLQUFLO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFDRDtRQUNJLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsU0FBUztLQUNuQjtDQUVKLENBQUM7QUFFRix1RkFBdUY7QUFDdkYsa0NBQWtDO0FBQ2xDLHNDQUFzQztBQUN0QywyQ0FBMkM7QUFDM0MsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUNsQixrQkFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lDb2xvcn0gZnJvbSAnLi4vLi4vc3JjL0ludGVyZmFjZXMvRGF0YS9Db2xvcic7XHJcblxyXG5jb25zdCBsaXN0MTE6IElDb2xvcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgbmFtZTogJ2JsdWUnLFxyXG4gICAgICAgIHZhbHVlOiAnIzE1MTViNicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgbmFtZTogJ3doaXRlJyxcclxuICAgICAgICB2YWx1ZTogJyNkM2UzZmYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIG5hbWU6ICdiYWNrJyxcclxuICAgICAgICB2YWx1ZTogJyMwMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIG5hbWU6ICdncmV5JyxcclxuICAgICAgICB2YWx1ZTogJyM1NTU1NTUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIG5hbWU6ICdyZWQnLFxyXG4gICAgICAgIHZhbHVlOiAnI2ZmMjEyMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgbmFtZTogJ3llbGxvdycsXHJcbiAgICAgICAgdmFsdWU6ICcjZmZmYzFiJyxcclxuICAgIH0sXHJcblxyXG5dO1xyXG5cclxuLy8gY29uc3QgdHh0QXJyYXkxMSA9IG5ldyBQbGFpblRleHRBcnJheVdpdGhGaWx0ZXJTaW5nbGVTZWxlY3Rpb24obGlzdDExLCAnZWxlbWVudCAxJyk7XHJcbi8vIGNvbnN0IGNvbWJvQm94ID0gbmV3IENvbWJvQm94KHtcclxuLy8gICAgIGVsZW1lbnRDbGFzczogJ2NvbWJvLWJveC1jdWllJyxcclxuLy8gICAgIHF1ZXJ5U2VsZWN0b3JTdHJpbmc6ICcuY29tYm8tYm94LTEnLFxyXG4vLyAgICAgbGlzdEVsZW1lbnRDbGFzczogJ2xpLWVsZW0nLFxyXG4vLyAgICAgbWF4U2l6ZTogNSxcclxuLy8gfSwgdHh0QXJyYXkxMSk7XHJcbiJdfQ==
