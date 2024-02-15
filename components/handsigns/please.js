import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const pleaseSign = new GestureDescription('please');

// Thumb
pleaseSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pleaseSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);

// Index
pleaseSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
// pleaseSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
pleaseSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// pleaseSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
pleaseSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// pleaseSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
pleaseSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
pleaseSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);
