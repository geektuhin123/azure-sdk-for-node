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

const models = require('./index');

/**
 * Target devices based on a date tag value.
 *
 * @extends models['Criterion']
 */
class DateTagCriterion extends models['Criterion'] {
  /**
   * Create a DateTagCriterion.
   * @member {string} [name] The name of the custom tag.
   * @member {date} [value] It can be either: * an absolute date using
   * yyyy-MM-dd format (e.g. 1969-12-07 stands for 7 Dec 1969). * an offset in
   * days relative to the current day (`TODAY` + `value`).
   * @member {string} [op] comparison operator: `EQ` (equal to), `LT` (less
   * than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater
   * than or equal to). Possible values include: 'EQ', 'LT', 'GT', 'LE', 'GE'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DateTagCriterion
   *
   * @returns {object} metadata of DateTagCriterion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'date-tag',
      type: {
        name: 'Composite',
        className: 'DateTagCriterion',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Date'
            }
          },
          op: {
            required: false,
            serializedName: 'op',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DateTagCriterion;
