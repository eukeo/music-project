// var widgetIframe = document.getElementById('sc-widget'); 
var scUpload = document.getElementById('upload');
// var widgetIframeSrc = ('https://w.soundcloud.com/player/?url=' + e.target.value);
console.log(scUpload)

scUpload.addEventListener('click', function() {
//    scInput.append(widgetIframeSrc)
console.log('hi')
});








// (function(){
//     var widgetIframe = document.getElementById('sc-widget'),
//         widget       = SC.Widget(widgetIframe),
//         newSoundUrl = url;
   
//     widget.bind(SC.Widget.Events.READY, function() {
//       // load new widget
//       widget.bind(SC.Widget.Events.FINISH, function() {
//         widget.load(newSoundUrl, {
//           show_artwork: false
//         });
//       });
//     });
//   }());