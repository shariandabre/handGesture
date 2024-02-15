import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const goodbyeSign = new GestureDescription('goodbye');

// Thumb
goodbyeSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
goodbyeSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

// Index
goodbyeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
goodbyeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
goodbyeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
goodbyeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
goodbyeSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
goodbyeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
goodbyeSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
goodbyeSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);