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
 * Properties of an Azure ML commitment association.
 *
 */
class CommitmentAssociationProperties {
  /**
   * Create a CommitmentAssociationProperties.
   * @member {string} [associatedResourceId] The ID of the resource this
   * association points to, such as the ARM ID of an Azure ML web service.
   * @member {string} [commitmentPlanId] The ARM ID of the parent Azure ML
   * commitment plan.
   * @member {date} [creationDate] The date at which this commitment
   * association was created, in ISO 8601 format.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CommitmentAssociationProperties
   *
   * @returns {object} metadata of CommitmentAssociationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CommitmentAssociationProperties',
      type: {
        name: 'Composite',
        className: 'CommitmentAssociationProperties',
        modelProperties: {
          associatedResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'associatedResourceId',
            type: {
              name: 'String'
            }
          },
          commitmentPlanId: {
            required: false,
            readOnly: true,
            serializedName: 'commitmentPlanId',
            type: {
              name: 'String'
            }
          },
          creationDate: {
            required: false,
            readOnly: true,
            serializedName: 'creationDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = CommitmentAssociationProperties;
