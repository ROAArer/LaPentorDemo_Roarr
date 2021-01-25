var panorama, viewer, container, infospot, controlButton, modeButton, videoButton;

var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;
var videoPlaying = false;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://i.imgur.com/SBOvcMY.jpg' );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );

//add hotspot
infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -100, -500, -5000 );
infospot.addHoverText( "Hello! I'm a hotspot" );
//have the panorama add the hotspot. All panoramas must be added by viewer
panorama.add(infospot);
//do something when you click on the hotspot
infospot.addEventListener( 'click', function(){
  fadeIn();
} );

// arcball movement
controlButton.addEventListener( 'click', function(){

  controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
  
  switch ( controlIndex ) {
      
    case 0: viewer.enableControl( PANOLENS.CONTROLS.ORBIT ); break;
    case 1: viewer.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION ); break;
    default: break;
      
  }

} );

modeButton.addEventListener( 'click', function(){
  
  modeIndex = modeIndex >= 2 ? 0 : modeIndex + 1;
  
  switch ( modeIndex ) {
      
    case 0: viewer.disableEffect(); break;
    case 1: viewer.enableEffect( PANOLENS.MODES.CARDBOARD ); break;
    case 2: viewer.enableEffect( PANOLENS.MODES.STEREO ); break;
    default: break;
      
  }

} );

