// Takes a data URI and returns the Data URI corresponding 
// to the resized image at the wanted size.
// Use: const newDataURI = await resizedataURL('yourDataURIHere', 50, 50);

module.exports = (data, width, height) => {
    return new Promise(async function(resolve,reject){

        // We create an image to receive the Data URI
        var img = document.createElement('img');

        // When the event "onload" is triggered we can resize the image.
        img.onload = function()
        {        
            // We create a canvas and get its context.
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            // We set the dimensions at the wanted size.
            canvas.width = width;
            canvas.height = height;

            // We resize the image with the canvas method drawImage();
            ctx.drawImage(this, 0, 0, width, height);

            var dataURI = canvas.toDataURL();

            // This is the return of the Promise
            resolve(dataURI);
        };

        // We put the Data URI in the image's src attribute
        img.src = data;

    })
}
