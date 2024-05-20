function countDown(time) {
  while (time > 0) {
    let time2 = time
    setTimeout(() => {
      console.log(time2)
    }, 1000)
    time -= 1000
  }
  console.log('success')
}

countDown(5000)
