// ----=  HANDS  =----
function prepareInteraction() {
  bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);

    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;

    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    
    let ringFingerTipX = hand.ring_finger_tip.x;
    let ringFingerTipY = hand.ring_finger_tip.y;

    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;

     let pinkyFingerTipX = hand.pinky_finger_tip.x;
     let pinkyFingerTipY = hand.pinky_finger_tip.y;
    /*
    Start drawing on the hands here
    */
    stroke(255, 190, 87)
    strokeWeight(5);
    line(thumbTipX, thumbTipY, middleFingerTipX, middleFingerTipY);
    line(middleFingerTipX, middleFingerTipY, pinkyFingerTipX, pinkyFingerTipY);
    line(pinkyFingerTipX, pinkyFingerTipY, indexFingerTipX, indexFingerTipY);
    line(indexFingerTipX, indexFingerTipY, ringFingerTipX, ringFingerTipY);
    line(ringFingerTipX, ringFingerTipY, thumbTipX, thumbTipY);

    // this is the border around the star
    line(thumbTipX, thumbTipY, indexFingerTipX, indexFingerTipY);
    line(indexFingerTipX, indexFingerTipY, middleFingerTipX, middleFingerTipY);
    line(middleFingerTipX, middleFingerTipY, ringFingerTipX, ringFingerTipY);
    line(ringFingerTipX, ringFingerTipY, pinkyFingerTipX, pinkyFingerTipY);
    line(pinkyFingerTipX, pinkyFingerTipY, thumbTipX, thumbTipY);
    // // pinchCircle(hand)
    // fill(225, 225, 0);
    // ellipse(indexFingerTipX, indexFingerTipY, 30, 30);

  
    /*
    Stop drawing on the hands here
    */
  }



  //------------------------------------------------------------
  //facePart


  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }
    // console.log(face);
     let isMouthOpen = false;

    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    let thirdEyeX = face.keypoints[151].x;
    let thirdEyeY = face.keypoints[151].y;
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
function checkIfMouthOpen(face) {

  let upperLip = face.keypoints[13]
  let lowerLip = face.keypoints[14]
  // ellipse(lowerLip.x,lowerLip.y,20)
  // ellipse(upperLip.x,upperLip.y,20)

  let d = dist(upperLip.x, upperLip.y, lowerLip.x, lowerLip.y);
  console.log(d)
  if (d < 20) {
    isMouthOpen = false;
  } else {
    isMouthOpen = true;
  }

  
}
    /*
    Start drawing on the face here
    */
    noStroke()
    fill(255);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    
    //eye whites
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight);
    // ellipse(thirdEyeX, thirdEyeY, rightEyeWidth, rightEyeHeight);

    //irises
    fill(107, 201, 52)
    ellipse(leftEyeCenterX, leftEyeCenterY, 20, 20);
    ellipse(rightEyeCenterX, rightEyeCenterY, 20, 20);
    // fill(145, 41, 242)
    // ellipse(thirdEyeX, thirdEyeY, 20, 20);

    checkIfMouthOpen(face);
    if (isMouthOpen) {
      fill(255, 190, 87);
      ellipse(thirdEyeX, thirdEyeY, rightEyeWidth, rightEyeHeight);
      ellipse(leftEyeCenterX, leftEyeCenterY, 20, 20);
      ellipse(rightEyeCenterX, rightEyeCenterY, 20, 20);
      fill(255)
      ellipse(thirdEyeX, thirdEyeY, 20, 20);
    }
    // fill(225, 225, 0);
    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);
    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function checkIfMouthOpen(face) {

  let upperLip = face.keypoints[13]
  let lowerLip = face.keypoints[14]
  // ellipse(lowerLip.x,lowerLip.y,20)
  // ellipse(upperLip.x,upperLip.y,20)

  let d = dist(upperLip.x, upperLip.y, lowerLip.x, lowerLip.y);
  console.log(d)
  if (d < 10) {
    isMouthOpen = false;
  } else {
    isMouthOpen = true;
  }

  
}

function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}