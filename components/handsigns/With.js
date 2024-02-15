import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const withSign = new GestureDescription('with');

// Thumb
withSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// withSign.addDirection(Finger.Thumb, FingerDirection., 0.70);

// Index
withSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
// withSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// Middle
withSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// withSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// Ring
withSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// withSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// Pinky
withSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
// withSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);