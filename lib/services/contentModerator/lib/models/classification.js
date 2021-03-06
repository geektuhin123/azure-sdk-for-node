/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The classification details of the text.
 *
 */
class Classification {
  /**
   * Create a Classification.
   * @member {number} [adultScore] The adult score.
   * @member {number} [racyScore] The racy score.
   * @member {number} [offensiveScore] The offensive score.
   * @member {boolean} [reviewRecommended] The review recommended flag.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Classification
   *
   * @returns {object} metadata of Classification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Classification',
      type: {
        name: 'Composite',
        className: 'Classification',
        modelProperties: {
          adultScore: {
            required: false,
            serializedName: 'AdultScore',
            type: {
              name: 'Number'
            }
          },
          racyScore: {
            required: false,
            serializedName: 'RacyScore',
            type: {
              name: 'Number'
            }
          },
          offensiveScore: {
            required: false,
            serializedName: 'OffensiveScore',
            type: {
              name: 'Number'
            }
          },
          reviewRecommended: {
            required: false,
            serializedName: 'ReviewRecommended',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = Classification;
