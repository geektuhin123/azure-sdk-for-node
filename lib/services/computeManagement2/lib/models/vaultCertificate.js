/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VaultCertificate class.
 * @constructor
 * Describes a single certificate reference in a Key Vault, and where the
 * certificate should reside on the VM.
 * @member {string} [certificateUrl] Gets or sets the URL referencing a secret
 * in a Key Vault which contains a properly formatted certificate.
 * 
 * @member {string} [certificateStore] Gets or sets the Certificate store in
 * LocalMachine to add the certificate to on Windows, leave empty on Linux.
 * 
 */
function VaultCertificate(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.certificateUrl !== undefined) {
      this.certificateUrl = parameters.certificateUrl;
    }
    if (parameters.certificateStore !== undefined) {
      this.certificateStore = parameters.certificateStore;
    }
  }    
}


/**
 * Validate the payload against the VaultCertificate schema
 *
 * @param {JSON} payload
 *
 */
VaultCertificate.prototype.serialize = function () {
  var payload = {};
  if (this['certificateUrl'] !== null && this['certificateUrl'] !== undefined) {
    if (typeof this['certificateUrl'].valueOf() !== 'string') {
      throw new Error('this[\'certificateUrl\'] must be of type string.');
    }
    payload['certificateUrl'] = this['certificateUrl'];
  }

  if (this['certificateStore'] !== null && this['certificateStore'] !== undefined) {
    if (typeof this['certificateStore'].valueOf() !== 'string') {
      throw new Error('this[\'certificateStore\'] must be of type string.');
    }
    payload['certificateStore'] = this['certificateStore'];
  }

  return payload;
};

/**
 * Deserialize the instance to VaultCertificate schema
 *
 * @param {JSON} instance
 *
 */
VaultCertificate.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['certificateUrl'] !== undefined) {
      this['certificateUrl'] = instance['certificateUrl'];
    }

    if (instance['certificateStore'] !== undefined) {
      this['certificateStore'] = instance['certificateStore'];
    }
  }

  return this;
};

module.exports = VaultCertificate;