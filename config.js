

/**
 * User Profile
 */


var profile = {
  userName: 'saml.jackson@example.com',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  FirstName: 'Saml',
  LastName: 'Jackson',
  mail: 'saml.jackson@example.com',
  group: 'hs_admin'
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: "FirstName",
  optional: false,
  displayName: 'First Name',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "LastName",
  optional: false,
  displayName: 'Last Name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "mail",
  optional: false,
  displayName: 'E-Mail Address',
  description: 'The e-mail address of the user',
  multiValue: false
}, {
  id: "authorities",
  optional: true,
  displayName: 'Authorities',
  description: 'Group membership of the user',
  multiValue: false
}, {
  id: "custom_username",
  optional: true,
  displayName: 'custom_username',
  description: 'Custom username for certain tests',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
