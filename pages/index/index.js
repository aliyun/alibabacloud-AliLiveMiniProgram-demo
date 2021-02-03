// index.js
const app = getApp()

Page({
  data: {
    hasPushUrl: false,
    pushUrl: '',
    hasPlayUrl: false,
    playUrl: ''
  },

  bindPushUrlInput: function (e) {
    this.setData({
      pushUrl: e.detail.value,
    })
  },

  bindPushButton: function(){
    this.setData({
      hasPushUrl: true
    })
  },

  bindPlayUrlInput: function (e) {
    this.setData({
      playUrl: e.detail.value,
    })
  },

  bindPlayButton: function(){
    this.setData({
      hasPlayUrl: true
    })
  },

  onPushStateChange(e){
    console.log('live-pusher code:', e.detail.code)
  },

  onPlayStateChange(e){
    console.log('live-player code:', e.detail.code)
  },

  onPlayError(e){
    console.error('live-player error:', e.detail.errMsg)
  },

  onLoad() {
  }
})
