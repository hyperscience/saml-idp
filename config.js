
/**
 * User Profile
 */
var profile = {
  userName: 'sjackson',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  firstName: 'Saml',
  lastName: 'Jackson',
  displayName: 'saml jackson',
  email: 'saml.jackson@example.com',
  mobilePhone: '+1-415-555-5141',
  groups: 'Simple IdP Users, West Coast Users, Cloud Users'
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: "FirstName",
  optional: false,
  displayName: 'FirstName',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "LastName",
  optional: false,
  displayName: 'LastName',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "mail",
  optional: false,
  displayName: 'mail',
  description: 'The e-mail address of the user',
  multiValue: false
},{
  id: "authorities",
  optional: true,
  displayName: 'authorities',
  description: 'Group memberships of the user',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
