
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
  id: "first_name",
  optional: false,
  displayName: 'first_name',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "last_name",
  optional: false,
  displayName: 'last_name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "email",
  optional: false,
  displayName: 'email',
  description: 'The e-mail address of the user',
  multiValue: false
},{
  id: "group",
  optional: true,
  displayName: 'group',
  description: 'Group memberships of the user',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
