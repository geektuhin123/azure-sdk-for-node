/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import FaceAPIClient = require('./face/faceAPIClient');
import * as FaceModels from './face/models';
import ComputerVisionAPIClient = require('./computerVision/computerVisionAPIClient');
import * as ComputerVisionModels from './computerVision/models';
import ContentModeratorAPIClient = require('./contentModerator/contentModeratorAPIClient');
import * as ContentModeratorModels from './contentModerator/models';

export { FaceAPIClient, FaceModels, ComputerVisionAPIClient, ComputerVisionModels,
         ContentModeratorAPIClient, ContentModeratorModels };