function open_camera() {
  // Configure a few settings and attach camera
  Webcam.set({
    width: 320,
    height: 240,
    image_format: "jpeg",
    jpeg_quality: 100,
  });
  Webcam.attach("#my_camera");
}
// Code to handle taking the snapshot and displaying it locally
function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function (data_uri) {
    // display results in page
    Webcam.reset("#my_camera");
    document.getElementById("my_camera").innerHTML =
      '<img src="' + data_uri + '"/>';
    console.log(data_uri);
  });
}
