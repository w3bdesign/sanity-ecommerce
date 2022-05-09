The hooks directory, as the name suggests, would hold any custom and reusable hooks. Note that any
hooks that are not really reusable, but are coupled to a specific feature, should be placed in the same
directory as that feature. For instance, imagine we have a newsletter form component that contains a form
to sign up a user for a newsletter. This component could utilise a hook called useNewsletterSignup
that would handle signing up a user. A hook like this shouldn’t be placed in the global src/hooks
directory, but rather locally, as it is coupled to the NewsletterForm component.
