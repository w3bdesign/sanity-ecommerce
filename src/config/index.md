In the config directory, you can put any runtime config files for your application and third-party
services. For instance, if you use a service like Firebase or OIDC for authentication, you will need to add
configuration files and use them in your app. Just make sure not to confuse config with environmental
variables, as anything that goes here will be present in the build bundle.