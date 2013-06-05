document.addEventListener("deviceready",onDeviceReady,false);

function expCapturePhoto(){
  navigator.camera.getPicture(expUploadPhoto,null,{
    quality:60,
    destinationType: Camera.DestinationType.FILE_URI,
    //destinationType: Camera.DestinationType.DATA_URL,
    sourceType:1,
    correctOrientation: true,
    encodingType: Camera.EncodingType.JPEG,
    saveToPhotoAlbum: true,
    popoverOptions: CameraPopoverOptions
  });
}

function expUploadPhoto(data){
  // this is where you would send the image file to server
  var fail, ft, options, params, win;

  $('#cameraPicExp').attr("src",data);
  options = new FileUploadOptions();

  options.fileKey="file";
  options.fileName=data.substr(data.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";

  params = new Object();
  params.value1 = "test";
  params.value2 = "param";
  options.params = params;
  options.chunkedMode = false;

  ft = new FileTransfer();
  appUrl = "http://" + localStorage.url + "/uploadAppImage.php?docType=EXPREC&docNo=1234";

  ft.upload(data, appUrl, win, function fail(error) {
    alert("An error has occurred uploading this image: Error Code = [" + error.message + "]\n Please check you have a network connection");
  }, options);
}