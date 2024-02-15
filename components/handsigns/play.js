import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const playSign = new GestureDescription('play');

// Thumb
playSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
playSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

// Index
playSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
// playSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
playSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// playSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
playSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// playSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
playSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
playSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
