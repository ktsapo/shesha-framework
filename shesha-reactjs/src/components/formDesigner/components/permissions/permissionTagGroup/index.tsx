import AutocompleteTagGroupComponent, { IAutocompleteTagsOutlinedComponentProps } from '../../autocompleteTagGroup';

// Just initialize AutocompleteTagsOutlinedComponent with specific URL

const PermissionTagGroupComponent = {
  ...AutocompleteTagGroupComponent,
  type: 'permissionTagGroup',
  name: 'Permission Tag Group',
  initModel: model => {
    const customProps: IAutocompleteTagsOutlinedComponentProps = {
      ...model,
      autocompleteUrl: "/api/services/app/permission/autocomplete"
    };
    return customProps;
  }
};

export default PermissionTagGroupComponent;
