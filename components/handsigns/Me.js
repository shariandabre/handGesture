import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const meSign = new GestureDescription('me');

// Thumb
meSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
meSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

// Index
meSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
meSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
meSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// meSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
meSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// meSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
meSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
// meSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);