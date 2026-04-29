# Release Notes

## 🐞 Bug Fixes

- **FileList incorrect owner on form load** - Fixed an issue where FileList component initialized with the wrong file owner during form load, causing failed API requests. The component now waits for the correct owner context before making calls.
- **Enforce default "From" address for SendGrid** - Added a configuration option to enforce a default "From" email address for SendGrid. When enabled, any custom sender is overridden, preventing delivery failures from unverified addresses.
- **Fixed fetching of nested entities via GQL**

## 💪 Enhancements

- **External authentification clean up**
