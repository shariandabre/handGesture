import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const ThumbsDown = new GestureDescription('thumbs_down');

ThumbsDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

ThumbsDown.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ThumbsDown.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
ThumbsDown.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ThumbsDown.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
ThumbsDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ThumbsDown.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
ThumbsDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ThumbsDown.addDirection(Finger.Pinky,FingerDirection.VerticalUp,0.70);