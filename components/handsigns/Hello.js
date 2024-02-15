import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const helloSign = new GestureDescription('hello');

// Thumb
helloSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
helloSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

// Index
helloSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
helloSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
helloSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
helloSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
helloSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
