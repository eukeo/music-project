var widget = new SoundcloudWidget('soundcloud')
var button = document.getElementById('soundcloud-load-button')
var urlInput = document.getElementById('soundcloud-url')
var loadedMessage = document.getElementById('loaded-message')

var auto_play = document.getElementById('auto_play')
var buying = document.getElementById('buying')
var liking  = document.getElementById('liking')
var download  = document.getElementById('download')
var sharing = document.getElementById('sharing')
var show_artwork  = document.getElementById('show_artwork')
var show_comments = document.getElementById('show_comments')
var show_playcount  = document.getElementById('show_playcount')
var show_user = document.getElementById('show_user')
var start_track = document.getElementById('start_track')

button.addEventListener('click', function () {
  var url = urlInput.value
  var options = {
    auto_play: auto_play.checked,
    buying: buying.checked,
    liking: liking.checked,
    download: download.checked,
    sharing: sharing.checked,
    show_artwork: show_artwork.checked,
    show_comments: show_comments.checked,
    show_playcount: show_playcount.checked,
    show_user: show_user.checked,
    start_track: Number(start_track.value)
  }
  widget.load(url, options).then(function () {
    loadedMessage.classList.remove('hidden')
    loadedMessage.innerHTML = '<a href="' +
      url + '" target="_blank">Your sound<a> was loaded!'
    urlInput.value = ''
  })
})

widget.on(SoundcloudWidget.events.READY, function () {
  var container = document.getElementById('loader')
  container.classList.remove('active')
});