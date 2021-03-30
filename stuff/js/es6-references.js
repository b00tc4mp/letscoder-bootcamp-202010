for (let i = 0; i < 3; i++)
    setTimeout(function() { console.log(i) }, 1000)
415
VM2299:2 0
VM2299:2 1
VM2299:2 2
for (var i = 0; i < 3; i++)
    setTimeout(function() { console.log(i) }, 1000)
418
VM2301:2 3
VM2301:2 3
VM2301:2 3