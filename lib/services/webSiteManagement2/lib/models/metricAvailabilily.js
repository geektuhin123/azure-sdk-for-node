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
 * @class
 * Initializes a new instance of the MetricAvailabilily class.
 * @constructor
 * Class repesenting metrics availability and retention
 * @member {string} [timeGrain] Time grain
 * 
 * @member {string} [retention] Retention period for the current
 * {Microsoft.Web.Hosting.Administration.MetricAvailabilily.TimeGrain}
 * 
 */
function MetricAvailabilily() {
}

/**
 * Defines the metadata of MetricAvailabilily
 *
 * @returns {object} metadata of MetricAvailabilily
 *
 */
MetricAvailabilily.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MetricAvailabilily',
    type: {
      name: 'Composite',
      className: 'MetricAvailabilily',
      modelProperties: {
        timeGrain: {
          required: false,
          serializedName: 'timeGrain',
          type: {
            name: 'String'
          }
        },
        retention: {
          required: false,
          serializedName: 'retention',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = MetricAvailabilily;