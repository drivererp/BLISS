document.addEventListener("deviceready",onDeviceReady,false);

function capturePhoto(){
        navigator.camera.getPicture(uploadPhoto,null,{
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

function uploadPhoto(data){
// this is where you would send the image file to server
    var fail, ft, options, params, win;

//    var cameraPic = document.getElementById('cameraPic');
//    cameraPic.style.display = 'block';

    //cameraPic.src = "data:image/jpeg;base64," + data;
    $('#cameraPic').attr("src",data);

    // Successful upload to the server
    navigator.notification.alert (
        'Image has been uploaded',       // message
        okay,                           // callback
        'Photo Uploaded',              // title
        'OK'                          // buttonName
    );

      var options = new FileUploadOptions();

      options.fileKey="file";
      options.fileName=data.substr(data.lastIndexOf('/')+1);
      options.mimeType="image/jpeg";

      var params = new Object();
      params.value1 = "test";
      params.value2 = "param";
      options.params = params;
      options.chunkedMode = false;

      var ft = new FileTransfer();

      ft.upload(data, "http://10.0.4.51/uploadAppImage.php?orderNo=45364", win, fail, options);
      alert('a');
}

function okay(){
    // do something here
}