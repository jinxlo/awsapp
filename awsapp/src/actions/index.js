import * as rekognitionActions from './rekognitionActions';
import * as otherActions from './otherActions';
import { uploadImages, getLabeledResults, downloadCSV } from './actions';


export const { uploadImages, getLabeledResults, downloadCSV } = rekognitionActions;
export const { otherAction1, otherAction2 } = otherActions;
