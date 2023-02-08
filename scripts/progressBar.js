import $ from 'jquery'

export const initProgressBar = () => {
  moveProgressBar()
  // on browser resize...
  $(window).resize(function () {
    moveProgressBar()
  })

  // SIGNATURE PROGRESS
  function moveProgressBar() {
    let getPercent = $('.progress-bar').data('progress-percent') / 100
    var getProgressWrapWidth = $('.progress-wrap').width()
    var progressTotal = getPercent * getProgressWrapWidth
    var animationLength = 2500

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate(
      {
        width: progressTotal,
      },
      animationLength,
    )
  }
}
