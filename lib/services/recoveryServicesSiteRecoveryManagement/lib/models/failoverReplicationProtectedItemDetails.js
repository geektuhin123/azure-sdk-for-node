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
 * Failover details for a replication protected item.
 *
 */
class FailoverReplicationProtectedItemDetails {
  /**
   * Create a FailoverReplicationProtectedItemDetails.
   * @member {string} [name] The name.
   * @member {string} [friendlyName] The friendly name.
   * @member {string} [testVmName] The test Vm name.
   * @member {string} [testVmFriendlyName] The test Vm friendly name.
   * @member {string} [networkConnectionStatus] The network connection status.
   * @member {string} [networkFriendlyName] The network friendly name.
   * @member {string} [subnet] The network subnet.
   * @member {string} [recoveryPointId] The recovery point Id.
   * @member {date} [recoveryPointTime] The recovery point time.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FailoverReplicationProtectedItemDetails
   *
   * @returns {object} metadata of FailoverReplicationProtectedItemDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FailoverReplicationProtectedItemDetails',
      type: {
        name: 'Composite',
        className: 'FailoverReplicationProtectedItemDetails',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          testVmName: {
            required: false,
            serializedName: 'testVmName',
            type: {
              name: 'String'
            }
          },
          testVmFriendlyName: {
            required: false,
            serializedName: 'testVmFriendlyName',
            type: {
              name: 'String'
            }
          },
          networkConnectionStatus: {
            required: false,
            serializedName: 'networkConnectionStatus',
            type: {
              name: 'String'
            }
          },
          networkFriendlyName: {
            required: false,
            serializedName: 'networkFriendlyName',
            type: {
              name: 'String'
            }
          },
          subnet: {
            required: false,
            serializedName: 'subnet',
            type: {
              name: 'String'
            }
          },
          recoveryPointId: {
            required: false,
            serializedName: 'recoveryPointId',
            type: {
              name: 'String'
            }
          },
          recoveryPointTime: {
            required: false,
            serializedName: 'recoveryPointTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = FailoverReplicationProtectedItemDetails;